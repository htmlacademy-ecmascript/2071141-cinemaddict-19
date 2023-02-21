import FilmsModel from './model/films-model';
import ContentPresenter from './presenter/content-presenter';
import { render } from './render';
import FiltersView from './view/filters-view';
import SortView from './view/sort-view';
import UserProfileView from './view/user-profile-view';

const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');
const filmsModel = new FilmsModel();

const contentPresenter = new ContentPresenter({filmContainer: siteMainElement,
  filmsModel
});

render(new UserProfileView(), siteHeaderElement);
render(new FiltersView(), siteMainElement);
render(new SortView(), siteMainElement);

contentPresenter.init();
