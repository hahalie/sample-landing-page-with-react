import React, {useContext} from "react";
import FullWidthContent from '../components/FullWidthContent'
import "../assets/scss/TastefulRecipes.scss";

import { TextContext } from '../contexts/textContext'

const TastefulRecipes = () => {

  const { TastefulRecipesText } = useContext(TextContext)

  return (
    <section className="testeful-recipes between">
      <FullWidthContent info={TastefulRecipesText}/>
    </section>
  );
};

export default TastefulRecipes;
