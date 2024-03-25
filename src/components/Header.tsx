import logo from '../assets/img/logo.png';



const Header = () => {


	return (
		<div id="header">
			<div className='header_sub_one' data-aos="fade-up">
				<a href="/">
					<img src={logo} alt="logo" />
				</a>
				<h5>ramos</h5>
			</div>


			<div className='header_sub_two' data-aos="fade-up">
				<span className='info'>Dashboard</span>
				<span>Report</span>
				<span>Document</span>
				<span>History</span>
				<span>Settings</span>
			</div>

			<div className='header_sub_three' data-aos="fade-up">Sign Up</div>
		</div>
	)
}

export default Header;




