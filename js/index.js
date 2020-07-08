const modalAdd = document.querySelector('.modal__add'),
    addAd = document.querySelector('.add__ad'),
    modalBtnSubmit = document.querySelector('.modal__btn-submit'),
    modalSubmit = document.querySelector('.modal__submit'),
    catalogC = document.querySelector('.catalog'),
    modalItem = document.querySelector('.modal__item') ;


addAd.addEventListener('click', () => {
    modalAdd.classList.remove('hide');
    modalBtnSubmit.disabled = true;
});

catalogC.addEventListener('click', () => {
    modalItem.classList.remove('hide');
});
addEventListener('keydown', event => {
    if (event.keyCode == 27) {
        modalItem.classList.add('hide');
    }
});


modalAdd.addEventListener('click', event => {
    const target = event.target;

    if (target.closest('.modal__close') || 
        target === modalAdd) {
        modalAdd.classList.add('hide');
        modalSubmit.reset();
    }
    
});
 
