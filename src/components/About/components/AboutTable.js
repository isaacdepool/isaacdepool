import React from 'react'
import { CCol, CRow } from '@coreui/react';
import styled from 'styled-components'

import reactIcon from '../../../assets/about/React-icon.svg'
import moniIcon from '../../../assets/about/computer-tv-svgrepo-com.svg'
import reactNativeIcon from '../../../assets/about/react-native.svg'

export const AboutTable = () => {
  return (
    <Content>
        <CRow className='d-flex justify-content-center mx-md-3 mx-3 p-box'>
            <CCol xs={12} md={6} lg={4} className="p-0">
                <div className='box'>
                    <div className='d-flex align-items-center'>
                        <img
                            className='me-3 mt-0 d-flex'
                            src={reactNativeIcon}
                            alt="React"
                            height="50px"
                            width="50px"
                        />
                        <div>
                            <h2 className='color-white font-size-22 d-flex align-items-center mb-0'>Mobile Dev</h2>
                            <h2 className='color-white font-size-22 d-flex align-items-center'>React Native</h2>
                        </div>
                    </div>
                    <div className=''>
                        <div className='content-det'>
                            <div className='color-white font-size-12 det'>Experiencia desarrollando aplicaciones hibridas multiplataformas usando React Native con Expo.</div>
                        </div>
                    </div>
                </div>
            </CCol>
            <CCol xs={12} md={6} lg={4} className="p-0">
                <div className='box'>
                    <div className='d-flex align-items-center'>
                        <img
                            className='me-3 mt-0 d-flex'
                            src={reactIcon}
                            alt="React"
                            height="50px"
                            width="50px"
                        />
                        <div>
                            <h2 className='color-white font-size-22 d-flex align-items-center mb-0'>Frontend Dev</h2>
                            <h2 className='color-white font-size-22 d-flex align-items-center'>React</h2>
                        </div>
                    </div>
                    <div className=''>
                        <div className='content-det'>
                            <div className='color-white font-size-12 det'>Amante del desarrollo UI/UX. Experiencia en el desarrollo con HTML, CSS, JS y React como libreria de apoyo.</div>
                        </div>
                    </div>
                </div>
            </CCol>
            <CCol xs={12} md={6} lg={4} className="p-0">
                <div className='box'>
                    <div className='d-flex align-items-center'>
                        <img
                            className='me-3 mt-0 d-flex'
                            src={moniIcon}
                            alt="React"
                            height="50px"
                            width="50px"
                        />
                        <div>
                            <h2 className='color-white font-size-22 d-flex align-items-center mb-0'>Conocimientos</h2>
                            <h2 className='color-white font-size-22 d-flex align-items-center'>Anadidos</h2>
                        </div>
                    </div>
                    <div className=''>
                        <div className='content-det'>
                            <div className='color-white font-size-12 det'>Conocimientos en el desarrollo web y movil con Typescript, frameworks como Angular, Ionic, bootstrap y en el area de backend con nodeJs y manejo de base de datos Mysql.</div>
                        </div>
                    </div>
                </div>
            </CCol>

            <CCol xs={12} md={6} lg={4} className='d-none d-md-flex d-lg-none p-0'>
                <div className='p-5 w-100 ph'>
                    <h2 className='font-size-secondary color-white font-size-40'>“First, solve the problem. Then, write the code.”</h2>
                    <h3 className='font-size-secondary color-white font-size-16'
                    style={{position: 'absolute', bottom: 50, opacity: 0.5}}>- John Johnson</h3>
                </div>
            </CCol>
        </CRow>
    </Content>
  )
}

const Content = styled.div`

 .box{
    border: solid 1px #fff;
    min-height: 310px;
    padding: 45px 20px;
    margin: 10px;
 }

 .content-det{
    padding-left: 40px;
    position: relative;
 }

 .content-det::after{
    opacity: 0.3;
    content: '';
    width: 0;
    height: 66%;
    position: absolute;
    background-color: white;
    border: 0.1px solid white;
    bottom: 18%;
    left: 3vw;
 }

 .det::before{
    content: "<h3>";
    margin-bottom: 20px;
    opacity: 0.3;
    color: white;
    display: block;
    margin-left: -35px;
    font-weight: normal;
    font-size: 14px;
 }

 .det::after{
    content: "</h3>";
    margin-top: 20px;
    opacity: 0.3;
    color: white;
    display: block;
    margin-left: -35px;
    font-weight: normal;
    font-size: 14px;
 }

 .ph{
    padding-left: 40px;
    position: relative;
 }

 .ph::after{
    content: '';
    width: 0;
    height: 80%;
    position: absolute;
    background-color: #e63946;
    border: 3px solid #e63946;
    bottom: 11%;
    left: 4%;
 }

@media only screen and (min-width: 630px){

    .box{
        min-height: 340px;
     }
 
} 

@media only screen and (min-width: 993px){

    .box{
        min-height: 420px;
     }

     .content-det::after{
        left: 2vw;
     }
 
} 

@media only screen and (max-width: 767px){

    .box{
        min-height: unset;
     }

     .content-det::after{
        left: 4vw;
     }
 
}

@media only screen and (min-width: 1400px){
  
    .p-box{
        margin: 0 12vw !important;
    },

    .box{
        min-height: 400px;
     }

     .content-det::after{
        left: 1.3vw;
     }
 
} 

@media only screen and (min-width: 1590px){

    .box{
        min-height: 350px;
     }
 
} 

`
