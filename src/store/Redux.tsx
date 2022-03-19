import { createStore } from 'redux';

import { MenuReduxType } from '../types/MenuRedux.types';

interface ActionMouseEnterWrapper {
  type: 'MOUSE_ENTER_WRAPPER';
}

interface ActionMouseLeaveWrapperType {
  type: 'MOUSE_LEAV_WRAPPER';
}

interface ActionMouseEnterType {
  type: 'MOUSE_ENTER_LINK';
  menuItem: string;
}

interface ActionMouseLeaveType {
  type: 'MOUSE_LEAVE_LINK';
}

type actionType =
  | ActionMouseEnterWrapper
  | ActionMouseLeaveWrapperType
  | ActionMouseEnterType
  | ActionMouseLeaveType;

const initialState: MenuReduxType = { menu: { active: false } };

const reduxReducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case 'MOUSE_ENTER_WRAPPER':
      return { ...state, menu: { active: true, submenu: state.menu.submenu } };

    case 'MOUSE_LEAV_WRAPPER':
      return { ...state, menu: { active: false } };

    case 'MOUSE_ENTER_LINK':
      return { ...state, menu: { active: true, submenu: action.menuItem } };

   

    default:
      return state;
  }
};

export const reduxStore = createStore(reduxReducer);
