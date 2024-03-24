/* eslint-disable jsx-a11y/anchor-is-valid */
import qr from '../assets/img/qr.svg'

const Footer = () => {
	return (
		<footer >
			<main>
				<div className='footer_first_container'>
					<div className='footer_first_container_links'>
						<a href="#" target="_blank" rel="noopener noreferrer">About</a>
						<a href="#" target="_blank" rel="noopener noreferrer">Why Us</a>
						<a href="#" target="_blank" rel="noopener noreferrer">Platfrom</a>
						<a href="#" target="_blank" rel="noopener noreferrer">Pricing</a>
						<a href="#" target="_blank" rel="noopener noreferrer">Contacts</a>
					</div>
					<h1>hello@ramos.com</h1>
				</div>
				<div className='footer_second_container'>
					<div className='footer_second_container_sub'>
						<div className='footer_second_container_sub_first'>
							<h6>Warrensville Heights</h6>
							<p>14418 Vineyard Drive. NC</p>
							<p>44128</p>
						</div>
						<div className='footer_second_container_sub_first'>
							<h6>Saint Louis</h6>
							<p>1366 Penn Street</p>
							<p>63101</p>
						</div>
					</div>
					<div className='footer_second_container_sub_alinks'>
						<a href="#" target="_blank" rel="noopener noreferrer">Linkedin</a>
						<a href="#" target="_blank" rel="noopener noreferrer">Instgaram</a>
						<a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
					</div>
				</div>
				<div className='footer_three_container'>
					<div className='footer_three_container_h1'><h1>Ramos</h1><span>®</span></div>
					<span>privacy policy</span>
					<span>License agreement</span>
					<div className='footer_qr_code'>
						<img src={qr} alt="logo" />
					</div>
				</div>
			</main>
		</footer>
	)
}

export default Footer