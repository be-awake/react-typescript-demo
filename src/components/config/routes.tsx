import * as React from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

import dataSet from './dataSet';

export interface RoutesProps {
}

export default class Routes extends React.Component<RoutesProps, any> {
    requireAuth = (Element: any) => {
        return <Element />;
    }

    public render() {
        const routeItems = dataSet.routes.map((route: any) =>
            <Route key={route.link} exact path={route.link} render={() => this.requireAuth(route.component)} />);

        return (
            <Switch>
                <Route exact path={'/'} render={() => <Redirect to={'/index'} />} />
                {routeItems}
            </Switch>
        );
    }
}
