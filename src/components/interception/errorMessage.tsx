import * as React from 'react';
import { createStyles, WithStyles, Theme } from '@material-ui/core/styles';
import withStyles from '@material-ui/core/styles/withStyles';
import { inject, observer } from 'mobx-react';
import Icon from '@material-ui/core/Icon';

const errorMessageStyle = (theme: Theme) => createStyles({
    iconRoot: {
        fontSize: '12px',
        color: 'white',
        position: 'absolute',
        right: '3px',
        top: '3px',
        cursor: 'pointer'
    },
    loading: {
        width: '10vw',
        minHeight: '5vh',
        zIndex: theme.zIndex.modal + 1,
        background: 'rgba(84,156,187,.8)',
        position: 'fixed',
        right: '10px',
        bottom: '10px',
        borderRadius: '5px',
        color: 'white',
        padding: '10px',
        wordWrap: 'break-word'
    },
    hidden: {
        display: 'none'
    }
});

interface Props extends WithStyles<typeof errorMessageStyle> {
    interception?: any
}

@inject('interception')
@observer
class ErrorMessage extends React.Component<Props> {

    cleanMes = () => {
        this.props.interception.cleanMessage();
    }
    
    render() {
        const { interception, classes } = this.props;

        return (<div className={interception.messages.length ? classes.loading : classes.hidden}>
            <Icon classes={{ root: classes.iconRoot }} onClick={this.cleanMes}>close</Icon>
            {interception.messages.length && interception.messages[0].text}
        </div>);
    };
}

export default withStyles(errorMessageStyle)(ErrorMessage);
