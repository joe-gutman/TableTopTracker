
export function handleOpenModal(template, data) {
  return {
    type: 'MODAL_OPEN',
    payload: {template, data}
  }
}

export function handleCloseModal() {
  return {
    type: 'MODAL_CLOSE'
  }
}