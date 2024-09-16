
import NavbarComp from '../NavbarComp';
import FooterComp from '../FooterComp';
import  '../../assets/style.css';
import profil from '../../assets/profil.png';
//import computer from '../../assets/computer.jpg'
const HomePage = () => {
	
	return(
		<>
			<div>
				<NavbarComp  id="active"/>
			</div>
			<div className='container-home'>
				<div className='fixedd' >
					<div className='Caption-profil'>
						<div className='box-caption'>
							<h1>Program<strong>mer</strong></h1>
							<h3>Life Home To Home</h3>
							<p>Lorem ipsum dolor sit amet consectetur  <br></br>Eligendi, molestiae commodi dolor minima, <br></br>repellendus sit doloribus iusto pariatur error ipsa! dolor!</p>
						</div>
						<div className='grup-button'>
							<input type='submit' value="Lebih Lanjut" className='button'/>
							<input type='submit'  value="Learn More" className='button'/>
						</div>
					</div>
					<div className='Image-profil'>
						<div className='img-lingkaran'>
							<img src={profil} className='img-profil'/>
						</div>
						<h2>Me Ilham Trihandoyo</h2>
					</div>
					<div className='Caption-About'>
						<div className='box-caption'>
						<h1>COD<strong>ER</strong></h1>
						<h3>Life Home To Home</h3>
						<p>Lorem ipsum dolor sit amet consectetur  <br></br>Eligendi, molestiae commodi dolor minima, <br></br>repellendus sit doloribus iusto pariatur error ipsa! dolor!</p>
						</div>
							<div className='grup-button'>
					
							<input type='submit' value="Lebih Lanjut" className='button'/>
							<input type='submit'  value="Learn More" className='button'/>
						</div>
					</div>
			</div>
			<div className='dekoratif'>
				
				<div className='lingkaran-on'>
						P
				</div>
				<div className='lingkaran-on'>
P
				</div>
				<div className='lingkaran-on'>
P
				</div>
				
			</div>
		</div>

			<div className='container-project'>
				<h1>My Project</h1>
				<div>

				</div>

			</div>
			
			<div>
				<FooterComp />
			</div>
		</>
	)
}
export default HomePage;
