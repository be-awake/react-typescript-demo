import { types } from 'mobx-state-tree';
import axios from 'axios';

const messageStore = types.model('MessageStore', {
    type: types.string,
    text: types.string,
    id: types.string
});

const InterceptionStore = types
    .model('InterceptionStore', {
        loading: types.optional(types.boolean, false),
        messages: types.optional(types.array(messageStore), []),
        pendingRequests: types.optional(types.number, 0)
    })
    .actions((self: any) => ({
        initInterceptors() {
            axios.interceptors.request.use(config => {
                const email = localStorage.getItem('email');
                if (email) {
                    config.headers['email'] = email;
                }
                !config.headers.hiddenLoading && self.showLoading();
                self.increasePendingRequests();
                return config;
            });
            axios.interceptors.response.use(response => {
                self.decreasePendingRequests();
                self.pendingRequests === 0
                    && !response.config.headers.hiddenLoading
                    && self.hiddenLoading()

                self.pushMessage(response.data);
                return response;
            }, err => {
                if (err.toString() === 'Error: Network Error') {
                    self.hiddenLoading()
                    self.pushMessage({
                        type: 'error',
                        message: 'Network Error'
                    });
                }
                if (err.response.status === 403) {
                    window.location.replace(`${window.location.origin}/forbidden`);
                }
                return Promise.reject(err);
            });
        },
        showLoading() {
            self.loading = true;
        },
        hiddenLoading() {
            self.loading = false;
        },
        increasePendingRequests() {
            self.pendingRequests += 1
        },
        decreasePendingRequests() {
            self.pendingRequests -= 1
        },
        pushMessage(data: any) {
            if (data && data.message && data.type) {
                const id = '_' + (new Date()).getSeconds().toString();
                self.messages.push({
                    id: id,
                    text: data.message,
                    type: data.type
                });
            }
        }
    }));

export default InterceptionStore;
