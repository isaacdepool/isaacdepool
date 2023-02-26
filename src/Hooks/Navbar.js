import React, { useState } from "react";
import {
  CContainer,
  CNavbarNav,
  CNavbar,
  CNavbarBrand,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CNavLink,
  CNavbarToggler,
  CCollapse,
} from "@coreui/react";
import styled from "styled-components";
import logo from '../assets/avatar.png'
import { useEffect } from "react";

export default function Navbar({
}) {
    const [visible, setVisible] = useState(false);

    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
      if(window.scrollY >= 80){
        setColorchange(true);
      }
      else{
        setColorchange(false);
      }
    };

    useEffect(() => {
      changeNavbarColor()
      // adding the event when scroll change Logo
      window.addEventListener("scroll", changeNavbarColor)
    })

    return (
            <div className="container-fluid h-100">
              <div className="row h-100">
                  <Aside className="col-12 p-0 fixed-top">
                    <Nav expand="md" className={`${colorChange&& 'colorChange'} shadow navbar-dark py-2 align-items-start px-md-5`}>
                      <CContainer fluid className="py-0 py-xl-2 px-0 px-lg-4">
                        <div className="d-flex align-items-center mb-0 mb-lg-0">
                          {/* <CNavbarBrand href="#" className="d-block pe-0 ps-lg-0 me-1 logo">
                            <img
                              src={logo}
                              alt="avatar"
                              height="100%"
                              width="100%"
                            />
                          </CNavbarBrand>    */}
                            <h3 className="m-2 logo">ISAAC DEPOOL</h3>
                        </div>

                      <div className="px-3 my-2 mb-lg-0">
                      <CNavbarToggler 
                        className="p-2 p-lg-0 shadow-none" 
                        onClick={() => setVisible(!visible)} 
                      />
                      </div>
                      <CCollapse className="navbar-collapse" visible={visible}>
                        <CNavbarNav className="my-0 ms-auto bg-nav-blue">
                              <CNavLink 
                                className={`px-3 px-lg-2 text-color-p nav-hover link-nav mx-0 mx-lg-4 cursor-pointer`} 
                                href={() => false}
                                onClick={() => {
                                  setVisible(false)
                                }}
                              >
                                Home
                              </CNavLink>
                              <CNavLink 
                                className={`px-3 px-lg-2 text-color-p nav-hover link-nav mx-0 mx-lg-4 cursor-pointer`} 
                                href={() => false}
                                onClick={() => {
                                  setVisible(false)
                                }}
                              >
                                About
                              </CNavLink>
                              <CNavLink 
                                className={`px-3 px-lg-2 text-color-p nav-hover link-nav mx-0 mx-lg-4 cursor-pointer`} 
                                href={() => false}
                                onClick={() => {
                                  setVisible(false)
                                }}
                              >
                                Projects
                              </CNavLink>
                              <CNavLink 
                                className={`px-3 px-lg-2 text-color-p nav-hover link-nav mx-0 mx-lg-4 cursor-pointer`} 
                                href={() => false}
                                onClick={() => {
                                  setVisible(false)
                                }}
                              >
                                Contact
                              </CNavLink>
                        </CNavbarNav>
                      </CCollapse>
                      </CContainer>    
                    </Nav>
                  </Aside>
              </div>
            </div>
    );
}

const Aside = styled.div`
  background-color: transparent;
  .text-color-p{
    font-size: var(--font-size);
    color: white !important;
    @media (min-width: 992px) {
      color: white !important;
    }
  }
  .dropdown-toggle::after {
    font-size: var(--font-size);
    color: rgb(255, 255, 255)!important;
    @media (min-width: 992px) {
      // color: var(--primary-color) !important;
    }
  }
  
  .option-selected{
    border-bottom: 3px solid #BEB083;
    @media (max-width: 991px) {
      color: white !important;
      background-color: #BEB083; 
      border-bottom: none;
    }
  }

  .home-color{
    background-color: #8E7E4B;
  }

  .nav-hover{
    :hover, :focus{
      border-bottom: 3px solid #BEB083;
      filter: drop-shadow(1px -3px 2px #DE023F);
      @media (max-width: 767px) {
        color: white;
        background-color: #BEB083; 
        border-bottom: none;
      }
    }
  }
  .text-color2{
    // color: var(--primary-color) !important;
    @media (max-width: 991px) {
      color: white !important;
    }
  }
  .colorChange{
    animation: changeColour .5s;
    background-color: var(--even-color);

    .nav-hover{
      :hover, :focus{
        filter: drop-shadow(1px -3px 2px #1E1F20);
        @media (max-width: 767px) {
          filter: unset;
        }
      }
    }
  }

  @keyframes changeColour {
    0%,
    15% {
  background-color: #2b000c;
    }
    16%,
    30% {
  background-color: #510017;
    }
    31%,
    45% {
  background-color: #860127;
    }
    46%,
    60% {
  background-color: #9e022e;
    }
    61%,
    75% {
  background-color: #bf0338;
    }
    76%,
    90% {
  background-color: #d4043f;
    }
    91%,
    100% {
  background-color: var(--even-color);
    }
  }
`
const Nav = styled(CNavbar)`
  z-index: 1030;
  font-size: var(--font-size);
  color:white;
  
  .link-nav{
    display:inline-flex;
    align-items: center;
  }
  .bg-nav-blue{
    @media (max-width: 991px) {
      // background-color: var(--primary-color); 
    }
  }

  .logo{
    filter: drop-shadow(1px -3px 2px #DE023F);
  }
`