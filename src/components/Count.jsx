import React from 'react'

const Count = (props) => {
  return (
    <div>
        <h1 style={{fontSize:'35px'}}>{props.count}</h1>
        <p style={{color:"grey"}}>{props.para}</p>
    </div>
  )
}

export default Count