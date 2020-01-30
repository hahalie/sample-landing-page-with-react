import React, {useContext} from "react";
import FullWidthContent from '../components/FullWidthContent'
import "../assets/scss/PerfectBlend.scss";

import { TextContext } from '../contexts/textContext'

const PerfectBlend = () => {

  const { PerfectBlendText } = useContext(TextContext)

  return (
    <section className="perfect-blend between">
      <FullWidthContent info={PerfectBlendText}/>
    </section>
  );
};

export default PerfectBlend;
