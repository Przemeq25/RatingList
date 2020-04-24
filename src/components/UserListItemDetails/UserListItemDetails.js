import React, {useEffect, useState} from "react";
import './UserListItemDetails.css'
import {fetchUserData} from "../../api";
export const UserListItemDetails =({index})=> {
    const[labs,setLabs] = useState({});

    useEffect(()=>{
        let isOpen = true;
        fetchUserData(index).then(lab => {
            if (isOpen) {
                setLabs(lab);
            }
        })
        return () => isOpen =false;

    });
    if(labs===null){
        return(<div className='item_detail'>
            <h1 className='loading'>Loading...</h1>
        </div>);
    }else{
        const laboratories = Object.values(labs).map(item=>(
            <div className='detail_row' key={item.dateOfLab}>
                <p className='detail_data'>{item.dateOfLab}</p>
                <p className='detail_points'> {item.points}</p>
            </div>
        ));

        return (
            <div className='item_detail'>{laboratories}</div>
            );
    }


}
