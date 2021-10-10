import React from 'react'
import './App.css';
import FormArterial from './pages/FormArterial';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../src/components/Layout';
import ArterialReport from './pages/ArterialReport';
import ArterialTable from './pages/ArterialTable';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
                {/* <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />*/}
                <Route exact path="/arterial-report:id" component={ArterialReport} /> 
                <Route exact path="/register-arterial-pressure" component={FormArterial} />
                 <Route exact path="/get-arterial-data/" component={ArterialTable} /> 
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App

