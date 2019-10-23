import * as React from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { inject, observer } from 'mobx-react';

import Interception from '../components/interception'
import Layout from '../components/layout';
import theme from '../styles/theme';

interface Props {
  menuState?: any
}

@inject('menuState')
@observer
class App extends React.Component<Props> {
  public render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Interception />
        <Layout />
      </MuiThemeProvider>
    );
  }
}

export default App;
