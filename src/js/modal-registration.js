(() => {
  const refs = {
    openModalBtn: document.querySelector('[registration-data-modal-open]'),
    closeModalBtn: document.querySelector('[registration-data-modal-close]'),
    modal: document.querySelector('[registration-data-modal]'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
