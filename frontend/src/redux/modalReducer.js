import modalActions from "./modalActions";

const initial = {
  isOpen: false
};

export default (state = initial, action) => {
  switch (action.type) {
    case modalActions.MODAL_CLOSE.type:
      return { ...state, isOpen: false };
    case modalActions.MODAL_OPEN.type:
      return { ...state, isOpen: true };
    case modalActions.MODAL_TOGGLE.type:
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
};
