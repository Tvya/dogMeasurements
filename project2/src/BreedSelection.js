import { useState } from 'react';
import BreedDetails from './BreedDetails';

function BreedSelection() {


  const [breed, setBreed] = useState();
  



  return (
    
    <div>
        <select id={breed} onChange={e=>setBreed(e.target.value)}>
            <option value="Null"></option>
            <option value="Affenpinscher">Affenpinscher</option>
            <option value="Afghan Hound">Afghan Hound</option>
            <option value="African Hunting Dog">African Hunting Dog</option>
            <option value="Airedale Terrier">Airedale Terrier</option>
        </select>

      <BreedDetails name={breed}/>
    </div>
    
    
  );
}

export default BreedSelection;