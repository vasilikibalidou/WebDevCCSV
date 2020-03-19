import React from 'react';
import './App.css';
import result from './data.json'
import InputField from './InputField'
import SearchButton from './SearchButton'
import ShowResults from './ShowResults'

class App extends React.Component {
  state={
    inputSphere:0,
    results:[]
  }
  componentDidMount=()=>{
    this.setState({results:result.data})
    console.log(result)
  }
  filterResults=(inputSphere)=>{
    //filter here
    this.setState({results:result})
  }
  onSearch=()=>{
    //make the button trigger the filter function
    console.log("to be done")
  }
  onChange=(key,value)=>{
    this.setState({[key]:value})
  }
  render (){
    return(
      <div className="App">
        <InputField
          inputField={this.state.inputSphere}
          name="inputSphere"
          onChange={this.onChange}
        />
        <SearchButton
          onSearch={this.onSearch}
        />
        <ShowResults
          results={this.state.results}
        />
      </div>
    )
  }
}

export default App;

//make all results appear in the moment the page opens
//make the results not filter on every mouseclick but on every button click
//filter the results based on the input fields
//add 2 more inputFields, inputCylinder and inputAddition
