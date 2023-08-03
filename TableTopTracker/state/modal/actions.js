
export function handleOpenModal(template) {
  return {
    type: 'MODAL_OPEN',
    payload: {template}
  }
}

export function handleCloseModal() {
  return {
    type: 'MODAL_CLOSE'
  }
}