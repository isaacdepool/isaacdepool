import React from 'react'
import styled from 'styled-components';
import { AboutTable } from './components/AboutTable';

import handleViewport from 'react-in-viewport';

export const About = () => {
  const Block = (props) => {
    const { inViewport, forwardedRef } = props;
    const circle = inViewport ? 'circle' : 'Not in viewport';
    const circle_infinite = inViewport ? 'circle-infinte' : 'Not in viewport';
    const animate_backInLeft = inViewport ? 'animate__animated animate__backInLeft' : 'Not in viewport';
    const animate__bounce = inViewport ? 'animate__animated animate__bounce' : 'Not in viewport';
  
    return(
      <div  className='present' ref={forwardedRef}
        > 
            <>
              <h1 className='color-white font-size-primary text-center pt-2'>Skills</h1>
              <AboutTable
              circle={circle}
              circle_infinite={circle_infinite}
              />
            </>
      </div>
    )
  };
  
  const ViewportBlock = handleViewport(Block, /** options: {}, config: {} **/);
  return (
    <Content>
      <ViewportBlock 
      onEnterViewport={() => console.log('enter')} 
      onLeaveViewport={() => console.log('leave')} 
      />
        
    </Content>
  )
}

const Content = styled.div`
.present{
  padding-bottom: 100px;
  min-height: 100vh;
  place-items: center;
  display: grid;
  background-attachment: fixed;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='2000' height='1000' preserveAspectRatio='none' viewBox='0 0 2000 1000'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1013%26quot%3b)' fill='none'%3e%3crect width='2000' height='1000' x='0' y='0' fill='rgba(30%2c 31%2c 32%2c 1)'%3e%3c/rect%3e%3cpath d='M453.07 1194.53C692.87 1184.96 851.15 807.2 1324.55 791.94 1797.94 776.68 1962.23 457.89 2196.02 451.94' stroke='rgba(222%2c 2%2c 63%2c 0.5)' stroke-width='2'%3e%3c/path%3e%3cpath d='M309.93 1047.82C569.06 1025.09 695.25 517.5 1189.13 491.34 1683.01 465.18 1831.84 147.7 2068.33 141.34' stroke='rgba(222%2c 2%2c 63%2c 0.5)' stroke-width='2'%3e%3c/path%3e%3cpath d='M553.19 1088.93C848.49 980.89 907.62 109.07 1325.8 96.44 1743.98 83.81 1886.51 438.4 2098.41 446.44' stroke='rgba(222%2c 2%2c 63%2c 0.5)' stroke-width='2'%3e%3c/path%3e%3cpath d='M419.01 1033.06C638.28 980.72 711.13 401.98 1053.39 392.25 1395.65 382.52 1370.58 517.25 1687.77 517.25 2004.96 517.25 2160.51 392.84 2322.15 392.25' stroke='rgba(222%2c 2%2c 63%2c 0.5)' stroke-width='2'%3e%3c/path%3e%3cpath d='M792.52 1055.2C1042.66 1001.02 1155.19 347.28 1530.92 346.06 1906.66 344.84 2056.26 760.77 2269.33 776.06' stroke='rgba(222%2c 2%2c 63%2c 0.5)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1013'%3e%3crect width='2000' height='1000' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
 },
 
@media only screen and (max-width: 545px){
  
 
}
`
