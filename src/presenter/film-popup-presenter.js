import FilmPopupView from '../view/film-popup-view';


let popupIsRendered = null;

export default class FilmPopupPresenter {
  #popupContainer = null;
  #filmPopupComponent = null;

  constructor ({ popupContainer, film, commentsByFilm }){
    this.#popupContainer = popupContainer;
    this.#filmPopupComponent = new FilmPopupView({
      film,
      commentsByFilm,
      onCloseBtnClick: () => this.deletePopup()
    });
  }

  renderPopup() {
    if (popupIsRendered) {
      popupIsRendered.deletePopup();
    }
    document.body.classList.add('hide-overflow');
    this.#popupContainer.appendChild(this.#filmPopupComponent.element);
    this.#popupContainer.addEventListener('keydown', this.#deletePopupKeydownHandler);
    popupIsRendered = this;
  }

  deletePopup() {
    document.body.classList.remove('hide-overflow');
    this.#popupContainer.removeChild(this.#filmPopupComponent.element);
    this.#popupContainer.removeEventListener('keydown', this.#deletePopupKeydownHandler);
    popupIsRendered = null;
  }

  #deletePopupKeydownHandler = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      this.deletePopup();
    }
  };
}
