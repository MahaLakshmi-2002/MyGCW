import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import NavBar from './NavBar/NavBar';
import HomePage from './HomePage';
import Footer from './components/Footer';
import ClimateChangeFacts from './components/ClimateChangeFacts/ClimateChangeFacts';
import CleanTechnologies from './components/CleanTechnologies/CleanTechnologies';
import StartUpTrends from './components/StartUpTrends/StartUpTrends';
import NetZeroCarbonNeutral from './components/NetZeroCarbonNeutral/NetZeroCarbonNeutral';
import WhatTheFrontrunnersSay from './components/WhatTheFrontrunnersSay/WhatTheFrontrunnersSay';
import CostOfClimateChange from './components/CostOfClimateChange/CostOfClimateChange';
import SaveToHomePage from './components/SaveToHomePage/SaveToHomePage';
// import AudioWebpage from './components/AudioWebpage/AudioWebpage';
import VideoWebpage from './components/VideoWebpage/VideoWebpage';
import Login from './Login/Login';
import AboutUs from './components/AboutUs/AboutUs';
import Blog from './components/Blog/Blog';
import 'bootstrap/dist/css/bootstrap.min.css';
import ForStartUps from './components/ForStartups/ForStartUps';
import ForProfessional from './components/ForProfessionals/ForProfessional';
import ForInvestor from './components/ForInvestors/ForInvestor';
// import JoinTheTribe from './components/JoinTheTribe';
// import AngelInvestors from './RegistrationPages/AngelInvestors/AngelInvestors';
// import CleantechHub from './RegistrationPages/CleantechHub/CleantechHub';
// import CoachesAndConsultants from './RegistrationPages/CoachesAndConsultants/CoachesAndConsultants';
// import IndividualInvestors from './RegistrationPages/IndividualInvestors/IndividualInvestors';
// import Mentors from './RegistrationPages/Mentors/Mentors';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/video-webpage" component={VideoWebpage} />
          <Route path="/save-to-homepage" component={SaveToHomePage} />
          <Route path="/about" component={AboutUs} >
          
          

          {/* <Route path="/join-the-tribe" component={JoinTheTribe } />

          <Route path="/angelInvestors-regd" component= {AngelInvestors} />

          <Route path="/cleanTechHub-regd" component= {CleantechHub} />

          <Route path="/coachesAndConsultants-regd" component= {CoachesAndConsultants} />

          <Route path="/individualInvestors-regd" component= {IndividualInvestors} />

          <Route path="/mentors-regd" component= {Mentors} /> */}
          
          
            <Header />
            <AboutUs />
  
            <Footer />
          </Route>
          <Route path="/blog" component={Blog}>
          {/* <Header /> */}
            
          <Blog />
          <Footer />
          
          </Route>
          <Route>
            <Header />
            <Banner />
            <NavBar />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/climate-change-facts" component={ClimateChangeFacts} />
              <Route path="/clean-technologies" component={CleanTechnologies} />
              <Route path="/startup-trends" component={StartUpTrends} />
              <Route path="/net-zero-and-carbon-neutral" component={NetZeroCarbonNeutral} />
              <Route path="/what-the-frontrunners-say" component={WhatTheFrontrunnersSay} />
              <Route path="/cost-of-climate-change" component={CostOfClimateChange} /> 
              <Route path="/StartUps" component={ForStartUps} />
              <Route path="/Professionals" component={ForProfessional} />
              <Route path="/Investors" component={ForInvestor} />
             
             

            </Switch>
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router >
  );
};

export default App;
