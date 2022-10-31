import "./websitedata.css";
import jQuery from 'jquery';
import plus from '../assets/plus-sign-svgrepo-com.svg';
import React, {  useState } from "react";
import Form from './form';
import {GoogleOAuthProvider} from '@react-oauth/google';




const Websitedata = () => {
		const [isShown, setIsShown] = useState(false);

	const handleClick = event => {
		
		
			setIsShown(isShown+1);
		
	};
	
	
    

    
 

    return (
		<div className="wrapper">
      {isShown>0 && ( 
		<div id="form"> <GoogleOAuthProvider clientId="14058033690-dd4oqs1hml1f258j2qmodifbhg12bqnr.apps.googleusercontent.com"><Form /> </GoogleOAuthProvider> </div>
)}
{isShown>1 && ( 
		<div id="form"> <GoogleOAuthProvider clientId="14058033690-dd4oqs1hml1f258j2qmodifbhg12bqnr.apps.googleusercontent.com"><Form /> </GoogleOAuthProvider> </div>
)}
{isShown>2 && ( 
		<div id="form"> <GoogleOAuthProvider clientId="14058033690-dd4oqs1hml1f258j2qmodifbhg12bqnr.apps.googleusercontent.com"><Form /> </GoogleOAuthProvider> </div>
)}

	<div id="addwid">
	<button id="search-button" onClick={handleClick}>
  <img src={plus} id="plusIco"/>
 </button>
	</div>
</div>
    )


}


export default Websitedata;
