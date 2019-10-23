import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';

const MenuControlStyles = (theme: Theme) => createStyles({
    menuButton: {
        borderRadius: 0,
        '&:hover': {
            backgroundColor: 'transparent'
        }
    },
    showMenu: {
        position: 'absolute',
        top: 0,
        left: 240,
        height: '100%',
        display: 'flex',
        transition: 'left .5s'
    },
    hiddenMenu: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        display: 'flex',
        transition: 'left .5s'
    },
    iconRoot: {
        fontSize: '16px',
        color: 'white'
    },
});

export default MenuControlStyles;