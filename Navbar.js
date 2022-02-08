import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    // const [text, settext] = useState("Text is here.");
    return (
        <> 
        <header>
            <nav>
                <ul>
                    <li className="News-time">NewsTime</li>
                    <li className="li-items">Home</li>
                    <li className="li-items">About us</li>
                    <li className="li-items">Contact</li>
                    <div className="Drop-down">
                        <li className="li-items">Category</li>
                        <div className="drop-content">
                            <li>Sports</li>
                            <li>Education</li>
                            <li>Business</li>
                            <li>Entertainment</li>
                        </div>
                    </div>
                </ul>
            </nav>
        </header>       
        </>
    )
}
