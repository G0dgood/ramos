import React from 'react'
import { BiChart } from 'react-icons/bi'
import { IoStatsChartSharp } from 'react-icons/io5'
import trans_img2 from "../assets/img/trans_icon1.jpg"
import trans_img1 from "../assets/img/trans_icon2.jpg"
import LineChart3 from '../components/LineChart3'
import logo from '../assets/img/logo.png';

const SectionFive = () => {
	return (
		<section className='section_five'>
			<main>
				<div className='control_card_container'>
					<h1>We give you full</h1>
					<h1><span className='control_card_container_span'>control</span> over your data</h1>
				</div>

				<div className='control_cards'>
					<div className='control1'>
						<div className='control_first' >
							<div className='conversion_rate' data-aos="fade-right" >
								<h1>Conversion rate</h1>
								<div className='conversion_rate_yellow'>
									<div className='conversion_rate_yellow3' data-aos="fade-left" data-aos-delay="300">
										<h5>Sales revenue</h5>
										<div className='conversion_rate_yellow3_span'>	<span>$</span>1,090</div>

										<div className='conversion_mark_container'>
											<div className='conversion_mark1'></div>
											<div className='conversion_mark2'></div>
											<div className='conversion_mark3'></div>
										</div>

										<div className='min_price_container_main' >
											<div className='min_price_container'>
												<div className='min_price_container_sub'>
													<div className='min_price_container_sub_circle'>
														<img src={trans_img2} alt="trans_img" className='img-min_price' />
													</div>
													<p>Min. price</p>
												</div>
												<h5>1,200 $</h5>
											</div>
											<div className='min_price_container'>
												<div className='min_price_container_sub'>
													<div className='min_price_container_sub_circle'>
														<img src={trans_img1} alt="trans_img" className='img-min_price' />
													</div>
													<p>Min. price</p>
												</div>
												<h5>2,320 $</h5>
											</div>
										</div>
										<div className='engagement_rate_container'>
											<p>Engagement rate</p>
											<h5>47.84%</h5>
										</div>
									</div>
									<div className='conversion_rate_yellow1'>
										<div className='conversion_rate_yellow2'>
											<IoStatsChartSharp />
										</div>
									</div>
									2,3%</div>
								<div className='conversion_rate_yellow_sub'>
									<p>Percentage of</p>
									<p>website visitors</p>
								</div>

							</div>
						</div>
						<div className='control_first_one'>
							<h5>improved customer service</h5>
							<p>Analytics helps optimize service process by providing imformation on how to interactions with customers and increase their statisfaction.</p>
						</div>
					</div>
					<div className='control1'>
						<div className='control_first'>
							<div className='insights_container'>
								<div className='insights_container2' style={{ padding: "10px" }}>
									<div className='card_insights1_icon_container'>
										<div className='card_insights1_icon_sign'>
											<BiChart />
										</div>
										<h3>Finance reports</h3>
									</div></div>
								<div className='insights_container3'>
									<div className='card_insights1'>
										<div className='card_insights1_icon_container'>
											<div className='card_insights1_icon_sign'>
												<BiChart />
											</div>
											<h3>Insights</h3>
										</div>
										<div className='card_insights1_icon_sign_sub'>
											<p>Total profit</p>
											<h1><span className='visn_num'>$</span>264,2K</h1>
											<button>Data visualization</button>
										</div>
									</div>
									<div className='card_insights2_visualization'>
										<div className='card_insights2_visualization_chart1'>
											<LineChart3 className={"line-container3"} />
										</div>
										<div className='card_insights2_visualization_chart2'>
											<div className='card_insights2_visualization_chart2_sub'>
												<div className='chart_bar1'>
													<div className='chart_v1'></div>
													<div className='chart_vtext'>2021</div>
												</div>
												<div className='chart_bar1'>
													<div className='chart_v2'> </div>
													<span className='chart_vtext'>2020</span>
												</div>
												<div className='chart_bar1'>
													<div className='chart_v3'> </div>
													<span className='chart_vtext'>2019</span>
												</div>
												<div className='chart_bar1' >
													<div className='chart_v4' data-aos="fade-up">
														<div className='chart_vtext_container' />
													</div>
													<span className='chart_vtext'>2018</span>
												</div>
												<div className='chart_bar1'>
													<div className='chart_v5'> </div>
													<span className='chart_vtext'>2017</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='control_first_one'>
							<h5>Monitoring key indicators</h5>
							<p>Analytics pactioms allow business to track KIPs. an import tool for measuring success and achieving goals.</p>
						</div>
					</div>
				</div>
				{/* get_started */}
				<div className='get_started_container' >
					<div data-aos="zoom-out">
						<div className='get_started' >
							<img src={logo} alt="logo" />
						</div>
					</div>
					<h1 data-aos="fade-up">Get Started</h1>
					<div className='get_started_p'>
						<p>Turn information into advantage! Start using</p>
						<p>Ramos today. Sign up for a free trial.</p>
					</div>
					<div className='get_started_btn_container'>
						<button className='get_started_btn1'>Request a Demo</button>
						<button className='get_started_btn2'>Start for free</button>
					</div>
				</div>
			</main>
		</section>
	)
}

export default SectionFive