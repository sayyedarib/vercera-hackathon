import React from 'react';
import Navbar from '../Navbar/Navbar';
import "./Header.css";
import {FaPaperPlane} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = ({title,desc}) => {
  return (
    <header className='header flex flex-center flex-column'>

        <div className='container'>
            <div className='header-content text-center flex flex-column'>
                <h1 className='text-uppercase header-title'>{title}</h1>
                <p className='text-lead'>{desc}</p>
                <div className="btn">
                <div>
                <Link to = "/donation" className='btn header-btn btn-blue'>
                    <FaPaperPlane /> <span>Donate</span>
                </Link>
                </div>
                <div>
                <Link to = "/registration/individual" className='btn header-btn btn-blue'>
                    <FaPaperPlane /> <span>Join Us</span>
                </Link>
                </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header