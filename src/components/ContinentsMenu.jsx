import React from 'react';
import { NavLink } from "react-router-dom";
import "../styles/ContinentMenu.style.css";

const ContinentsMenu = () => {
    return (
        <div className="ContinentsMenu-container">
            <nav>
                <ul>
                    <li>
                        <NavLink exact to="/continent/Africa" activeClassName="currentContinent">
                            Afr
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/continent/Americas" activeClassName="currentContinent">
                            Ame
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/continent/Asia" activeClassName="currentContinent">
                            Asi
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/continent/Europe" activeClassName="currentContinent">
                            Eur
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/continent/Oceania" activeClassName="currentContinent">
                            Oce
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export {ContinentsMenu};
