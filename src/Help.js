
import './Help.css'

import DogMeasure from './img/dogMeasure.png'



function Help(props) {

    const {isVisible, closeModal} = props;

    return isVisible && 
    
    <div className="Help-Text">
        <div className="Help-Content">
            <div className="Help-Close">
                <svg xmlns="http://www.w3.org/2000/svg" 
                class="icon icon-tabler icon-tabler-x" 
                width="34" 
                height="34" 
                viewBox="0 0 24 24" 
                stroke-width="1.5" 
                stroke="#2c3e50" 
                fill="none" 
                stroke-linecap="round" 
                stroke-linejoin="round"
                className="Help-Close-icon"
                onClick={closeModal}>
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
            </div>
              <div className="Help-Img">
                <img src={DogMeasure} alt="dogMeasure" width="550px" height="400px"></img>
            </div>
        
        </div>
 
        
        
    </div>
      
     

    

}

export default Help;
