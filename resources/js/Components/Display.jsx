import React, { useCallback, useEffect, useRef, useState } from "react";
import Button from "./Button";
import Clock from "./Clock";
function Display(){
    
    // const [click,setClick] = useState(false);
    // const buttonClick = useRef(false);
    
    // useEffect(()=>{
    //     buttonClick.current = handleCLick;
        
    //     // console.log(buttonClick.current);
    // });

    // const handleCLick = useCallback(()=>{
    //     return buttonClick.current;
    // },[buttonClick.current]);

    // console.log(buttonClick.current);
    
    return(
        <div style={{ height:"50rem", width:"40rem", background: "#0e1526"}}>
            <div style={{ display:"flex", justifyContent:'center', alignItems:"center",height:"10%", color:"wheat", fontWeight:"bold", fontSize:"3rem" }} >
                 Đồng Hồ Bấm Giờ
            </div>
            <hr />

            <Button />

            <div style={{color:'wheat', marginTop:"13rem"}}>
                <p style={{textAlign:"center", fontWeight:'bold', fontSize:'1.5rem', color:'white'}}><b>Đồng hồ Bấm giờ nằm ở đâu trên máy tính?</b></p>
                <p style={{fontSize:'1rem', margin:'auto 3rem', lineHeight: "2.2rem", fontWeight:'bold'}}>
                    Hầu hết các máy tính điều không có sẵn đồng hồ bấm giờ. Để sử dụng
                    đồng hồ bấm giờ trên máy tính, bận cần phải sử dụng một đồng hồ bấm
                    giờ online miễn phí. Hoặc là, trong trường hợp bạn có một thiết bị chạy hệ
                    điều hành Windows 11, bạn cso thể dùng ứng dụng dồng hồ để bắt đầu
                    một đồng hồ bấm giờ đêms xuôi, đặt một đồng hồ hen giờ, hoặc đặt báo
                    thức trên máy tính. Đối với Macbook, bạn cần phải tải về một ứng dụng
                    phù hợp.
                </p>
            </div>
        </div>
        
    )
}
export default Display