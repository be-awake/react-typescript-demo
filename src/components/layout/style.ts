import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';

const layoutStyle = (theme: Theme) => createStyles({
    root: {
        flexGrow: 1,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex'
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: theme.palette.primary.main,
    },
    drawerPaper: {
        width: 240,
        height: '100vh',
        backgroundColor: theme.palette.primary.dark,
        color: '#fff',
        transition: 'width .5s',
        overflow: 'hidden',
        '&>ul': {
            marginTop: 20
        }
    },
    toolbar: theme.mixins.toolbar
});

export default layoutStyle;