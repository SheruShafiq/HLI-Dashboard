import {useGoogleLogin} from '@react-oauth/google';
import axios from "axios"
import React from "react";
import { useState  } from 'react';
import'./formcss.css';








function App() {
    let reponseGlobal ;    
    const login = useGoogleLogin({
        onSuccess: async response => {
            try {
                 console.log(response.access_token);
                const res = await axios.get(`https://www.googleapis.com/analytics/v3/data/realtime?ids=ga:${gaID}&metrics=rt:activeUsers&access_token=${response.access_token}`, {
                    headers: {
                        "authorization": `Bearer ${response.access_token}`
                    }
                    
                    
                })
                 if (res.data.rows == null) {
                    res.data.rows = 0
                }
                reponseGlobal = response
               
                setactiveUsers(res.data.rows);
                setloggedin(true);
                const interval = setInterval(function() {
                    fetch ();
                  }, 5000);
              
            } catch (err) {
                console.log(err)
            }
        },
        scope: 'https://www.googleapis.com/auth/analytics.readonly'
    });
   


      
    
       async  function  fetch () {
            try {
                
                const res = await axios.get(`https://www.googleapis.com/analytics/v3/data/realtime?ids=ga:${gaID}&metrics=rt:activeUsers&access_token=${reponseGlobal.access_token}`, {
                    headers: {
                        "Authorization": `Bearer ${reponseGlobal.access_token}`
                    }
                })
                if (res.data.rows == null) {
                    res.data.rows = 0
                }
                setactiveUsers(res.data.rows);
                console.log(res.data.totalResults)
            } catch (err) {
                console.log("something died")
            }
        }
      
  

    const [gaID, setgaId] = useState('')
    const [activeUsers, setactiveUsers] = useState('')    
    const [name, setName] = useState('')
    const [loggedin, setloggedin] = useState('')
        
    return (
       
        <div className="form">

            {!loggedin &&
             
            <div className="Appheader">
            <input
            placeholder='View ID'
                name="gaID"
                type="gaID"
                onChange={event => setgaId(event.target.value)}
                value={gaID}
                className="inputFields"
               
            />
            <input
            placeholder='Project Name (any)'
                name="name"
                type="name"
                onChange={event => setName(event.target.value)}
                value={name}
                className="inputFields"
               
            />
               <button id='submit' onClick={login}>
                    Continue with google
                </button>
               
            </div>
            
}
            {loggedin &&
            <div id='results'>
            <p>{name}</p>

            <p id='total'>{activeUsers}</p>
            </div>
            } 
        </div>
   );
    };   
export default App;
