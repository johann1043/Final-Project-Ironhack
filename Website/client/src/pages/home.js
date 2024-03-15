import React from 'react';
import Navbar from '../Components/navbar';
import Plant1 from '../Images/Plants/Plant1.jpg'
import Plant2 from '../Images/Plants/Plant2.jpg'
import Plant3 from '../Images/Plants/Plant3.jpg'
import Plant4 from '../Images/Plants/Plant4.jpg'

export default function Home() {
    return (
        <div>
            <Navbar/>
			<div id="carouselExampleCaptions" class="carousel slide" >
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img src={Plant2} class="d-block w-100" alt="PlantImage" className='heroSection'/>
						<div class="carousel-caption d-none d-md-block">
							<h5>First slide label</h5>
							<p>Some representative placeholder content for the first slide.</p>
						</div>
					</div>
				</div>
			</div>
			

			<div class="container text-center">
				<div class="row">

					<div class="col">
						<div class="card" className='card'>
							<img src={Plant1} class="card-img-top" alt="..."/>
							<div class="card-body">
								<h5 class="card-title">Card title</h5>
								<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<a href="#" class="btn btn-success">Go somewhere</a>
							</div>
						</div>
					</div>

					<div class="col">
						<div class="card" className='card'>
							<img src={Plant4} class="card-img-top" alt="..."/>
							<div class="card-body">
								<h5 class="card-title">Card title</h5>
								<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<a href="#" class="btn btn-success">Go somewhere</a>
							</div>
						</div>
					</div>

					<div class="col">
						<div class="card" className='card'>
							<img src={Plant3} class="card-img-top" alt="..."/>
							<div class="card-body">
								<h5 class="card-title">Card title</h5>
								<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<a href="#" class="btn btn-success">Go somewhere</a>
							</div>
						</div>
					</div>
				</div>
			</div>
				
				
				
			
		</div>
    );
}
