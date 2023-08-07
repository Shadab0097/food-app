import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
           userInfo:{
            name:'dummy'
           }
        }
        console.log('child constructor')
  
    }

   async componentDidMount(){

    const data = await fetch(" https://api.github.com/users/akshaymarch7");

    const json = await data.json();
   
    this.setState({
        userInfo: json,
    })
    // console.log(json);
    console.log('child mount')
}

    componentDidUpdate(){
//   this.timer= setInterval(()=>{
//         console.log('shadab khan')
//     },1000)
        console.log('updated')
    }

    componentWillUnmount(){
        console.log('unmount')
        // clearInterval(this.timer)
    }
    render(){
        console.log("child render")
        return(
            <div>
             <img src={this.state.userInfo.avatar_url}/>
           <h1>{this.state.userInfo.name}</h1>
            </div>
        )
    }
}

export default UserClass