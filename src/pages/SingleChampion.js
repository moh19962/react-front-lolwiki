import React, {useState, useContext} from "react";
import { ChampContext } from '../context'
import defaultBcgs from '../images/room-3.jpeg';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import StyledHero from '../components/StyledHero';
import BckGroundImage from '../images/wallPaper1.jpg';


const SingleChampion = (props) => {
	// console.log(props)

	const [slug, setSlug] = useState(props.match.params.slug);
	const [defaultBcg, setDefaultBcg] = useState({defaultBcgs});
	// console.log(defaultBcg)

	 const { getChamp }  = useContext(ChampContext);
	 const champ = getChamp(slug);
	 console.log(champ);

	 {
		if(!champ){
			return <div className="error">
				<h4>Loading for champs wait a second...</h4>
				<Link to="/champs" className="btn-primary">
					Back to champions
				</Link>
			</div>
		}
	 }

	//  const {type, image, videourl, description} = champ;
	 const {championName, championType, championImage, championDescription} = champ;
	//  const [mainImg, ...defaultImg] = championImage;

    return (
		<>
		{/*<StyledHero img={images[0]}>*/}
		{/*	/!*<Banner title={`${name} champ`}>*!/*/}
		{/*	/!*	<Link to="/champs" className="btn-primary">*!/*/}
		{/*	/!*		back to champs*!/*/}
		{/*	/!*	</Link>*!/*/}
		{/*	/!*</Banner>*!/*/}
		{/*</StyledHero>*/}

			<StyledHero img={BckGroundImage}>
				<Banner title={`${championName} champ`}>
					<Link to="/champs" className="btn-primary">
						back to champs
					</Link>
				</Banner>
			</StyledHero>

		<section className="single-champ">
			<div className="single-champ-images">
					{/* {defaultImg.map((item, index) => (
						<img key={index} src={item} alt={championName} />
					))} */}
					<img src={championImage} height="400px" width="300px" alt={championName} />
			</div>

			<div className="single-champ-info">
				<article className="info">
					<h3>Info</h3>
					<h6>Name: {championName}</h6>
					<h6>Role: {championType}</h6>
				</article>

				<article className="desc">
					<h3>Info</h3>
					<p>{championDescription}</p>
				</article>

			</div>
			{/* <div className="single-champ-images">
				{defaultImg.map((item, index) => (
					<img key={index} src={item} alt={name} />
				))}
			</div> */}
		</section>
		</>
	)
}

export default SingleChampion

