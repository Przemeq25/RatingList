import React from 'react';
import './App.css';
import {fetchData, fetchUserData} from "./api";
import {SearchBar} from "./components/SearchBar/SearchBar";

import {UserList} from "./components/UserList/UserList";



class App extends React.Component{
  constructor(props){
    super(props);
    this.state= {
        searchValue:undefined,
        data:'',

    }
  }

   handleChange = (event) =>{
    const {searchValue} = this.state;
    const {value} = event.target;
    this.setState({
      searchValue:value
    })

  };

  async componentDidMount(){
    const data = await fetchData();
    this.setState({
        data:data
    })
  }
  render() {
      const{searchValue,data} =this.state;
      const searchFilter = Object.values(data).filter(obj =>{
          if(!searchValue){
              return data;
          }

          return  obj.group.indexOf(searchValue.toUpperCase())!== -1 || obj.index.indexOf(searchValue)!== -1;
      });
    return (
        <div className='container'>
          <SearchBar onChange = {this.handleChange} value ={searchValue}/>
            <UserList data={searchFilter} searchValue={searchValue}/>
        </div>
    );
  }


}

export default App;
