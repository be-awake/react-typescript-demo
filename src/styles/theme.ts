import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#6A5AA2',
            dark: '#1C1633',
            main: '#40346C',
        },
        secondary: {
            main: '#E26252',
            dark: '#A9271D'
        },
        action: {
            hover: '#328DDE'
        }
    },
    typography: {
        h2: {
            fontSize: 32,
        },
        fontFamily: 'Source Sans Pro, sans-serif'
    }
});

export default theme
