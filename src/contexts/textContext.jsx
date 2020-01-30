import React, { createContext, useState } from 'react'

export const TextContext = createContext()

const TextContextProvider = props => {
    
    const [HeroText, setHeroText] = useState({
        firstLetter:'W',
      subHeadline:'elcome',
      headline:'The Rosa',
      nextHeadline:'Ready to be opened',
      ctaBtn:'Explore'
    })    
    
    const [DiscoverOurStoryText, setDiscoverOurStoryText] = useState({
        firstLetter: 'D',
      subHeadline: 'iscover',
      headline: 'Our Story',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
      unde, accusamus cumque iusto vero sint, incidunt ducimus
      asperiores nostrum suscipit dolor ab obcaecati voluptas
      deleniti. Cupiditate numquam nemo possimus molestias.`,
      ctaBtn: 'About us'
    })

    const [DiscoverOurMenuText, setDiscoverOurMenuText] = useState({
        firstLetter: 'D',
      subHeadline: 'iscover',
      headline: 'Menu',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
      unde, accusamus cumque iusto vero sint, incidunt ducimus
      asperiores nostrum suscipit dolor ab obcaecati voluptas
      deleniti. Cupiditate numquam nemo possimus molestias.`,
      ctaBtn: 'View the full menu'
    })

    const [TastefulRecipesText, setTastefulRecipesText] = useState({
        firstLetter:'T',
      subHeadline:'asteful',
      headline:'Recipes'
    })

    const [PerfectBlendText, setPerfectBlendText] = useState({
        firstLetter:'P',
      subHeadline:'erfect',
      headline:'Blend'
    })

    const [CulinaryDelightText, setCulinaryDelightText] = useState({
        firstLetter: 'C',
      subHeadline: 'ulinary',
      headline: 'Delight',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
      unde, accusamus cumque iusto vero sint, incidunt ducimus
      asperiores nostrum suscipit dolor ab obcaecati voluptas
      deleniti. Cupiditate numquam nemo possimus molestias.`,
      ctaBtn: 'Make a reservation'
    })
    return (
        <TextContext.Provider 
        value={{ 
          HeroText, 
          DiscoverOurStoryText, 
          DiscoverOurMenuText, 
          TastefulRecipesText, 
          PerfectBlendText, 
          CulinaryDelightText 
          }}>
            { props.children}
        </TextContext.Provider>
    )
}

export default TextContextProvider
