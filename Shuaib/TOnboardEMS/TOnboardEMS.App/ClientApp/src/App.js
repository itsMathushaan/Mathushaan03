import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';


export default class App extends Component {
  static displayName = App.name;

  render() {
    return (

        <Routes>
            {AppRoutes.map((route, index) => {
            const { element, ...rest } = route;
            return <Route key={index} {...rest} element={element} />;
          })}
        </Routes>

    );
  }
}

/*
import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import TLogin from "./components/TLogin";
import ForgetPassword from "./components/ForgetPassword"


const App = () => {


    return (
        <BrowserRouter>
            <Route exact path="/" element={TLogin} />
            <Route exact path="/ForgetPassword" element={ForgetPassword} />
        </BrowserRouter>

    );
};


export default App;*/