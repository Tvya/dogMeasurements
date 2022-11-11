import { useState, useEffect } from 'react';
import BreedDetails from './BreedDetails';
import './BreedSelection.css'

function BreedSelection() {


  const [breeds, setBreeds] = useState([]);
  
  const [breedname, setBreedname] = useState("null");
  
   
  const dogNamesUrl="https://api.thedogapi.com/v1/breeds"
  
  const retrieveName = async () => {
  const res = await fetch(`${dogNamesUrl}`);
  const json = await res.json();

  setBreeds(await json)
  }

  useEffect(() => {
    retrieveName();
    
  },[])


  return (
    
    <div>
      <div className='Dropdown'>
        <select className="breedName" onChange={e=>setBreedname(e.target.value)}>
            <option value="null">Select Breed</option>

              {
                breeds.map( (breedName)=>(
                  <option key={breedName.id} value={breedName.name}> {breedName.name} </option>
                ))
              }

        </select>
      
        </div>


        <div className="breedDetails">
        {
          breedname !=="null" && (
            <BreedDetails name={breedname}/> 
          )
        }
        </div>
         
        
    </div>
    
    
  );
}

export default BreedSelection;