
import './App.css';
import BreedSelection from './BreedSelection';
import Help from './Help';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {

  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div className="App">
      
      

       <div className='Help-button'>
        <button className="button" onClick={()=>setIsModalVisible(true)}>Help</button>
        </div>

       <BreedSelection/>

        <Help
          isVisible = {isModalVisible}
          closeModal={()=>setIsModalVisible(false)}
        />

     
        
       
    </div>
   
  );
}

export default App;
