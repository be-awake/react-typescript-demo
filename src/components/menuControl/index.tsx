import * as React from 'react'

import styles from './style'
import { WithStyles, IconButton, Icon} from '@material-ui/core'
import { withStyles } from '@material-ui/styles';

import { inject, observer } from 'mobx-react';
interface Props extends WithStyles<typeof styles> {
    menuState?: any
}

@inject('menuState')
@observer
class MenuControl extends React.Component<Props> {

    updateMenu = () => {
        this.props.menuState.toggle();
        this.props.menuState.updateUserChanged();
    }

    render() {
        const { classes, menuState } = this.props;
        return (
            <div className={`arrow ${menuState.isOpen ? classes.showMenu : classes.hiddenMenu}`}>
                <IconButton className={classes.menuButton} onClick={this.updateMenu}>
                    <Icon classes={{ root: classes.iconRoot }}>star</Icon>
                </IconButton>
            </div>
        )
    }
}

export default withStyles(styles)(MenuControl);
