import React from 'react'
import{BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home'
import Services from './Services'
import Navbar from '../Navbar'
import AboutUs from './AboutUs';
import Gallery from './Gallery';
import Cards from '../Cards';
import Contact from './Contact';
import Book from './Book';
import Footer from './Footer';
import Facebook from './Facebook';

const Routes = () => {
    return (
        <>
           <Router>
     <Navbar/>
     <Switch>
       <Route exact path='/'  component={Home}/>
       <Route exact path="/Service" component={Services}/>
       <Route exact path="/Aboutus" component={AboutUs}/>
       <Route exact path="/Gallery" component={Gallery}/>
       <Route exact path="/Card" component={Cards}/>
       <Route exact path="/Contact" component={Contact}/>
       <Route exact path="/book" component={Book}/> 
       <Route exact path="/Footer" component={Footer}/>
       <Route exact path="/facebook" component={Facebook}/>
       
     </Switch>
     <Footer/>
   </Router> 
        </>
    )
}

export default Routes
