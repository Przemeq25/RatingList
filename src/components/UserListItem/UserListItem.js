import React from "react";
import './UserListItem.css'
export const UserListItem = ({group,index,mark,presenceCounter,absenceCounter,allPoints,homeworkPoints,lecturePoints}) =>{

    return(
        <div className="item_container">
            <div className="item_header">
                <span className="item_group">{group}</span>
                <p className="item_index">{index}</p>
                <p className="item_mark">{mark}</p>
                <button className="btn_more">Laboratoria</button>
            </div>

            <div className="item_list">
                <ul>
                    <li><span>{allPoints} </span>pkt </li>
                    <li>Obecności: <span>{presenceCounter}</span> </li>
                    <li>Nieobecności: <span>{absenceCounter}</span> </li>

                </ul>
            </div>
        </div>
    );
}

