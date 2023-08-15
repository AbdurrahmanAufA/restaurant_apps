import RestaurantsSource from '../../data/restaurants-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const RestaurantList = {
  async render() {
    return `
    <div class="hero-img">
      <div class="hero-text">
        <h1>Welcome in <strong class="text-tittle">SearRest</strong></h1>
        <a href="#list" class="btn">EXPLORE</a>
      </div>
    </div>
    <section id="list" class="content">
      <h2 class= "line">List Restaurant</h2>
      <div id="mainContent" class="posts">

      </div>
    </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantsSource.restaurantList();
    const restaurantContent = document.querySelector('#mainContent');
    restaurants.forEach((restaurant) => {
      restaurantContent.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default RestaurantList;
