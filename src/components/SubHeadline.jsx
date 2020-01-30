import React from 'react'

const SubHeadline = ({firstLetter, rest}) => {
    return (
        <h2 className="sub-headline">
          <span className="first-letter">{firstLetter}</span>{rest}
        </h2>
    )
}

export default SubHeadline
