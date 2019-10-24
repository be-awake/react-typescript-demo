import * as React from 'react'

import { HashRouter as Router } from 'react-router-dom';
import { Drawer, AppBar, Toolbar, Typography, Icon, WithStyles } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';

import { inject, observer } from 'mobx-react';

import Menus from '../config/Menus';
import Routes from '../config/Routes';
import styles from './style';
import MenuControl from '../menuControl/Index'

interface Props extends WithStyles<typeof styles> {
    menuState?: any
}

@inject('menuState')
@observer
class Layout extends React.Component<Props> {
    constructor(props: any){
        super(props);
        this.props.menuState.update(true);
    }
    render() {
        const { classes, menuState } = this.props;
        return (
            <Router>
                <div className={classes.root}>
                    <AppBar position={'fixed'} className={classes.appBar}>
                        <Toolbar>
                            <Typography className={menuState.isOpen ? classes.showLogo : classes.hiddenLogo} variant={'h2'} color={'inherit'} noWrap>
                                <div>
                                    <Icon className={`icon-grapecity-logo`}></Icon>
                                    <span>EIS</span>
                                </div>
                            </Typography>
                            <MenuControl />
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        variant={'permanent'}
                        open={menuState.isOpen}
                        className={`${menuState.isOpen ? classes.drawerPaper : classes.drawerPaperHidden}`}
                        classes={{ paper: menuState.isOpen ? classes.drawerPaper : classes.drawerPaperHidden }}>
                        <div className={classes.toolbar} />
                        <Menus />
                    </Drawer>
                    <main className={classes.content}>
                        <div className={classes.toolbar} />
                        <Routes />
                    </main>
                </div>
            </Router>
        )
    }
}

export default withStyles(styles)(Layout);