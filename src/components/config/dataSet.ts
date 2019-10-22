import config from '../../containers/config';

interface Menu {
    menus: Array<any>,
    routes: Array<any>
}

let menuData: Menu = {
    menus: [],
    routes: []
}

config.modules.forEach(moduleName => {
    const { menu, routes } = require(`../../containers/${moduleName}/config`);
    menu && menuData.menus.push(menu);
    if (routes) {
        menuData.routes = menuData.routes.concat(routes);
    }
})

export default menuData;