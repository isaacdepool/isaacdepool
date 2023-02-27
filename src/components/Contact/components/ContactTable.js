import { CCol, CRow } from '@coreui/react'
import React from 'react'
import styled from 'styled-components'
import coimllasImg from '../../../assets/contact/comillas.png';

export const ContactTable = () => {
  return (
    <Content>
        <div class="grid-container">
            <div class="item1 color-white text-xs-center position-relative">
              <div className='contact'>
                <h2 className='color-white font-size-40'>Disponible para nuevas oportunidades</h2>
                <h3 className='color-white mb-0 font-size-18'>Tienes proyectos en los que te seria de ayuda?</h3>
                <h3 className='color-white font-size-18'>Enviame un email o contactame a mi WhatsApp</h3>
              </div>
              <div
              style={{marginTop: 100}}>
                <h2 className='cursor-pointer filter'
                onClick={() => window.open('mailto:isaacdepool@gmail.com?subject=&body=%20goes%20here')}
                >isaacdepool@gmail.com</h2>
                <h2 className='cursor-pointer filter'
                onClick={() => window.open('https://wa.me/584127858188')}
                >WhatsApp</h2>
                <h2 className='cursor-pointer filter'
                onClick={() => window.open('https://www.linkedin.com/in/isaac-depool/')}
                >LinkedIn</h2>
                <h2 className='cursor-pointer filter'
                onClick={() => window.open('https://github.com/isaacdepool')}
                >Github</h2>
              </div>
            </div>
            <div class="item2 color-white position-relative ps-5">
              <div className='text-end'>
                  <img
                    className='img-comillas'
                    src={coimllasImg}
                    alt="React"
                  />
                  <img
                    className='img'
                    src={'https://pixlr.com/images/index/remove-bg.webp'}
                    alt="React"
                  />
              </div>
              <div className='mt-5'>
                <h3 className='font-size-14 opacity-75'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</h3>

                <h4 className='mb-0 font-size-15 mt-3'>- Isaac Depool</h4>
                <h4 className='mb-0 font-size-13 opacity-75'>CEO & Founder</h4>
              </div>
            </div>
            <div class="item3 color-white position-relative ps-5">
              <div className='text-end'>
                    <img
                      className='img-comillas'
                      src={coimllasImg}
                      alt="React"
                    />
                    <img
                      className='img'
                      src={'https://pixlr.com/images/index/remove-bg.webp'}
                      alt="React"
                    />
                </div>
                <div className='mt-5 '>
                  <h3 className='font-size-14 opacity-75'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</h3>

                  <h4 className='mb-0 font-size-15 mt-3'>- Isaac Depool</h4>
                  <h4 className='mb-0 font-size-13 opacity-75'>CEO & Founder</h4>
                </div>
            </div>
        </div>
    </Content>
  )
}

const Content = styled.div`

.contact{
  padding-right: 100px;
}

.filter:hover{
  filter: drop-shadow(1px -3px 2px #DE023F);
}

.grid-container {
    margin: 0 150px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

.grid-container > div{
    padding: 40px 20px;
}

.grid-container .item1{
  grid-row-start: 1;
  grid-row-end: 3;
  background-color: #000;
}

.grid-container .item2{
  background-color: #0096c7;
  grid-row-start: 1;
  grid-row-end: 3;
}

.grid-container .item3{
  background-color: #ef233c;
  grid-row-start: 1;
  grid-row-end: 3;
}

.img{
  height: 80px;
  width: 80px;
  border: solid 3px;
  border-radius: 50%;
}

.img-comillas{
  position: absolute;
  left: 25rem;
  top: 35rem;
  opacity: 0.65;
  zoom: 0.1;
  rotate: 180deg;
}

@media screen and (max-width: 1400px){

  .grid-container {
    margin: 0;
  }
}

@media screen and (max-width: 1200px){
  .grid-container {
    grid-template-columns: 1fr 1fr;
}
.grid-container .item2{
  grid-row-start: unset;
  grid-row-end: unset;
}

.grid-container .item3{
  grid-row-start: unset;
  grid-row-end: unset;
}
}

@media screen and (max-width: 766px){
  .grid-container {
    grid-template-columns: 1fr;
  }
  .grid-container .item1{
    grid-row: 3/3;
    grid-column: 1;
  }

  .text-xs-center{
    text-align: center;
  }

  .contact{
    padding-right: 0;
  }

}

`