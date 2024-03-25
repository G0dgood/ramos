import laptop from "../assets/img/analitic_laptop.png"
import { FaPlay } from "react-icons/fa6";
import { IoAnalyticsSharp } from "react-icons/io5";
import { BsLightningChargeFill } from "react-icons/bs";


const SectionOne = () => {
	return (
		<section>
			<main>
				<div className='analytics_main_container'>
					<div className='analytics_main_container_sub'>
						<div className='analytics_container'>
							<div className='analytics_icon_container'>
								<div className='analytics_icon_one' data-aos="zoom-in" data-aos-delay="200">
									<BsLightningChargeFill />
								</div>
								<div className='analytics_icon_two' data-aos="zoom-in" data-aos-delay="200">
									<IoAnalyticsSharp />
								</div>
							</div>
							<div className='analytics_container_text' data-aos="fade-up-right">
								<h1 >Analytics</h1>
							</div>
						</div>
						<h1 className='analytics_container_second' data-aos="fade-up-right" data-aos-delay="200">that <span className="helps"> helps</span> you</h1>
					</div>
					<div className='laptop_container' data-aos="zoom-in" data-aos-delay="200">

						<div className='play_btn' data-aos="zoom-in">
							<FaPlay />
						</div>
						<img src={laptop} alt="laptop" />
					</div>
				</div>
				<div className='laptop_container_second'>
					<h1>shape</h1>

					<span className='analytics_icon_three' data-aos="zoom-in" data-aos-delay="200">
						<span className='analytics_icon_three_line_one'></span>
						<span className='analytics_icon_three_line_two'></span>
						<span className='analytics_icon_three_line_three'></span>
					</span>
					<h1>the future</h1>
				</div>
			</main>
		</section>
	)
}

export default SectionOne
