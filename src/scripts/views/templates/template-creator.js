import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="restaurant_card">
    <img class="restaurant_img" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
    <div class="restaurant_info">
      <h3>Information</h3>
      <h4>Tagline</h4>
      <p>${restaurant.name}</p>
      <h4>Address</h4>
      <p>${restaurant.address}</p>
      <h4>City</h4>
      <p>${restaurant.city}</p>
      <h4>Rating</h4>
      <p>${restaurant.rating}</p>
    </div>
    <div class="restaurant_description">
      <h3>${restaurant.name}</h3>
      <p>${restaurant.description}</p>
    </div>
  </div>
  <div class="restaurant_menu">
    <h1 class="line">MENU</h1>
      <div class="restaurant_foods">
        <h2>FOODS</h2>
        <p>${restaurant.menus.foods.map((food) => `
          <p>${food.name}</p>
        `).join('')}</p>
      </div>
      <div class="restaurant_drinks">
        <h2>DRINKS</h2>
        <p>${restaurant.menus.drinks.map((drink) => `
          <p>${drink.name}</p>
        `).join('')}</p>
      </div>
  </div>
  <h1 class="comment_title">Komentar</h1>
  <div class="restaurant_review">
    ${restaurant.customerReviews.map((review) => `
    <div class="restaurant_review_card">  
      <h3>${review.name}</h3>
      <p class="comment_date">${review.date}</p>
      <p class="comment_review">" ${review.review} "</p>
    </div>
    `).join('')}
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <article class="post-item">
        <img class="post-item__thumbnail" alt="${restaurant.name}"  src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
        <div class="post-item__content">
            <p class="post-item__rating">⭐️ ${restaurant.rating}</p>
            <h3><a class="post-item__title" href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
            <h1 class="fa fa-home post-item__city "> ${restaurant.city} City</h1>
            <p class="post-item__description">${restaurant.description}</p>
        </div>
    </article>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
