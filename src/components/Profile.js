import { useEffect, useState } from "react";

const Profile = (props) => {
    const [count,setCount] = useState(0);
    // const [count2] = useState(0);
    // console.log(props)

    useEffect(()=>{
        //api call
        const timer = setInterval(()=>{
            console.log("REct call..")
        },1000);
        // console.log("use effect")

        return ()=>{
            clearInterval(timer);
            // console.log("useeffect return")
        };

    },[])

    console.log("render");
    return(
        <div>
            <h1>This is a Profile Page...</h1>
            <h2>Name : {props.name}</h2>
            <h3>Count : {count}</h3>
            <button onClick={()=>setCount(1)}> Count</button>
        </div>
    )
}

export default Profile;