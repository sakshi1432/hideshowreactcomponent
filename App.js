import React from "react";                  //Testone
                                            import React from "react";
                                                 
                                                 const [name,setName] = useState("");
 import Test from "Test";                       const [surname,setSurname] = useState("");
                                                const Testone = (props)=>{
const App = () =>{                              return(
    return(                                               <input type ="text" value = {name} onChange ={(e) => setName(e.target.value)}
          <Test/>                                           <button onClick =(()=> props.f(name))>Submit</button>
                                                        )
    
    )                                          }
 }
    
// Test component                                     //testtwo
                                                            
                                                            import React from "react";
                                                            <h1>hellow </h1>
import React,{useState} from "react";

const Test = () =>{
      const [one,setOne] = useState(true);
      
      const fun = (name,surname) =>{
          if(name != "" && surname != "")
            {
                  setOne(false)
            }

      }
      return <div>{one? <Testone f = {fun} />:<TestTwo/>}</div>
}
