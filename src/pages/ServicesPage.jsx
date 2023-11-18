import React from 'react';
import { useNavigate } from 'react-router-dom';

import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Header from "newComponents/headers/Header.jsx";
import Footer from "newComponents/footer/Footer.jsx";
import WhatCS from 'newComponents/Services/1_Hero.jsx';
import JourneyServices from 'newComponents/Services/2_Journey.jsx';
import StartJourneyHero from 'newComponents/Home/StartJourney.jsx';


export default function ServicesPage(props){
  const navigate = useNavigate();
  navigate(0);
  
  return (
    <AnimationRevealPage>
      <Header language = {props.language} />
      <WhatCS language = {props.language} />
      <JourneyServices language = {props.language} />
      
      <StartJourneyHero language = {props.language} />
      <Footer language = {props.language}/>
    </AnimationRevealPage>
  );
}
