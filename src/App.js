import React from "react";
import logo from './LCO-logo-white.png';
import ReactDOM from 'react-dom';
import "./App.css";
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      list:[],
      newItem:""
    };
  }
  addToDo(todoValue){
    if(todoValue!=="")
    {
      const newItem={
        id:Date.now(),
        value:todoValue,
        isDone:false
      };
    const list1=[...this.state.list];
    list1.push(newItem);
    this.setState({
      list:list1,
      newItem:""
    });
  }
}
deleteItem(id){
  const list1=[...this.state.list];
  const updatedList=list1.filter(item => item.id!==id);
  this.setState({list:updatedList});

}
updateInput(value){
  this.setState({
    newItem:value
  });
}
  render (){
    return(
    
    <div className="App">
      <img src={logo} height="100" width="100" className="App-logo" />
      <h1 className="App-title">Intro to React by</h1>


      <h1><i>Shivam</i></h1>
        <p>add a topic...</p>
        <input type="text"
        size="25"
        placeholder="write to do"
        required 
        //value={this.state.newItem}
        onChange={e=> this.updateInput(e.target.value)}

        />
        &nbsp;&nbsp;&nbsp;
        <button className="btn"
        onClick={()=> this.addToDo(this.state.newItem)}
        //disabled={!this.state.newItem.length}
        >add to do </button>
        <div color="white"
        max-width="500px"
        className="container"
      
        >
        
          <ul >
            {
              this.state.list.map(item=>{
                return(
                  <li key={item.id}>
                  <input 
                  type="checkbox"
                  //checked={item.isDone}
                  onChange={()=>{}}
                  />
                  {item.value}
                  <button 
                  className="btn"
                  onClick={()=>{this.deleteItem(item.id)}}
                  >delete</button>
                  </li>
                );
              })
            }
           
          </ul>
          </div>
        
    </div>
  );
}
}


export default App;

