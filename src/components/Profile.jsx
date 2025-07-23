import React from 'react';
import '../styles/profile.css'
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";


const Profile = (props) => {
  return (
    <div className='pp'>
        <div className='profile-pic'>
            <img src={props.img} alt="profile-pic"/>
        </div>
        <p className='name'>{props.name}</p>
        <p className='occup'>{props.occupation}</p>
        <p className='dis'>{props.dis}</p>
        <div className='icon-p'>
            <FaFacebook style={{color:"blue"}} />
            <FaGithub />
            <AiFillTwitterCircle />

        </div>
    </div>
  )
}

export default Profile