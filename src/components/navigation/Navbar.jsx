import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { Link as LinkS, animateScroll as scroll } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

const Navbar = ({ toggle, visibleMenu, alwaysSolid }) => {
    const [ solidNav, setSolidNav ] = useState(false);

    useEffect(() => {
        let isMounted = true;

        const changeNav = () => {
            // document.getElementById('home-container')
            if (window.scrollY >= 80) {
                //80px - navbar's height
                if (isMounted) setSolidNav(true);
            } else {
                if (isMounted) setSolidNav(false);
            }
        };

        window.addEventListener("scroll", changeNav);

        return () => {
            isMounted = false;
        };
    });

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <nav
            className="nav"
            style={{
                background : `${solidNav || alwaysSolid
                    ? "#fff"
                    : "transparent"}`,
            }}
        >
            <div className="nav-container">
                <LinkR
                    to="/"
                    className="logo"
                    onClick={toggleHome}
                    style={{
                        color: `${solidNav || alwaysSolid
                            ? "#303131"
                            : "#fff"}`,
                    }}
                >
                    DASTON
                </LinkR>
                <ul
                    className="nav-menu"
                    style={{
                        visibility: `${visibleMenu ? "visible" : "hidden"}`,
                    }}
                >
                    <li className="nav-item">
                        <LinkS
                            to="portfolio"
                            smooth={true}
                            duration={500}
                            // spy={true}
                            exact="true"
                            offset={-80}
                            className="nav-link"
                            style={{
                                color : `${solidNav || alwaysSolid
                                    ? "#303131"
                                    : "#fff"}`,
                            }}
                        >
                            Portfolio
                        </LinkS>
                    </li>
                    <li className="nav-item">
                        <LinkS
                            to="info"
                            smooth={true}
                            duration={500}
                            // spy={true}
                            exact="true"
                            offset={-80}
                            className="nav-link"
                            style={{
                                color : `${solidNav || alwaysSolid
                                    ? "#303131"
                                    : "#fff"}`,
                            }}
                        >
                            O mnie
                        </LinkS>
                    </li>
                    <li className="nav-item">
                        <LinkS
                            to="contact"
                            smooth={true}
                            duration={500}
                            // spy={true}
                            exact="true"
                            offset={-80}
                            className="nav-link"
                            style={{
                                color : `${solidNav || alwaysSolid
                                    ? "#303131"
                                    : "#fff"}`,
                            }}
                        >
                            Kontakt
                        </LinkS>
                    </li>
                </ul>
                <div
                    className="mobile-icon"
                    onClick={toggle}
                    style={{
                        color      : `${solidNav || alwaysSolid
                            ? "#303131"
                            : "#fff"}`,
                        visibility : `${visibleMenu ? "" : "hidden"}`,
                    }}
                >
                    <FaBars />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
