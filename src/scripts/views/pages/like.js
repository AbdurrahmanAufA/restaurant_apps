import FavoriteMovieIdb from '../../data/restaurant-favorite';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
    <section tabindex="0" id="list" class="content">
    <h2 ">Favorite Restaurant</h2>
    <div id="mainContent" class="posts">

    </div>
  </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteMovieIdb.getAllMovies();
    const restaurantsContainer = document.querySelector('#mainContent');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Like;
