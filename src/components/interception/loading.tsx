import * as React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';

import { observer, inject } from 'mobx-react';

const loadingStyle = (theme: Theme) => createStyles({
    loading: {
        width: '100vw',
        height: '100vh',
        zIndex: theme.zIndex.modal + 1,
        background: 'rgba(255,255,255,.8)',
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    hidden: {
        display: 'none'
    }
});

interface Props extends WithStyles<typeof loadingStyle> {
    interception?: any
}

@inject('interception')
@observer
class Loading extends React.Component<Props> {
    render() {
        const { interception, classes } = this.props;

        return (<div className={interception.loading ? classes.loading : classes.hidden}>
            <CircularProgress/>
        </div>);
    };
}

export default withStyles(loadingStyle)(Loading);
