import LineChart from '../components/LineChart';
import { TbHexagonLetterI } from "react-icons/tb";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { IoArrowUpCircleSharp } from 'react-icons/io5';
import trans_img2 from "../assets/img/trans_icon1.jpg"
import trans_img1 from "../assets/img/trans_icon2.jpg"
import { GoPlus } from 'react-icons/go';

const SectionTwo = () => {
	return (
		<section className='section_two'>
			<main>
				<div className='section_two_first_text_container'>
					<div className='section_two_first_text_container_sub_one'>
						<h3>Your key to strategic  </h3>
						<h3>Success throungh analytics </h3>
					</div>

					<div className='section_two_first_text_container_sub_two'>
						<p> Ready for exciting instantaneous</p>
						<p>all-accessble insight in real time?</p>
					</div>
				</div>
				<div className='section_two_analytics_container'>
					<div className='section_two_analytics_one'>
						<div className='section_two_analytics_one_sub'>
							<button className='Setting_report'>Setting up report</button>
							<div>
								<h3>Fast and easy access to analytics</h3>
								<p>One plattorm is a comprehensive
									system or solutions that will be the
									first step towards digitalization of your business?</p>
							</div>
						</div>
						<div className='section_two_analytics_container_two'>
							<div className='section_two_analytics_container_two_sub'>
								<h3>
									Sales statistic
								</h3>
								<div className='square3Stack3D_container_main'>
									<div className="square3Stack3D_container">
										<HiOutlineSquare3Stack3D />
									</div>
									<div className='total_profit_container'>
										<p className='total_profit_container_text'>Total profit</p>
										<div className='total_profit_container_sub'>
											<p>$</p> <h1>264,2K</h1>
										</div>
									</div>
									<div className='visitors_container'>
										<small>Visitors</small>
										<div className='visitors_progress'>
											<div className='visitors_progress_sub'> </div>
										</div>
										<div className='visitors_container_text'>
											<h1>56K</h1>
											<div className='visitors_container_text_icon'>
												<span>
													<IoArrowUpCircleSharp />
												</span>
												<span>+14%</span>
											</div>
										</div>
									</div>
								</div>


								<div className='visit_statistics_container'>
									<LineChart className={'line-container'} />
									<div className='line-container_box_side'>
										<div className='tbhxagonLetteri_container'>
											<p>Rate</p> <TbHexagonLetterI className='TbHexagonLetterI' />
										</div>
										<div className='GoPlus_container'> <GoPlus /><p>58%</p></div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='section_two_analytics_two'>
						<div className='widget_control_cards'>
							<div className='transactions_section_first'>
								<HiOutlineSquare3Stack3D />
								<div className='transactions_section_first_text'>
									<div><img src={trans_img1} alt="trans_img" className="img-style1" /></div>
									<div><img src={trans_img2} alt="trans_img" className='img-style2' /></div>
								</div>
							</div>
							<div className='transactions_section_two'>
								<p>Transactions</p>
								<div className='transactions_section_second_text'> <IoArrowUpCircleSharp /> <p>+14%</p></div>
								<h1>43K</h1>
							</div>
						</div>
						<h5>Widget control</h5>
						<p className='transactions_section_p'>Reports provide a comprehensive overview of important aspects of web analytics</p>
					</div>
				</div>
			</main>
			<div className='section_two_second_text_container'>
				<h5>Up to</h5>
				<h1>45%</h1>
				<p>Increase your analytics efficiency by up to 45%. Unique
					alaorithms provide insiahts from data. reduce time for analvsis
					and save time for making important, informed decisions</p>
			</div>
		</section>
	)
}

export default SectionTwo