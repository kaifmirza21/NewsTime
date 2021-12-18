import React from 'react'
import { useEffect } from 'react';

export default function Navbar() {

    const menuopen = () => {
        let item=document.getElementsByClassName('menu-items-box');
            if (item[0].style.display === "inline-flex") {
                item[0].style.display = "none";
            } else {
                item[0].style.display = "inline-flex";
            }        

        }
    
    return (
        <> 
        <header>
            <nav >
                <ul>
                    <div className='News-time'>NewsTime</div>
                    <li><a href="/home">Home</a> </li>
                    <li ><a href="/general">General</a></li>
                    <li ><a href="/science">Science</a></li>
                    <li><a href="/technology">Technology</a></li>
                    <li ><a href="/business">Business</a></li>
                    <li ><a href="/sports">Sports</a></li>
                    <li ><a href="/health">Health</a></li>
                    <li><a href="/entertainment">Entertainment</a></li>
                    <div className="hamburger-icon" onClick={menuopen}><img className='menu-img' src="icons8-menu-rounded-32.png"/>
                        <div className="menu-items-box" >
                            <a className="menu-item" href="/home">Home</a>
                            <a className="menu-item" href="/general">General</a>
                            <a className="menu-item" href="/science">Science</a>
                            <a className="menu-item" href="/technology">Technology</a>
                            <a className="menu-item" href="/business">Business</a>
                            <a className="menu-item" href="/sports">Sports</a>
                            <a className="menu-item" href="/health">Health</a>
                            <a className="menu-item" href="/entertainment">Entertainment</a>
                        </div>
                    </div>
                </ul>
            </nav>
        </header>       
        </>
    );
}
