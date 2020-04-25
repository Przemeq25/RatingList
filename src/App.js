import React from 'react';
import './App.css';
import {fetchData, fetchUserData} from "./api";
import {SearchBar} from "./components/SearchBar/SearchBar";

import {UserList} from "./components/UserList/UserList";



class App extends React.Component{
  constructor(props){
    super(props);
    this.state= {
        albumNumber:undefined,
        data:'',

    }
  }

   handleChange = (event) =>{
    const {albumNumber} = this.state;
    const {value} = event.target;
    this.setState({
      albumNumber:value
    })

  };

  async componentDidMount(){
    const data = await fetchData();
    this.setState({
        data:data
    })
  }
  render() {
      const{albumNumber,data} =this.state;
      const searchFilter = Object.values(data).filter(obj =>{
          if(!albumNumber){
              return data;
          }
          return obj.index.indexOf(albumNumber)!== -1 ;
      });
    return (
        <div className='container'>
          <SearchBar onChange = {this.handleChange} value ={albumNumber}/>
            <UserList data={searchFilter} albumNumber={albumNumber}/>
        </div>
    );
  }


}

export default App;
