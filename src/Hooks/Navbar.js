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

export default function Navbar({
}) {
    const [visible, setVisible] = useState(false);

    return (
            <div className="container-fluid h-100">
              <div className="row h-100">
                  <Aside className="col-12 p-0 navbar-light fixed-top">
                    <Nav expand="md" className="shadow py-3 align-items-start px-md-5">
                      <CContainer fluid className="py-0 py-xl-2 px-0 px-lg-4">
                        <div className="d-flex align-items-center mb-0 mb-lg-0">
                          <CNavbarBrand href="#" className="d-block pe-0 ps-4 ps-lg-0">
                            <img
                              src={''}
                              alt="logo"
                              height="17px"
                            />
                          </CNavbarBrand>   
                            <h5 className="mt-2">ISAAC DEPOOL</h5>
                        </div>

                      <div className="pe-3 ps-3 mb-3 mb-lg-0">
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
  background-color: #f1faee;
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
`
const Nav = styled(CNavbar)`
  background-color: var(--even-color);
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
`