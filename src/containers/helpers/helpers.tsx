import * as React from 'react';

import requests from '../../utils/requests'

class Helpers extends React.Component {

    constructor(props: any){
        super(props);
        this.getData();
        this.postData();
    }

    getData() {
        requests.help.getData().then(result => {
            console.log(result);
        })
    }

    postData(){
        requests.help.postData().then(result => {
            console.log(result);
        })
    }

    render() {
        return (
            <div>
                Helpers
            </div>
        )
    }
}

export default Helpers;