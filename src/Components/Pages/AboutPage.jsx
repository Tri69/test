import NavbarComp from '../NavbarComp';
import FooterComp from '../FooterComp';
import react,{useState} from 'react'
const AboutPage = () => {
	const [a, setA] = useState(0);
	
	return(
		<>
			<div>
				<NavbarComp 
					id="active"/>
			</div>
			<div>
				<h1>Home</h1>
				<button onClick={() => About("/about")}>About</button>
			</div>
			<div>
				<FooterComp />
			</div>
		</>
	)
}

export default AboutPage;