import React from "react";
import './UserList.css'
import {UserListItem} from "../UserListItem/UserListItem";

export const UserList =({data})=>{

    const userData = Object.values(data).map(item => (
        <UserListItem
            key={item.index}
            index = {item.index}
            mark={item.mark}
            group={item.group}
            lecturePoints={item.lecturePoints}
            homeworkPoints={item.homeworkPoints}
            presenceCounter={item.presenceCounter}
            absenceCounter={item.absenceCounter}
            allPoints={item.allPoints}
        />));
    return(
      <div className='list_container'>

          {userData}


      </div>
    );
}

