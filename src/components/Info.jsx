import React from 'react'
import '../styles/info.css'

const Info = (props) => {
  return (
    <div>
        <div className='info1'>
            <div>
                <div><props.icon className='icon-info'/></div>
            </div>
                <div>
                    <p>{props.contact}</p>
                    <p>{props.detail}</p>
                </div>
           
        </div>
    </div>
  )
}

export default Info