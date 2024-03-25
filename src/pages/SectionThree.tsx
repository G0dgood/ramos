import React from 'react'
import { TbActivityHeartbeat } from 'react-icons/tb'

const SectionThree = () => {
	return (
		<section>
			<main>
				<div className='maximize_efficiency_container'>
					<div data-aos="fade-up">
						<h1 className='maximize_efficiency_h1' >Maximize efficiency</h1>
						<h1 className='maximize_efficiency_h1' >with our intuitive</h1>
					</div>
					<div className='text_efficiency_icons_container'>
						<div className='maximize_efficiency_icons_container'>
							<div className='maximize_efficiency_side_icon1' data-aos="fade-up" data-aos-delay="200">
								<div className='maximize_efficiency_side_dotted'>
									<div className='efficiency_side_dotted_icon_container'>
										<TbActivityHeartbeat />
									</div>
								</div>
							</div>
							<div className='maximize_efficiency_side_icon2' data-aos="fade-up">
								<h3>45%</h3>
								<p>system grow</p>
								<p>faster</p>
							</div>
						</div>
						<div className='maximize_efficiency_side_text_container' data-aos="fade-up-left" data-aos-delay="200">
							<h1 className='maximize_efficiency'>
								<span className="moving-text">Analytics Service</span>
							</h1>
						</div>
					</div>

					<div className='explore_trattic_container'>
						<h5>Explore trattic sources, page behavior, conversions and more to gain deep insigh into your audience. With us, your business doesn't just adapt - it evolves</h5>
						<div className='demo_btn_container'>
							<button className='demo_btn1'>Request a demo</button>
							<button className='demo_btn2'>Start for free</button>
						</div>
					</div>
				</div>
			</main>
		</section>
	)
}

export default SectionThree
