export default function ModalReducer(state = {open: false, template: null}, action) {

  console.log(state, action);

  switch(action.type) {

    case 'MODAL_OPEN':
      return {
        open: true,
        template: action.payload.template,
        data: action.payload.data
      }

    case 'MODAL_CLOSE':
      return {
        open: false,
        template: null
      }

    default:
      return state;
  }
}