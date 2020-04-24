import React, {useState} from "react";
import './UserListItem.css';
import CloseIcon from '@material-ui/icons/Close';
import {UserListItemDetails} from "../UserListItemDetails/UserListItemDetails";
export const UserListItem = ({group,index,mark,presenceCounter,absenceCounter,allPoints,homeworkPoints,lecturePoints}) =>{
    const[open,setOpen]=useState(false);



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
                    <li>Wszystkie punkty: <span>{allPoints} </span>
                        {lecturePoints>0 && <span className='lecture_points'onClick={()=>{setOpen(!open)}}>OK</span>} </li>
                    <li>Zadania pkt: <span>{homeworkPoints}</span> </li>
                    <li>Obecności: <span>{presenceCounter}</span> </li>
                    <li>Nieobecności: <span>{absenceCounter}</span> </li>

                </ul>
            </div>
        </div>
    );
}

