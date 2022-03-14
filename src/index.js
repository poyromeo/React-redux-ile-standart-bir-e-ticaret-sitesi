import React from 'react';
import ReactDOM from 'react-dom';
import 'alertifyjs/build/css/alertify.css';
import App from './components/root/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
//Router-dom
import { BrowserRouter } from 'react-router-dom';

//REACT-REDUX CONNECT...
import { Provider } from "react-redux";
import ConfigureStore from "./redux/reducers/ConfigureStore";
const store = ConfigureStore();

ReactDOM.render(<BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>, document.getElementById('root'));

reportWebVitals();




