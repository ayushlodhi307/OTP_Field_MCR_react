import { useEffect, useRef, useState } from "react";

export default function Otp({otpLength=6}){

    const [otp,setotp]=useState(new Array(otpLength).fill(""));
    // console.log(otp);
    const ref=useRef([]);

    console.log(ref);

    const handleKeyDown=(e, index)=>{
        const key=e.key;

        const copyOtp=[...otp];

        if(key=== "Backspace"){
           copyOtp[index]="";
           if(index-1>=0) ref.current[index-1].focus();
           setotp(copyOtp);
           return;
        }
        if(isNaN(key)){
            return;
        }
        
        copyOtp[index]=key;
        if(index+1 <otp.length) ref.current[index+1].focus();

        setotp(copyOtp);

        


    };
    useEffect(() => {
        ref.current['0'].focus();
    }, [])
    

  return (
    <div className="container">
        {otp.map((value,index)=>{
            return (<input 
            key={index}
            ref={(curIp)=>ref.current[index]=curIp}
            type="text"
            value={value}
            onKeyDown={(e)=>handleKeyDown(e,index)}/> );
        })}
    </div>
  );
}

