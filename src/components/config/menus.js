import * as React from 'react'
import {NavLink} from 'react-router-dom';
import {List, ListItem, Icon, Collapse, WithStyles} from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';

import ExpandLess from '@material-ui/icons/ChevronRight';
import ExpandMore from '@material-ui/icons/ExpandMore';
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
        this.state = {
            currentCollapse: '',
        }
    }

    changeCollapse = target => {
        this.setState({currentCollapse: this.state.currentCollapse === target ? '' : target});
    }

    renderLink = React.forwardRef((itemProps, ref) => (
        <NavLink to={this.props.to} {...itemProps} innerRef={ref} />
    ));


    getList(menu, classes, level) {
        let variableAttr = {
            className: `${classes.menu} ${level === 'isChild' ? classes.nested : ''}`
        }

        if (!level || level === 'isChild') {
            Object.assign(variableAttr, {component: this.renderLink, to: menu.link, key: menu.link, activeClassName: classes.activeMenu})
        } else {
            Object.assign(variableAttr, {key: menu.label, onClick: () => this.changeCollapse(menu.label)})
        }

        return (
            <ListItem
                button
                {...variableAttr}
            >
                <div className={classes.menuText}>
                    <i className={`icon iconfont ${menu.iconName}`}></i>
                    {menu.label}
                </div>
                {level === 'hasChild' && ((this.state.currentCollapse === menu.label) ? <ExpandMore fontSize={'small'} /> : <ExpandLess fontSize={'small'} />)}
            </ListItem>
        )
    }
    render() {
        let listItem = [];
        const {classes} = this.props;
        menuData.menus.forEach(menu => {
            if (menu.link) {
                listItem.push(this.getList(menu, classes));
            } else if (menu.children && menu.children.length > 0) {
                const childrenList = [];
                menu.children.forEach(child => {
                    childrenList.push(this.getList(child, classes, 'isChild'))
                })

                listItem.push(this.getList(menu, classes, 'hasChild'));
                listItem.push(
                    <Collapse key={menu.label + '-collapse'}
                        in={this.state.currentCollapse === menu.label}
                        timeout="auto" unmountOnExit>
                        {childrenList}
                    </Collapse>
                )
            }
        })
        return (
            <List disablePadding={true}>{listItem}</List>
        )
    }
}

export default withStyles(menusStyle)(Menus);