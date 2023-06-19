import React, { useState } from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    //createstate
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
        avatar_url:"Dummy Avtar_url",
        id : "Dummy Id"
      },
    };

    console.log("c- constructor called" + this.props.name);
  }

  async componentDidMount() {

    this.timer = setInterval(()=>{
        console.log("react calling...")
    },1000);
    //   console.log("c- componentdidmount called.." + this.props.name);
    // //api call
    // const data = await fetch(" https://api.github.com/users/shiroyaurvish");

    // const json = await data.json();
    // console.log(json)
    // this.setState({
    //   userInfo: json,
    // });
  }

  componentDidUpdate(){
    // console.log("Componenent Did update")
  }

  componentWillUnmount(){
    clearInterval(this.timer)
    // console.log("Componenet Will unmount")
  }

  render() {
    const { count } = this.state;
    // console.log("c- render" + this.props.name);
    return (
      <div>
        <h1>This is a class based profile Component</h1>
        <img src={this.state.userInfo.avatar_url}/>
        <h2>Name : {this.state.userInfo.name}</h2>
        <h2>Location : {this.state.userInfo.location}</h2>
        <h2>id : {this.state.userInfo.id}</h2>
      </div>
    );
  }
}

export default Profile;
