import { CCol, CRow } from '@coreui/react'
import React from 'react'
import styled from 'styled-components'
import coimllasImg from '../../../assets/contact/comillas.png';
import Arturo from '../../../assets/contact/arturo.jfif';
import Daniel from '../../../assets/contact/daniel.jfif';

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
            <div class="item2 color-white ps-5">
              <div className='text-end d-flex justify-content-between'>
                  <img
                    className='img-comillas'
                    src={coimllasImg}
                    alt="React"
                  />
                  <img
                    className='img'
                    src={Arturo}
                    alt="Arturo"
                  />
              </div>
              <div className='mt-5'>
                <h3 className='font-size-14 opacity-75'>Tuve la oportunidad de ser el capacitador de Isaac cuando entro a SysModelers y trabajar junto a el y puedo decir que es una persona proactiva y apasionada por el desarrollo móvil, es un excelente programador que se enfocado en solucionar los problemas de la manera mas optima.</h3>

                <h4 className='mb-0 font-size-15 mt-3 cursor-pointer letter'
                onClick={() => window.open('https://www.linkedin.com/in/arturo-smr/')}
                >- ING. Arturo Miranda</h4>
                <h4 className='mb-0 font-size-13 opacity-75'>Senior Frontend Developer.</h4>
              </div>
            </div>
            <div class="item3 color-white position-relative ps-5">
              <div className='text-end d-flex justify-content-between'>
                    <img
                      className='img-comillas'
                      src={coimllasImg}
                      alt="React"
                    />
                    <img
                      className='img'
                      src={Daniel}
                      alt="React"
                    />
                </div>
                <div className='mt-5 '>
                  <h3 className='font-size-14 opacity-75'>Isaac y yo tuvimos la oportunidad de trabajar juntos en Sysmodelers en donde fui su jefe. Puedo confirmar que es un excelente programador amante al desarrollo móvil y web que le apasiona tomar retos al momento de desarrollar o aprender cosas nuevas. Es una persona proactiva, colaborativa y responsable.</h3>

                  <h4 className='mb-0 font-size-15 mt-3 letter cursor-pointer' onClick={() => window.open('https://www.linkedin.com/in/daniel-quintero-197741201/')}>- Daniel Quintero</h4>
                  <h4 className='mb-0 font-size-13 opacity-75'>Senior Frontend Developer - Ex-coordinator.</h4>
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

.letter:hover{
  color:#333
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
  height: 35rem;
  width: 40rem;
  opacity: 0.65;
  zoom: 0.1;
  rotate: 180deg;
}

.item2, .item3{
  display: grid;
  align-content: center;
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