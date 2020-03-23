import React from "react";
import result from "./data.json";
import InputField from "./InputField";
import SearchButton from "./SearchButton";
import ShowResults from "./ShowResults";
import Grid from "@material-ui/core/Grid";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import SwitchStyle from "./SwitchStyle";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#007BA7"
    },
    secondary: {
      main: "#02e2f2"
    }
  },
  typography: {
    fontFamily: [
      "Nunito",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif"
    ].join(",")
  }
});

class App extends React.Component {
  state = {
    inputSphere: 0,
    inputCylinder: 0,
    inputAddition: 0,
    results: [],
    darkMode: false
  };
  findResults = (inputSphere, inputCylinder, inputAddition) => {
    const filtered = result.data.filter(val => {
      return (
        val.minSphere <= inputSphere &&
        inputSphere <= val.maxSphere &&
        val.minCylinder <= inputCylinder &&
        inputCylinder <= val.maxCylinder &&
        val.minAddition <= inputAddition &&
        inputAddition <= val.maxAddition
      );
    });
    this.setState({ results: filtered });
  };
  onSearch = () => {
    this.findResults(
      this.state.inputSphere,
      this.state.inputCylinder,
      this.state.inputAddition
    );
  };
  onChange = (key, value) => {
    this.setState({ [key]: value });
  };
  toggledarkMode = () => {
    this.setState({
      darkMode: !this.state.darkMode
    });
  };
  componentDidMount() {
    this.setState({ results: result.data });
  }
  render() {
    const {
      darkMode,
      inputSphere,
      inputCylinder,
      inputAddition,
      results
    } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <div className={darkMode ? "AppDark" : "AppLight"}>
          <Grid className="searchField">
            <InputField
              inputField={inputSphere}
              name="inputSphere"
              label="Sphere"
              onChange={this.onChange}
            />
            <InputField
              inputField={inputCylinder}
              name="inputCylinder"
              label="Cylinder"
              onChange={this.onChange}
            />
            <InputField
              inputField={inputAddition}
              name="inputAddition"
              label="Addition"
              onChange={this.onChange}
            />
            <SearchButton onSearch={this.onSearch} />
          </Grid>
          <Grid className={darkMode ? "serchResult" : "serchResultLight"}>
            <ShowResults results={results} />
          </Grid>
          <SwitchStyle
            darkMode={this.state.darkMode}
            toggledarkMode={this.toggledarkMode}
          />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
