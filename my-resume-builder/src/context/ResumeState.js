import React , {useState}from "react";
import ResumeContext from "./ResumeContext"

const ResumeState = (props) => {
    // const [detail, setDetail] = useState({ name: "ganesh",
    //class: "mca"}) 
    
    const [skillLet, setskillLet] = useState([]);

    return (

        <ResumeContext.Provider value={{skillLet,setskillLet}}>
            {props.children}
        </ResumeContext.Provider>
    )
}

export default ResumeState;