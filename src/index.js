import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Notes} from './Notes';
import  Method2 from './List';
import App from './App';
import Helper from './Compinsidecomp';
import Evenlist from './Evenlist'
import Sumlist from './Sum'
import Demo from './Event'
import SumB from './SumB';
import Css_1 from './Css_1';
import Component1 from './Demo';
import Component4 from './Demo2';
import reportWebVitals from './reportWebVitals';
import Merge from './Merge';
import Calci from './Calci';
import Form from './Form';
import Login from './Login';
import { Provider } from 'react-redux';
import store from "./Store";
import Comp1 from "./Comp1";
import Use from './Use';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <Helper isGoal={true}/>
  <Notes num2= {10}/>
  <Evenlist lst={[1,2,3,4]}/>
  <Sumlist lst={[1,2,3,4]}/>
  
  <Method2/>
  <Demo/>
  <SumB/>
  <Css_1/>
  <Component1/>
  <Component4/>*/
  //<Merge/> 
   <Calci/>
   //<Login/>
   //<Provider store={store}><App/></Provider>
   //<Comp1/>
   //<Form/>
   //<Use/>
   }
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
