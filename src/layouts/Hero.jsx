import React, { useContext } from "react";
import SubHeadline from '../components/SubHeadline'
import Headline from '../components/Headline'
import HeadlineDescription from '../components/HeadlineDescription'

import "../assets/scss/Hero.scss";

import { TextContext } from '../contexts/textContext'

const Hero = () => {
  const { HeroText } = useContext(TextContext)
  const { firstLetter, subHeadline, headline, nextHeadline, ctaBtn} = HeroText

  return (
    <section className="hero" id="hero">
      <div className="container">
        <SubHeadline firstLetter={firstLetter} rest={subHeadline}/>
        <Headline text={headline}/>
        <HeadlineDescription text={nextHeadline} btn={ctaBtn}/>
      </div>
    </section>
  );
};

export default Hero;
