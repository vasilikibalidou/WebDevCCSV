import React from 'react';
import result from './data.json'
import InputField from './InputField'
import SearchButton from './SearchButton'
import ShowResults from './ShowResults'
import Grid from '@material-ui/core/Grid'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import SwitchStyle from './SwitchStyle';

const theme = createMuiTheme({
  palette:{
    primary: {
      main:'#007BA7',
    },
    secondary:{
      main:'#02e2f2'
    }
  },
  typography: {
    fontFamily: [
      'Nunito',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  }
});

class App extends React.Component {
  state={
    inputSphere:0,
    results:[],
    darkMode: false,
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
  toggledarkMode=()=>{
    this.setState({
      darkMode: !this.state.darkMode
    })
  }
  render (){
    const { darkMode, inputSphere, results } = this.state;
    return(
      <ThemeProvider theme={theme}>
        <div className={darkMode?"AppDark":"AppLight"}>
          <Grid className='searchField'>
          <InputField
            inputField={inputSphere}
            name="inputSphere"
            onChange={this.onChange}
          />
          <SearchButton
            onSearch={this.onSearch}
          />
          </Grid>
          <Grid className={darkMode?'serchResult':'serchResultLight'}>
          <ShowResults
            results={results}
          />
          </Grid>
          <SwitchStyle
            darkMode={this.state.darkMode}
            toggledarkMode={this.toggledarkMode}
          />
        </div>
      </ThemeProvider>
    )
  }
}

export default App;

//make all results appear in the moment the page opens
//make the results not filter on every mouseclick but on every button click
//filter the results based on the input fields
//add 2 more inputFields, inputCylinder and inputAddition
