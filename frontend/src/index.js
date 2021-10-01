import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyTabs from './components/tab.jsx'
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
         data : {}
        };
      }
    
      componentDidMount() {
        fetch("http://127.0.0.1:8000/api/userdetails",{mode:'cors'})
          .then(res => res.json())
          .then(
            (result) => {
                console.log(result);
              this.setState({
                isLoaded: true,
                data: result
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
    render() {
        const { error, isLoaded, data } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <MyTabs data= {data} key = "mytabs"/>
          );
        }
    }
}

// ========================================

ReactDOM.render(
    <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <Main />
  </ThemeProvider>,
    document.getElementById('root')
);
