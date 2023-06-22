import React, { cloneElement, memo, useEffect, useMemo, useRef, useState } from "react";

function Clock ( props ){
    const [time,setTime] = useState(0);
    const [arrSave,setArrSave] = useState([]);
    const timeId = useRef();
    

    useEffect(()=>{

        if(props.click){

            timeId.current = setInterval(()=> {

                setTime(timer => timer + 10);

            },10)
        }

        return () => clearInterval(timeId.current);
        
    },[props.click, timeId.current]);
    
    // Đổi mili giây sang thời gian
    const milliseconds = Math.floor((time % 1000) / 10)
    const seconds = Math.floor((time % 60000) / 1000)
    .toString()
    .padStart(2, '0');
    const minutes = Math.floor(time / 60000)
    .toString()
    .padStart(2, '0');
    const hours = Math.floor(minutes / 60)
    .toString()
    .padStart(2, '0');


    useEffect(()=>{

        // console.log(arrSave)

        if(props.onSave == true || props.onSave == false ){
            setArrSave(current => [...current,{

                'h': hours,
                'm': minutes,
                's': seconds,
                'mls': milliseconds

            }]);
        }
        return () =>{
            // trackModalClose();
        }
        // clearImmediate(arrSave);
        // return cloneElement(arrSave)

    },[props.onSave]);


    return(

        <>
        
            <div style={{textAlign:'center', color:'white',fontSize:'8rem'}}>
                {hours}:{minutes}:{seconds} <span style={{fontSize:'3rem', marginLeft:'-2rem'}}>{milliseconds}</span>
            </div> 
            
            <div id="css">

                {   
                    arrSave.map( (item, index) => {
                        return(
                            
                            <li key={index}>{item.h}:{item.m}:{item.s}:{item.mls} </li>
                            
                            )
                        })
                }

            </div>

        </>

    )
}
export default memo(Clock)