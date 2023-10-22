import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Review_slider.css'
export default () => (
	<>
	<div className="upper-text">
		<p>30%+ of customers come back for more</p>
		<h4>Customer reviews</h4>
	</div>
	<Carousel className="review-slider">
		<div>
			<p className="legend">Best Tshirts I’ve ever bought , I actually just ordered another 4.</p>
		</div>
		<div>
			<p className="legend">Best Tshirts I’ve ever bought , I actually just ordered another 4.</p>
		</div>
		<div>
			<p className="legend">Best Tshirts I’ve ever bought , I actually just ordered another 4.</p>
		</div>
		<div>
			<p className="legend">Best Tshirts I’ve ever bought , I actually just ordered another 4.</p>
		</div>
	</Carousel></>
);
