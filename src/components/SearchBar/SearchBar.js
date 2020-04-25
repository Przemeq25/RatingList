import './SearchBar.css';
import {TextField} from "@material-ui/core";
import React from "react";

export const SearchBar =(props)=>{
    return(
        <div className='search_container'>
            <TextField  label ='Szukaj indeks lub grupę' variant='filled' onChange={props.onChange} defaultValue={props.value}/>
        </div>
    );
}
