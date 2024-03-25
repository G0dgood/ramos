import React from 'react'
import LineChart2 from '../components/LineChart2'
import { IoArrowUpCircleSharp } from 'react-icons/io5'
import { RiSearchLine } from 'react-icons/ri'
import { GoPlus } from 'react-icons/go'
import logo from '../assets/img/logo.png';
import { BiMenuAltLeft } from "react-icons/bi";
import { SlBell } from "react-icons/sl";
import { VscSettings } from "react-icons/vsc";
import { TiCreditCard } from "react-icons/ti";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import LineChart4 from '../components/LineChart4'
import ThreeinOneBarChart from '../components/ThreeinOneBarChart'
import { TbHexagonLetterI } from 'react-icons/tb'
import { PiCreditCard } from "react-icons/pi";

const SectionFour = () => {
	return (
		<section className='section_four'>
			<div className='turning_data_container'>
				<div className='turning_data'>
					<h1>
						Turning data into real actions and ideas.
					</h1>

					<div className='technology_insight_container'>
						<div className='technology_insight_container_sub' data-aos="fade-up"
							data-aos-duration="8000">
							<h6>Instant Insights</h6>
							<div className='GoPlus_icon_container'>
								<GoPlus />
							</div>
						</div>
						<div className='technology_insight_container_sub' data-aos="fade-up"
							data-aos-duration="4000">
							<h6>AI technology</h6>
							<div className='GoPlus_icon_container'>
								<GoPlus />
							</div>
						</div>
						<div className='technology_insight_container_sub' data-aos="fade-up"
							data-aos-duration="2000">
							<h6>Easy integration</h6>
							<div className='GoPlus_icon_container'>
								<GoPlus />
							</div>
						</div>
					</div>
				</div>

				<div className='turning_data_number' >
					<div className='Iphone_container_one' data-aos="fade-up"
						data-aos-duration="5000">
						<div className='turning_data_number_main2'>
							{/* phone norch */}
							<div className=' phone_norch' />

							<div className='phone_norch_icon_container'>
								<BiMenuAltLeft />
								<SlBell size={18} />
							</div>

							<div className='tablet_body2' >
								<small className='tablet_body_small'>Revenue amount</small>

								<div className='tablet_body_number_container'>
									<div className='tablet_body_number_container_sub2'>
										<p>$</p><h1>1,342,567</h1>
									</div>
									<div className='tablet_body_icon_container_sub'>
										<IoArrowUpCircleSharp /><p>+21%</p> </div>
								</div>

								<div className='tablet_body_analysis_body2'>
									<div className='tablet_body_analysis2'>
										<div className='tablet_body_analysis_1'>
											<div className='tablet_body_analysis_sub1'>

											</div>
										</div>
									</div>
									<div className='tablet_body_analysis2 analysis_8'>
										<p className='analysis_10_number'>28%</p>
										<div className='tablet_body_analysis_2'>
											<div className='tablet_body_analysis_sub2'>

											</div>
										</div>
									</div>
									<div className='tablet_body_analysis2'>
										<div className='tablet_body_analysis_3'>
											<div className='tablet_body_analysis_sub3'>

											</div>
										</div>
									</div>
									<div className='tablet_body_analysis2 analysis_8'>
										<p className='analysis_10_number'>42%</p>
										<div className='tablet_body_analysis_4'>
											<div className='tablet_body_analysis_sub4'>

											</div>
										</div>
									</div>
									<div className='tablet_body_analysis2'>
										<div className='tablet_body_analysis_5'>
											<div className='tablet_body_analysis_sub5'>

											</div>
										</div>
									</div>
									<div className='tablet_body_analysis2 analysis_8'>
										<p className='analysis_10_number'>26%</p>
										<div className='tablet_body_analysis_6'>
											<div className='tablet_body_analysis_sub6'>

											</div>
										</div>
									</div>
									<div className='tablet_body_analysis2'>
										<div className='tablet_body_analysis_7'>
											<div className='tablet_body_analysis_sub7'>

											</div>
										</div>
									</div>
									<div className='tablet_body_analysis2 analysis_8'>
										<p className='analysis_10_number'>20%</p>
										<div className='tablet_body_analysis_8'>
											<div className='tablet_body_analysis_sub8 analysis_8'>

											</div>
										</div>
									</div>
									<div className='tablet_body_analysis2'>
										<div className='tablet_body_analysis_9'>
											<div className='tablet_body_analysis_sub9'>

											</div>
										</div>
									</div>
									<div className='tablet_body_analysis'>
										<p className='analysis_10_number'></p>
									</div>
								</div>
							</div>
							<div className='button_active_bg_main2 bg_main-absolute'>
								<div className='button_active_bg_main_sub2'>
									<div className='button_active_bg_main_sub_set' data-aos="fade-up" data-aos-delay="100">
										<div className='new_set'> <h3>
											Data report
										</h3>
											<div className='filter_container'>
												<p>filter</p> <VscSettings />
											</div>
										</div>
										<div className='scroll_data_report_profit_container'>
											<div className='data_report_profit_container'>
												<div className='data_report_profit_container_color'>
													<HiOutlineSquare3Stack3D />
												</div>
												<div>
													<p className='profit_container_color_p'>Total profit</p>
													<div className='profit_container_color'>
														<p>$ </p><h1>264,2k</h1>
													</div>
												</div>
											</div>
											<div className='data_report_profit_container'>
												<div className='data_report_profit_container_color2'>
													<HiOutlineSquare3Stack3D />
												</div>
												<div>
													<p className='profit_container_color_p'>Total profit</p>
													<div className='profit_container_color'>
														<p>$ </p><h1>1,090k</h1>
													</div>
												</div>
											</div>
											<div className='data_report_profit_container'>
												<div className='data_report_profit_container_color3'>
													<TiCreditCard />
												</div>
												<div>
													<p className='profit_container_color_p'>Total profit</p>
													<div className='profit_container_color'>
														<p>$ </p><h1>264,2k</h1>
													</div>
												</div>
											</div>

										</div>
										<div className='sales_statistics_container'>
											<div className='sales_two_now'>
												<ThreeinOneBarChart />
											</div>
											<div className='sales-three_now'>
												<div className='visitors_container2'>
													<small>Transactions</small>
													<p className='visitors_progress_text'>
														4 months
													</p>
													<div className='visitors_container_text2'>
														<h1>242.2k</h1>

													</div>
												</div>

												<div className='line-container_box_side3'>
													<div className='tbhxagonLetteri_container'>
														<p>Rate</p> <TbHexagonLetterI />
													</div>
													<div className='GoPlus_container2'> <GoPlus /><p>58%</p></div>
												</div>
											</div>
										</div>
										<div className='sales_statistics_container2'>
											<div className='sales_statistics_container_sub2'>
												<div className='sales_statistics_container_sub20'>
													<LineChart4 className={"sales_statistics"} />
												</div>

												<div className='sales_statistics_container_sub2_now'>
													<div className='sales_statistics_container_sub21'>
														<div className='visitors_container2'>
															<small>Visitors</small>
															<div className='visitors_progress'>
																<div className='visitors_progress_sub'> </div>
															</div>
															<div className='visitors_container_text2'>
																<h1>56K</h1>
																<div className='visitors_container_text_icon'>
																	<span>
																		<IoArrowUpCircleSharp size={15} />
																	</span>
																	<span>+14%</span>
																</div>
															</div>
														</div>
													</div>
													<div className='sales_statistics_container_sub22'>
														<div className='line-container_box_side2'>
															<div className='tbhxagonLetteri_container'>
																<p>Rate</p> <TbHexagonLetterI />
															</div>
															<div className='GoPlus_container2'> <GoPlus /><p>58%</p></div>
														</div>
													</div>
												</div>
											</div>

										</div>
									</div>
								</div>
							</div>
						</div>

					</div>






					<div className='tablet_btn_one'></div>
					<div className='tablet_btn_two'></div>
					<div className='tablet_btn_three'></div>
					<div className='turning_data_number_container' >
						<div className='table_header' >
							<div className='table_header_logo'>
								<img src={logo} alt="logo" />
								<h5>ramos</h5>
							</div>
							<div className='header_search_container'>
								<RiSearchLine />
								<input placeholder='Search' className='header_search_container_input' />
							</div>
						</div>
						<div className='tablet_body' >
							<small className='tablet_body_small'>Revenue amount</small>

							<div className='tablet_body_number_container'>
								<div className='tablet_body_number_container_sub'>
									<p>$</p><h1>1,342,567</h1>
								</div>
								<div className='tablet_body_icon_container_sub'>
									<IoArrowUpCircleSharp /><p>+21%</p> </div>
							</div>

							<div className='tablet_body_analysis_body'>
								<div className='tablet_body_analysis'>
									<div className='tablet_body_analysis_1'>
										<div className='tablet_body_analysis_sub1'>

										</div>
									</div>
								</div>
								<div className='tablet_body_analysis analysis_8'>
									<p className='analysis_10_number'>27%</p>
									<div className='tablet_body_analysis_2'>
										<div className='tablet_body_analysis_sub2'>

										</div>
									</div>
								</div>
								<div className='tablet_body_analysis'>
									<div className='tablet_body_analysis_3'>
										<div className='tablet_body_analysis_sub3'>

										</div>
									</div>
								</div>
								<div className='tablet_body_analysis analysis_8'>
									<p className='analysis_10_number'>27%</p>
									<div className='tablet_body_analysis_4'>
										<div className='tablet_body_analysis_sub4'>

										</div>
									</div>
								</div>
								<div className='tablet_body_analysis'>
									<div className='tablet_body_analysis_5'>
										<div className='tablet_body_analysis_sub5'>

										</div>
									</div>
								</div>
								<div className='tablet_body_analysis analysis_8'>
									<p className='analysis_10_number'>27%</p>
									<div className='tablet_body_analysis_6'>
										<div className='tablet_body_analysis_sub6'>

										</div>
									</div>
								</div>
								<div className='tablet_body_analysis'>
									<div className='tablet_body_analysis_7'>
										<div className='tablet_body_analysis_sub7'>

										</div>
									</div>
								</div>
								<div className='tablet_body_analysis analysis_8'>
									<p className='analysis_10_number'>27%</p>
									<div className='tablet_body_analysis_8'>
										<div className='tablet_body_analysis_sub8 analysis_8'>

										</div>
									</div>
								</div>
								<div className='tablet_body_analysis'>
									<div className='tablet_body_analysis_9'>
										<div className='tablet_body_analysis_sub9'>

										</div>
									</div>
								</div>
								<div className='tablet_body_analysis analysis_10'>
									<p className='analysis_10_number'>27%</p>
									<div className='tablet_body_analysis_10'>
										<div className='tablet_body_analysis_sub10'>

										</div>
									</div>
								</div>
								<div className='tablet_body_analysis'>
									<div className='tablet_body_analysis_11'>
										<div className='tablet_body_analysis_sub11'>

										</div>
									</div>
								</div>

							</div>
							<div className='button_active_bg_main'>
								<div className='button_active_bg_main_sub'>
									<div className='button_active_bg'>
										<span>Data report</span>
										<div className='tablet_swich_btn'>
											<button className='button_active'>Dasdboard</button>
											<button>Reports</button>
											<button>Documents</button>
											<button>History</button>
											<button>Settings</button>
										</div>
										<span></span>
									</div>
									<div className='profit_revenue_container'>
										<div className='profit_revenue_container_one'>
											<p>Sales statistic</p>
											<div className='profit_revenue_container_one_sub'>
												<div className='profit_revenue_icon_container'>
													<div className='revenue_icon_container_orange'>
														<PiCreditCard />
													</div>
													<div className='icon_container_green_span_main'>
														<span className='icon_container_green_span'>Total profit</span>
														<div className='icon_container_green_span_text'>	<span>$</span> 264,2K</div>
													</div>
												</div>
												<div className='profit_revenue_icon_container'>
													<div className='revenue_icon_container_yellow'>
														<PiCreditCard />
													</div>
													<div className='icon_container_green_span_main'>
														<span className='icon_container_green_span'>Sales revenue</span>
														<div className='icon_container_green_span_text'>	<span>$</span>132,,4K</div>
													</div>
												</div>
												<div className='profit_revenue_icon_container'>
													<div className='revenue_icon_container_green'>
														<PiCreditCard />
													</div>
													<div className='icon_container_green_span_main'>
														<span className='icon_container_green_span'>Average bill</span>
														<div className='icon_container_green_span_text'>	<span>$</span>1,090</div>
													</div>
												</div>
											</div>
											<div className='inpection_container'>
												<div className='inpection_container_sup_one'>
													<small>Social</small>
													<p>23%/$60.7K</p>
													<div />
												</div>
												<div className='inpection_container_sup_two'>
													<small>CPC Paid</small>
													<p>23%/$60.7K</p>
													<div />
												</div>
												<div className='inpection_container_sup_three'>
													<small>Organic</small>
													<p>23%/$60.7K</p>
													<div />
												</div>
											</div>
										</div>
										<div className='profit_revenue_container_two'>
											<div className="line-graph">
												<LineChart2 className={'line-container2'} />
											</div>
										</div>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
			<div className='ramos_conatainer'>
				<h1>Ramos</h1>
			</div>
		</section>
	)
}

export default SectionFour
