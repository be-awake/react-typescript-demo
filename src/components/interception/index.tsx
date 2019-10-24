import * as React from 'react';
import Loading from './Loading';
import ErrorMessage from './ErrorMessage';
import { inject, observer } from 'mobx-react';

interface Props {
    interception?: any
}

@inject('interception')
@observer
class Interception extends React.Component<Props> {
    render() {
        const interception = this.props.interception;
        interception.initInterceptors();

        return (<div>
            <Loading />
            <ErrorMessage />
        </div>);
    };
}

export default Interception;
