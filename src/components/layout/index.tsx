import * as React from 'react'

import { BrowserRouter as Router } from 'react-router-dom';
import { Drawer, AppBar, Toolbar, Typography, Icon, WithStyles } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';

import Menus from '../config/menus';
import Routes from '../config/routes';
import styles from './style';

interface Props extends WithStyles<typeof styles> {

}

class Layout extends React.Component<Props> {
    render() {
        const { classes } = this.props;
        return (
            <Router>
                <div className={classes.root}>
                    <AppBar position={'fixed'} className={classes.appBar}>
                        <Toolbar>
                            <Typography variant={'h2'} color={'inherit'} noWrap>
                                <div>
                                    <Icon className={`icon-grapecity-logo`}></Icon>
                                    <span>EIS</span>
                                </div>
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Drawer 
                        variant={'permanent'}
                        className={classes.drawerPaper}
                        classes={{ paper:classes.drawerPaper}}
                    >
                        <div className={classes.toolbar} />
                        <Menus />
                    </Drawer>
                    <main>
                        <Routes />
                    </main>
                </div>
            </Router>
        )
    }
}

export default withStyles(styles)(Layout);