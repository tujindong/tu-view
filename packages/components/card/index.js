import Card from "./src/card.vue";
// import './src/card.scss';

Card.install = function (Vue) {
	Vue.component(Card.name, Card);
};

export default Card;
