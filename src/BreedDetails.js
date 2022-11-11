import { useState, useEffect } from "react";
import measurements from './measurements.json'
import './BreedDetails.css'

function BreedDetails(props) {

const [lifespan, setLifespan] = useState();
const [weight, setweight] = useState();
const [height, setheight] = useState();
const [image, setimage] = useState();

 const dogUrl= "https://api.thedogapi.com/v1/breeds/search?api_key=live_674WbOpS6QZhfRdZ54fxnCbfC33D7sWazDJx0frr8D1PaPfkED63S0Pbekdets30&q="
 const dogUrlImage = `https://cdn2.thedogapi.com/images/${image}.jpg`;

const retrieveDetails = async () => {
  const res = await fetch(`${dogUrl}${props.name}`);
  const json = await res.json();
  const lifespan = json[0].life_span;
  const weight = json[0].weight.metric;
  const height = json[0].height.metric;
  const images = json[0].reference_image_id;

  setLifespan(lifespan)
  setweight(weight)
  setheight(height)
  setimage(images)

  console.log(lifespan)
  console.log(weight)
  console.log(height)
  console.log(images)
    
  };

  useEffect(() => {
    retrieveDetails();
  })



  return (
    
    <div>
        <h5>Measurements of a full grown {props.name}</h5>
        <div className="main-container">
          <div className="img-container">
           <img src={dogUrlImage} alt={props.name} width="220px" height="220px"></img>
          </div>
         
        
         <div className="details-container">
          
          <h4>Lifespan: {lifespan}</h4>
          <h4>Weight: {weight} kg</h4>
          <h4>Height (Withers): {height} cm</h4>

          {
            measurements.map( measure => {
              return (
                <div>
                  {props.name === measure.name ? (
                  <div>
                    <h4>Back Length: {measure.back_length} cm</h4>
                    <h4>Neck Circumference: {measure.neck_circumference} cm</h4>
                    <h4>Chest Circumference (Girth): {measure.chest_circumference} cm</h4>
                    </div>
                  ) : null}
                </div>
              )
            })
          }
            </div>
          </div>
        </div>
      
    
    
    
  );
}

export default BreedDetails;