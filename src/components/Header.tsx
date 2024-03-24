import logo from '../assets/img/logo.png';



const Header = () => {


	return (
		<div id="header">
			<div className='header_sub_one'>
				<a href="/">
					<img src={logo} alt="logo" />
				</a>
				<h5>ramos</h5>
			</div>


			<div className='header_sub_two'>
				<span className='info'>Dashboard</span>
				<span>Report</span>
				<span>Document</span>
				<span>History</span>
				<span>Settings</span>
			</div>

			<div className='header_sub_three'>Sign Up</div>
		</div>
	)
}

export default Header;




