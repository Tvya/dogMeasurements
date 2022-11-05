import { useState, useEffect } from "react";
import measurements from './measurements.json'

function BreedDetails(props) {

const [lifespan, setLifespan] = useState();
const [weight, setweight] = useState();
const [height, setheight] = useState();
const [image, setimage] = useState();

const dogUrl= "https://api.thedogapi.com/v1/breeds/search?api_key=live_674WbOpS6QZhfRdZ54fxnCbfC33D7sWazDJx0frr8D1PaPfkED63S0Pbekdets30&q="
 const dogUrlImage = `https://cdn2.thedogapi.com/images/${image}.jpg`;

const makeApiCall = async () => {
  const res = await fetch(`${dogUrl}${props.name}`);
  const json = await res.json();
  const lifespan = json[0].life_span;
  const weight = json[0].weight.metric;
  const height = json[0].height.metric;
  const image = json[0].reference_image_id;

  setLifespan(lifespan)
  setweight(weight)
  setheight(height)
  setimage(image)

  console.log(lifespan)
  console.log(weight)
  console.log(height)
  console.log(image)
    
  };

  useEffect(() => {
    makeApiCall();
    
  })



  return (
    
    <div>
    <br></br>
    <img src={dogUrlImage} alt="dog" width="200" height="200"></img>

    <h3>Lifespan: {lifespan}</h3>
    <h3>Weight: {weight} kg</h3>
    <h3>Height (withers): {height} cm</h3>

      {
        measurements.map( measure => {
          return (
            <div>
              {props.name == measure.name ? (
                <div>
                <h3>Back Length: {measure.back_length} cm</h3>
                <h3>Neck circumference: {measure.neck_circumference} cm</h3>
                <h3>Chest circumference (Girth): {measure.chest_circumference} cm</h3>
                </div>
              ) : null}
            </div>
          )
        })
      }

    </div>
    
    
  );
}

export default BreedDetails;