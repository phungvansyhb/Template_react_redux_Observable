import React from 'react';
import 'antd/dist/antd.css'
import {BrowserRouter, Route , Switch} from "react-router-dom"
import Page404 from "./components/pages/page404";

import './assets/rulestyle.scss'
function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Switch>
                    {/*<Route path="/" component ={...}/>*/}
                    <Route path="*"><Page404/></Route>
              </Switch>
          </div>
      </BrowserRouter>
  )
}

export default App;
