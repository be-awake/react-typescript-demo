import * as React from 'react';

import requests from '../../utils/requests'

class Helpers extends React.Component {

    constructor(props: any){
        super(props);
        this.getData();
    }

    getData() {
        requests.help.getData().then(result => {
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