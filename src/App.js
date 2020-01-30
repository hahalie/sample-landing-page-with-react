import React from 'react';
import CulinaryDelight from './layouts/CulinaryDelight'
import DiscoverOurMenu from './layouts/DiscoverOurMenu'
import DiscoverOurStory from './layouts/DiscoverOurStory'
import Footer from './layouts/Footer'
import Header from './layouts/Header'
import Hero from './layouts/Hero'
import PerfectBlend from './layouts/PerfectBlend'
import TastefulRecipes from './layouts/TastefulRecipes'

import TextContextProvider from './contexts/textContext'

import './assets/scss/Responsive.scss'

import './App.css';

function App() {


  return (
    <TextContextProvider>
      <div className="App">
      <Header />
      <Hero />
      <DiscoverOurStory />
      <TastefulRecipes />
      <DiscoverOurMenu />
      <PerfectBlend />
      <CulinaryDelight />
      <Footer />
    </div>
    </TextContextProvider>
    
  );
}

export default App;
