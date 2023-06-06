import React, { useState } from 'react';
import '../styles/Navbar.style';
import { NavLeftContainer,  NavHamburger,  NavRightContainer, NavExtendedContainer, NavLinkContainer, StyledImageLink, NavInnerContainer, NavbarContainer, NavLink, NavLinkExtended } from '../styles/Navbar.style';
import LogoImg from "../assets/logo.png";
import DiscordIcon from "../assets/discord.png";
function Navbar() {

    const [extendNavbar, setExtendNavbar] = useState(false)
    return (
        <NavbarContainer extendNavbar={extendNavbar}>
            <NavInnerContainer>
                <NavLeftContainer>
                    <NavLinkContainer>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/unity">Unity</NavLink>
                        <NavLink to="/about">About</NavLink>

                        <NavHamburger extendNavbar={extendNavbar}
                            onClick={() => {
                                setExtendNavbar((curr) => !curr);
                            }}
                        >
                            {extendNavbar
                                ?
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </>
                                :
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                </>
                            }


                        </NavHamburger>
                    </NavLinkContainer>
                </NavLeftContainer>

                <NavRightContainer>
                   

                    <StyledImageLink
                        href="https://discord.gg/TFeeEjN7gA"
                        src={DiscordIcon}
                        alt="Discord"
                        target="_blank"
                        transform="rotate(720deg)"
                        height='60px'
                        margin="auto"
                        
                        
                    />
                    <StyledImageLink
                        href="/"
                        src={LogoImg}
                        alt="Logo"
                        target="_self"
                        margin="auto"
                        height='60px'
                    />

                </NavRightContainer>

            </NavInnerContainer>
            {extendNavbar && (
                <NavExtendedContainer>
                    <NavLinkExtended to="/">Home</NavLinkExtended>
                    <NavLinkExtended to="/unity">Unity</NavLinkExtended>
                    <NavLinkExtended to="/about">About</NavLinkExtended>
                </NavExtendedContainer>)
            }
        </NavbarContainer>

    )

}

export default Navbar;
