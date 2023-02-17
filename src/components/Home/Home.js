import React from 'react'
import '../../style.css';
import styled from 'styled-components';

import bgSVG from '../../assets/home/bg-home.svg';

export const Home = () => {
  return (
    <Content>
      <div className='present'
      // style={{ backgroundImage: `url(${bgSVG})`}}
      >   
        <h1 className='text-center fw-bold font-size-primary color-white'>HELLO, I'M ISAAC DEPOOL</h1>
        <h2 className='text-center my-5 font-size-secondary color-white opacity-50'>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product.</h2>

        <div className='text-center cursor-pointer'>
          <h3 className='color-white btn-general bg-red font-size-btn'>PROJECTS</h3>
        </div>
      </div>
    </Content>
  )
}

const Content = styled.div`
.present{
  height: 92vh;
  align-content: center;
  align-items: center;
  display: grid;
  padding: 0 23vw;
  background-color: #1E1F20;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='1' y2='0' gradientTransform='rotate(0,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%230FF'/%3E%3Cstop offset='1' stop-color='%23CF6'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(12,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23F00'/%3E%3Cstop offset='1' stop-color='%23FC0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23FFF' fill-opacity='0' stroke-miterlimit='10'%3E%3Cg stroke='url(%23a)' stroke-width='2'%3E%3Cpath transform='translate(-13.3 -7.6) rotate(-7.6 1409 581) scale(0.943)' d='M1409 581 1450.35 511 1490 581z'/%3E%3Ccircle stroke-width='4' transform='translate(-47.5 19) rotate(-3.8 800 450) scale(0.991)' cx='500' cy='100' r='40'/%3E%3Cpath transform='translate(-13.3 28.5) rotate(-47.5 401 736) scale(0.991)' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/%3E%3C/g%3E%3Cg stroke='url(%23b)' stroke-width='4'%3E%3Cpath transform='translate(114 11.4) rotate(-2.85 150 345) scale(1.019)' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/%3E%3Crect stroke-width='8' transform='translate(28.5 -57) rotate(-68.4 1089 759)' x='1039' y='709' width='100' height='100'/%3E%3Cpath transform='translate(-7.6 -7.6) rotate(-11.4 1400 132) scale(0.905)' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
 },
 
@media only screen and (max-width: 545px){
  
  .present{
    padding: 0 15rem;
   },
}
`