import MenuState from './menuState';
import Interception from './interception'

const menuState = MenuState.create();
const interception = Interception.create();

const Store = {
    menuState,
    interception
};

export default Store;