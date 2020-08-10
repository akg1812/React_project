
import React, {useState,useEffect} from "react";
import Axios from "axios";
const url="https://jsonplaceholder.typicode.com/users";
function App() {
    const [ids, setIds] = useState(null);
    const fetchId=()=>{
        Axios.get(url)
        
    .then((response)=>{
        (setIds(response.data));
        console.log(response);
        
    })
  
    .catch((error)=>{
        console.log(error);
    })
    }
    
    const [names,setNames] = useState(null);
    const fetchName=()=>{
        Axios.get(url)
        .then((response)=>{
            (setNames(response.data));
            console.log(response);
    })
    }
    
    const [emails,setEmails]=useState(null);
    const fetchEmail=()=>{
        Axios.get(url)
        .then((response)=>{
            (setEmails(response.data));
            console.log(response);
    })
    }
useEffect(()=>{
    fetchId()
},[])

return(
    <React.Fragment>
        <div>
            <h1>
                Welcome user you have the ids
            </h1>

                {(ids === null) ?
            <div>
                <h2>Loading Ids...</h2>
                
            </div>:
                 <ul>
                      
                 {ids.map(id=>(
                 <li key={id.id}>{id.id}</li>
                 ))}
                </ul> 
                } 
      
        </div>

        
        <div>
            <h1>
                Names
            </h1>
        {(names === null)?
         <div>
             
             <button type="button" onClick ={fetchName}>Name</button>
         </div>:
              <ul>
                 <button type="button" onClick ={fetchName}>Name</button>
                  {names.map(name=>(
                      <li key ={name.name}>{name.name}</li>
                  ))}
              </ul>
        }
         </div>

         <div>
            <h1>
                 Emails
            </h1>
            {(emails === null)?
            <div>
                <button type = "button" onClick={fetchEmail}>Emails</button>
            </div>:
            <ul>
                 <button type = "button" onClick={fetchEmail}>Emails</button>
                {emails.map(email=>(
                    <li keu ={email.email}>{email.email}</li>
                ))}
            </ul>
            }
            
            </div>
        
   </React.Fragment>
)
        }
        
export default App;