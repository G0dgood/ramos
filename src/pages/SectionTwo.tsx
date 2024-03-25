import LineChart from '../components/LineChart';
import { TbHexagonLetterI } from "react-icons/tb";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { IoArrowUpCircleSharp } from 'react-icons/io5';
import trans_img2 from "../assets/img/trans_icon1.jpg"
import trans_img1 from "../assets/img/trans_icon2.jpg"
import { GoPlus } from 'react-icons/go';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { useEffect, useState } from 'react';

const SectionTwo = () => {

	const [isVisible, setVisibility] = useState(false);
	const [entered, setEntered] = useState(false);

	const onChange = (visiblity: boolean | ((prevState: boolean) => boolean)) => {
		setVisibility(visiblity);
	};

	useEffect(() => {
		if (isVisible) {
			setEntered(true);
		}
	}, [isVisible]);

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
					<div className='section_two_analytics_one' data-aos="fade-up">
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
										<VisibilitySensor partialVisibility offset={{ bottom: 200 }} onChange={onChange}>
											<div className='total_profit_container_sub'>
												<p>$</p> <h1>	{entered ? <CountUp end={264} duration={5} separator="," suffix="2K" /> : null}</h1>
											</div>
										</VisibilitySensor>

									</div>
									<div className='visitors_container'>
										<small>Visitors</small>
										<div className='visitors_progress'>
											<div className='visitors_progress_sub'> </div>
										</div>
										<VisibilitySensor partialVisibility offset={{ bottom: 200 }} onChange={onChange}>
											<div className='visitors_container_text'>
												<h1>{entered ? <CountUp end={56} duration={5} separator="," suffix="K" /> : null}</h1>
												<div className='visitors_container_text_icon'>
													<span>
														<IoArrowUpCircleSharp />
													</span>
													<span>+{entered ? <CountUp end={14} duration={5} suffix="%" /> : null}</span>
												</div>
											</div>
										</VisibilitySensor>
									</div>
								</div>


								<div className='visit_statistics_container'>
									<LineChart className={'line-container'} />
									<div className='line-container_box_side'>
										<div className='tbhxagonLetteri_container'>
											<p>Rate</p> <TbHexagonLetterI className='TbHexagonLetterI' />
										</div>
										<VisibilitySensor partialVisibility offset={{ bottom: 200 }} onChange={onChange}>
											<div className='GoPlus_container'> <GoPlus /><p>{entered ? <CountUp end={58} duration={5} suffix="%" /> : null}</p></div>
										</VisibilitySensor>

									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='section_two_analytics_two' data-aos="fade-up">
						<div className='widget_control_cards'  >
							<div className='transactions_section_first' data-aos="fade-left" data-aos-delay="300">
								<HiOutlineSquare3Stack3D />
								<div className='transactions_section_first_text'>
									<div><img src={trans_img1} alt="trans_img" className="img-style1" /></div>
									<div><img src={trans_img2} alt="trans_img" className='img-style2' /></div>
								</div>
							</div>
							<VisibilitySensor partialVisibility offset={{ bottom: 200 }} onChange={onChange}>
								<div className='transactions_section_two' data-aos="fade-right" data-aos-delay="300">
									<p>Transactions</p>
									<div className='transactions_section_second_text'> <IoArrowUpCircleSharp /> <p>+{entered ? <CountUp end={14} duration={5} suffix="%" /> : null}</p></div>
									<h1>{entered ? <CountUp end={43} duration={5} suffix="K" /> : null}</h1>
								</div>
							</VisibilitySensor>

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