import React from 'react';
import "./Customer.css";
import Carousel from "../Page/Review_slider";
function Customer() {
	return(
		<>
		<Carousel />
		<section className='free-shipping'>
			<div className='four-section'>
				<div className='free-shipping-au'>
					<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
						<g clip-path="url(#clip0_2_2051)">
							<path d="M23.27 13.5V6C23.27 5.60218 23.112 5.22064 22.8307 4.93934C22.5494 4.65804 22.1678 4.5 21.77 4.5H9.77002C9.37219 4.5 8.99066 4.65804 8.70936 4.93934C8.42805 5.22064 8.27002 5.60218 8.27002 6M8.27002 6V12M8.27002 6H5.27002C4.07655 6 2.93195 6.47411 2.08804 7.31802C1.24413 8.16193 0.77002 9.30653 0.77002 10.5V16.5C0.77002 16.8978 0.928055 17.2794 1.20936 17.5607C1.49066 17.842 1.87219 18 2.27002 18H3.02002" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M0.77002 12H3.77002C4.16784 12 4.54938 11.842 4.83068 11.5607C5.11198 11.2794 5.27002 10.8978 5.27002 10.5V6" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M7.52002 19.5C8.11676 19.5 8.68905 19.2629 9.11101 18.841C9.53297 18.419 9.77002 17.8467 9.77002 17.25C9.77002 16.6533 9.53297 16.081 9.11101 15.659C8.68905 15.2371 8.11676 15 7.52002 15C6.92328 15 6.35099 15.2371 5.92903 15.659C5.50707 16.081 5.27002 16.6533 5.27002 17.25C5.27002 17.8467 5.50707 18.419 5.92903 18.841C6.35099 19.2629 6.92328 19.5 7.52002 19.5ZM19.52 19.5C20.1168 19.5 20.6891 19.2629 21.111 18.841C21.533 18.419 21.77 17.8467 21.77 17.25C21.77 16.6533 21.533 16.081 21.111 15.659C20.6891 15.2371 20.1168 15 19.52 15C18.9233 15 18.351 15.2371 17.929 15.659C17.5071 16.081 17.27 16.6533 17.27 17.25C17.27 17.8467 17.5071 18.419 17.929 18.841C18.351 19.2629 18.9233 19.5 19.52 19.5Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M12.02 18H15.02" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
						</g>
						<defs>
							<clipPath id="clip0_2_2051">
								<rect width="24" height="24" fill="white" transform="translate(0.0200195)"/>
							</clipPath>
						</defs>
					</svg>
					<p>FREE SHIPPING</p>
					<span>on AU orders $80+</span>
				</div>
				<div className='free-shipping-au'>
					<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
						<path d="M1.52002 15.08L3.72702 11.696L7.11202 13.902" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M13.4001 2.50001C14.6591 2.48711 15.9082 2.72394 17.0751 3.19681C18.2419 3.66967 19.3035 4.36919 20.1983 5.2549C21.0932 6.14061 21.8035 7.19495 22.2883 8.35692C22.7731 9.5189 23.0227 10.7655 23.0227 12.0245C23.0227 13.2836 22.7731 14.5301 22.2883 15.6921C21.8035 16.8541 21.0932 17.9084 20.1983 18.7941C19.3035 19.6798 18.2419 20.3793 17.0751 20.8522C15.9082 21.3251 14.6591 21.5619 13.4001 21.549C12.1148 21.5483 10.8426 21.2916 9.65752 20.7939C8.47248 20.2963 7.39841 19.5676 6.49799 18.6504C5.59756 17.7332 4.88881 16.6459 4.41308 15.4519C3.93734 14.2579 3.70416 12.9811 3.72713 11.696" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
					<p>EASY RETURNS</p>
					<span>for your perfect fit</span>
				</div>
				<div className='free-shipping-au'>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
						<path d="M12.0048 20.8441L2.41678 10.8441C1.57412 10.0021 1.01794 8.91615 0.827141 7.74029C0.63634 6.56443 0.820597 5.35834 1.35378 4.29309C1.75584 3.48921 2.34315 2.79237 3.06733 2.25998C3.7915 1.72759 4.63182 1.37489 5.51904 1.23094C6.40625 1.08699 7.31497 1.15592 8.17033 1.43204C9.02568 1.70815 9.80319 2.18356 10.4388 2.81909L12.0048 4.38409L13.5708 2.81909C14.2064 2.18356 14.9839 1.70815 15.8392 1.43204C16.6946 1.15592 17.6033 1.08699 18.4905 1.23094C19.3777 1.37489 20.2181 1.72759 20.9422 2.25998C21.6664 2.79237 22.2537 3.48921 22.6558 4.29309C23.1882 5.35793 23.3722 6.5633 23.1816 7.73849C22.991 8.91368 22.4355 9.99912 21.5938 10.8411L12.0048 20.8441Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
					<p>LOVED BY THOUSANDS</p>
					<span>who come back for more</span>
				</div>
				<div className='free-shipping-au'>
					<svg xmlns="http://www.w3.org/2000/svg" width="12" height="19" viewBox="0 0 12 19" fill="none">
						<path d="M0.75 9.75V6C0.75 4.60761 1.30312 3.27226 2.28769 2.28769C3.27226 1.30312 4.60761 0.75 6 0.75C7.39239 0.75 8.72774 1.30312 9.71231 2.28769C10.6969 3.27226 11.25 4.60761 11.25 6V9.75M6 15V18" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
					<p>SECURE PAYMENTS</p>
					<span>AfterPay available</span>
				</div>
			</div>
		</section>
		</>
	)
}

export default Customer;