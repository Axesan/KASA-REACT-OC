# REACT KASA INFORMATIONS

##  Launch KASA 
-  *$ npm start*
## Created project Kasa
Run in terminal:
-  *$ npx create-react-app kasa*
## Router
File **index.js** contains links for router is pages:
- Home.js File : *src/pages/Home.js*
- Apropos.js File : *src/pages/Apropos.js*
- Notfound.js - (Error 404) File : *src/pages/Notfound.js*




# COMPONENTS
## - BANNER

Locate File in 'components/Banner.js'\
*Components is called :*
```js
// home.js
<section>
	<Banner classPicture="banner" title={BannerTitle}/>
</section>
```
```js
// Apropos.js
<section>
    <Banner title='' classPicture='banner-apropos'/>
</section>
```
---
## - CARD
Locate File in 'components/Card.js'\
Components is called :
```js
// home.js
   return (
	<div className="contend_card">
        {% Function anonymous %} 
 	     {addCard()}
	</div>
  );
```
---
## - Caroussel 
Locate File in 'components/Caroussel.js'\
Components is called :
```js 
// ViewCard.js
return(
<div>                    
    <Caroussel paginate={ImgCarrousel.length}>
          {/* BOUCLES SUR LES IMAGES UTILISATION DE FOREACH */}
          {ImgCarrousel}
    </Caroussel> 
</div>
);
```
---
## - DROPDOWN
Locate File in 'components/Dropdown.js'\
Components is called :
```js
// ViewCard.js 
return(
        <Dropdown title="Descriptions" descriptions={description}  numberDropdown={1} />  
)
```
```js
// Apropos.js 
return(
      <Dropdown title="Securité" descriptions="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." numberDropdown={1}/> 
)
```
---
## - FOOTER 
Locate File in 'components/Footer.js'\
Components is called :
```js
// index.js
<Footer/>
```
---
# - Navigation 
Locate File in 'components/Navigation.js'\
Components is called : 
```js
// index.js
<Navigation/>
```
# STYLE DESIGN 

## Style Locate 
*src/styles* 
## Style Components
*src/styles/components* 
## Style  Pages 
*src/styles/pages* 

RESPONSIVE File **_global.scss**
```scss
// Format telephone
@media only screen and (max-width: 480px) {
        ....
}

// Format tablette
@media only screen and (max-width: 1024px) {
        ...
}
```
# Add to prod
Run in terminal :\
- *$ npm run build*
