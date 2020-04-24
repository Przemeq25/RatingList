import './SearchBar.css';
import {TextField} from "@material-ui/core";
import React from "react";

export const SearchBar =(props)=>{
    return(
        <div className='search_container'>
            <TextField id = "outlined-basic" label ="Szukaj indeks" variant="filled" onChange={props.onChange} value={props.value}/>
        </div>
    );
}
