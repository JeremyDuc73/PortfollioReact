import 'bootstrap/dist/css/bootstrap.min.css';
import Accueil from './Accueil';
import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Routes, useParams} from 'react-router-dom';
import './App.css';
import Contact from './Contact';
import ListeProjets from './Listeprojets';
import Pageprojet from './Pageprojet';
import Projet from './components/Projet';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {projets:Projet}
  }
    render() {
      const Wrapper = (props) => {
        const params = useParams();
        return (
          <Pageprojet
            projets={this.state.projets}
            updateFlight={this.updateFlight}
            {...{ ...props, match: { params } }}
          />
        );
      };
      return (  
        <Router>
          <Routes>
            <Route exact path='/' element={<Accueil/> } />
            <Route exact path='/Contact' element={<Contact/>}/>
            <Route exact path='/ListeProjets' element={<ListeProjets/>}/>
            <Route exact path='/Projet/:id' element={<Wrapper/>}/>
          </Routes>
        </Router>
      );
    }
  }
  export default App;