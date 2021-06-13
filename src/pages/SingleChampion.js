import React, {useState, useContext} from "react";
import { ChampContext } from '../context'
import defaultBcgs from '../images/room-3.jpeg';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import StyledHero from '../components/StyledHero';


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
	 const {name, type, description, images} = champ;
	 const [mainImg, ...defaultImg] = images;

    return (
		<>
		{/*<StyledHero img={images[0]}>*/}
		{/*	/!*<Banner title={`${name} champ`}>*!/*/}
		{/*	/!*	<Link to="/champs" className="btn-primary">*!/*/}
		{/*	/!*		back to champs*!/*/}
		{/*	/!*	</Link>*!/*/}
		{/*	/!*</Banner>*!/*/}
		{/*</StyledHero>*/}

			<StyledHero img={images[0]}>
				<Banner title={`${name} champ`}>
					<Link to="/champs" className="btn-primary">
						back to champs
					</Link>
				</Banner>
			</StyledHero>

		<section className="single-champ">
			<div className="single-champ-info">
				<article className="info">
					<h3>Info</h3>
					<h6>Name: {name}</h6>
					<h6>Role: {type}</h6>
					<h6>Difficulty: Unknown</h6>
				</article>

				<article className="desc">
					<h3>Info</h3>
					<p>{description}</p>
				</article>

			</div>
			<div className="single-champ-images">
				{defaultImg.map((item, index) => (
					<img key={index} src={item} alt={name} />
				))}
			</div>
		</section>
		</>
	)
}

export default SingleChampion

