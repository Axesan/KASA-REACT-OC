import React from "react";
import Banner from "../components/Banner";
import Data from "../data/data.json";
import Card from "./../components/Card";
import ImgHome from "./IMG/banner-home.png"
const home = () => {
// banner
const BannerCover = ImgHome;
const BannerTitle = "Chez vous, partout et ailleurs"

// une variable pour enregistrer ma données 
const DataCard = Data


//  affichage de mes card 
const addCard = () => {	
	let allCard = [];
	
	for (const cardInfo of DataCard) {
	
    allCard.push(
      
      <Card title={cardInfo.title} picture={cardInfo.cover} id={cardInfo.id} key={cardInfo.id}/>
    );
	}
	
	return allCard;
};
 
return (
	<div>
    <section>
		  <Banner cover={BannerCover} title={BannerTitle}/>
    </section>
		<div  className="container">

		
<section>
    <div className="contend_card">
		    {addCard()}
    </div>
    </section>

		</div>
	</div>
);

};

 
export default home;
