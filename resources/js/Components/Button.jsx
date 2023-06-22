import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import Clock from "./Clock";

function Button( props ){

    const [save, setSave] = useState(false);
    const [handle, setHandle] = useState(false);
    // const handlSaveRef = useRef();
  
    const Click = () => {

        setHandle(!handle);
        
    }
    
    const handleSaveClock = () => {

        setSave(!save);

    }
    
    // console.log(handlSaveRef);

    return(
        <> 
            <Clock click = {handle} onSave = {save}/>

            <div className="btn" style={{display:'flex',justifyContent:'space-between', margin:'auto 5.5rem'}}>
                
                <button onClick ={Click} style={{ fontSize:"1.5rem", fontWeight:'bold', height:'4rem', width:'15rem', borderRadius:'15px', background:'#f4bf50', border:'none' }}>
                    {handle ? "Tạm dừng" : "Bắt đầu"} 
                </button>

                <button onClick={handleSaveClock} style={{ fontSize:"1.5rem", fontWeight:'bold', height:'4rem', width:'12rem', borderRadius:'15px', background:'#818cf8', border:'none'}}> 
                    Lưu thời gian 
                </button>

            </div>
        </>
    )
}
export default Button