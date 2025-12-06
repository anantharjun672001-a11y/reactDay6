import React, { useEffect, useRef, useState } from 'react';

const UseRef = () => {
    const iRef=useRef();
    const val=useRef(0);
    const [data,setData]=useState("");

    
    useEffect (()=>{
        iRef.current.focus()
    },[])
    

    const handleChange=(e)=>{
        console.log("handle change");
        setData(e.target.value)
        val.current += 1;
        console.log(val.current);
        //console.log("iref", iRef.current.value) 
    }

    return (
        <div>
            <h1>UseRef Hook</h1>
            <input type='text' placeholder='Enter Your name'ref={iRef}/>
            <input type="email" placeholder='Enter Your Email' onChange={handleChange} />
            {val.current}
        </div>
    );
};

export default UseRef;