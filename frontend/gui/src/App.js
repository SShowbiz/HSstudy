import React, {Component} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'antd/dist/antd.css'; // importing ant design
import CustomLayout from './containers/Layout';
import BaseRouter from './routes';


class App extends Component {
  render(){
    return (
      <div className = "App">
        <Router>
          <CustomLayout>
            <BaseRouter />
          </CustomLayout>
        </Router>
      </div>
    );
  }
}

export default App;
