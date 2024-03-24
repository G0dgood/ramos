import Header from '../components/Header'
import Footer from '../components/Footer';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import SectionFour from './SectionFour';
import SectionFive from './SectionFive';


const Landing = () => {
	return (
		<div>
			<Header />
			{/* section one */}
			<SectionOne />
			{/* section two */}
			<SectionTwo />
			{/* section three */}
			<SectionThree />
			{/* section 4 */}
			<SectionFour />
			{/* section 5 */}
			<SectionFive />
			{/* Footer */}
			<Footer />
		</div>
	)
}

export default Landing
