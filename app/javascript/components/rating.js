import "jquery-bar-rating";
import "jquery-bar-rating/dist/themes/css-stars.css";
import $ from "jquery";
const initStarRating = () => {
  $("#review_rating").barrating({
    theme: "css-stars",
    initialRating: 1,
    deselectable: false
  });
};
export { initStarRating };
