import React, {useState} from "react";
import './UserListItem.css';
import CloseIcon from '@material-ui/icons/Close';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import {UserListItemDetails} from "../UserListItemDetails/UserListItemDetails";
export const UserListItem = ({group,index,mark,presenceCounter,absenceCounter,allPoints,homeworkPoints,lecturePoints}) =>{
    const[open,setOpen]=useState(false);
    const[showInfo, setShowInfo]=useState(false);


    return(
        <div className="item_container">
            {open&&
            <>
                <UserListItemDetails
                    key ={index}
                    index ={index}
                />
                <div className='btn_close'> <CloseIcon onClick={()=>{setOpen(!open)}}/></div>

            </>
            }
            <div className="item_header">
                <span className="item_group">{group}</span>
                <p className="item_index">{index}</p>
                <p className="item_mark">{mark}</p>
                <button className="btn_more" onClick={()=>{setOpen(!open)}}>Laboratoria</button>
            </div>
            <div className="item_list">
                <ul>
                    <li>{showInfo ? <span>Wykład/ konkurs : {lecturePoints}</span> : <span>Wszystkie punkty: {allPoints} </span>}
                        {lecturePoints > 0 && <span className='extra_span'>
                            <DoneOutlineIcon
                                onMouseEnter={()=>setShowInfo(true)}
                                onMouseLeave={()=>setShowInfo(false)}
                                color='inherit'/></span>}

                    </li>
                    <li>Zadania pkt: {homeworkPoints} </li>
                    <li>Obecności: {presenceCounter} </li>
                    <li>Nieobecności: {absenceCounter} </li>

                </ul>
            </div>
        </div>
    );
}

