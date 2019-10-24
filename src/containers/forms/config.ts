import ActualEdit from './actual/Index';
import Budget from './budget/Index';

const menu = {
    label: 'Forms',
    iconName: 'iconform',
    children: [
        { link: '/forms/budget', label: 'Budget', roles: ['admin', 'user'] },
        { link: '/forms/actual', label: 'Profit and Loss', roles: ['admin', 'user'] }
    ],
    roles: ['admin', 'user']
}

const routes = [
    { link: '/forms/budget', component: Budget },
    { link: '/forms/actual', component: ActualEdit }
];

export {menu, routes}