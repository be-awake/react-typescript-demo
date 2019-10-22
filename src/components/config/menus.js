import * as React from 'react'
import {NavLink} from 'react-router-dom';
import {List, ListItem} from '@material-ui/core';
import {WithStyles} from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';

import menuData from './dataSet';

const menusStyle = theme => ({
    menu: {
        justifyContent: 'space-between',
        borderLeftWidth: 6,
        borderLeftStyle: 'solid',
        borderLeftColor: '#1C1633',
        transition: 'all .5s',
        '&:hover': {
            backgroundColor: '#6A5AA2',
            borderLeftColor: '#B8A9ED',
        },
        zIndex: theme.zIndex.drawer - 1,
    },
    nested: {
        paddingLeft: theme.spacing(5),
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    activeMenu: {
        backgroundColor: theme.palette.primary.light,
        borderLeftColor: '#B8A9ED',
        color: '#B8A9ED',
        fontWeight: 600
    },
    menuText: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },
    menuList: {
        padding: 0
    },
    iconRoot: {
        fontSize: 14
    },
    iconMargin: {
        marginRight: 6
    },
    listMargin: {
        marginTop: 20
    }
});

class Menus extends React.Component {
    constructor(props) {
        super(props);
        console.log(menuData);
    }

    renderLink = React.forwardRef((itemProps, ref) => (
        <NavLink to={this.props.to} {...itemProps} innerRef={ref} />
    ));


    getList(menu, classes) {
        return (
            <ListItem
                button
                key={menu.link}
                component={this.renderLink}
                to={menu.link}
                className={`${classes.menu} ${classes.nested}`}
            >
                <div>{menu.label}</div>
            </ListItem>
        )
    }
    render() {
        let listItem = [];
        const {classes} = this.props;
        menuData.menus.forEach(menu => {
            if (menu.link) {
                listItem.push(this.getList(menu, classes));
            }
        })
        return (
            <List disablePadding={true}>{listItem}</List>
        )
    }
}

export default withStyles(menusStyle)(Menus);