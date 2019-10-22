import { types } from 'mobx-state-tree';

const MenuStateStore = types
    .model('MenuStateStore', {
        isOpen: types.optional(types.boolean, false),
        isUserChanged: types.optional(types.boolean, false)
    })
    .actions((self: any) => ({
        toggle: () => {
            self.isOpen = !self.isOpen
        },
        update: (targetState?: boolean) => {
            self.isOpen = targetState;
        },
        updateUserChanged: () => {
            self.isUserChanged = true;
        }
    }));

export default MenuStateStore;