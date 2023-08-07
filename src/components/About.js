// import User from "./User";
// import UserClass from "./UserClass";
import React from "react";




class About extends React.Component{
    constructor(props){
        super(props)
        console.log("parent contructor")
    }
    componentDidMount(){
        console.log("parent mount")
}

componentDidUpdate(){
    console.log('parent updated')
}

componentWillUnmount(){
    console.log('parent unmount')
}
    render(){
        console.log("parent render ")
        return(
            <div>
                <h1>This Is About us Page</h1>
              
                {/* <UserClass name={"shadab"} /> */}
             

            </div>
        )
    }
}
// const About =()=>{
//     return(
//         <div>
//             <h1>This Is About us Page</h1>
//             <User Name={"Shadab"} Location={"Gurugrm"}/>
//             <UserClass Name={"Shadab"} Location={"Gurugrm"}/>
//         </div>
//     )
// }

export default About;