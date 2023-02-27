import { CCard, CCardBody, CCol, CRow } from '@coreui/react'
import React from 'react'
import styled from 'styled-components'
import DepoolCinema from '../../../assets/avatar.png'

export const ProjectsTable = ({data}) => {
  return (
    <Content>
        <CRow className='d-flex justify-content-center mx-md-3 mx-3 p-box'>
            {
            data.map((e, i)=>(

                <CCol md={6} lg={3} key={i}>
                    <CCard className='project m-2 cursor-pointer'
                    style={{ 
                        backgroundImage: `url(${e.title== 'Joseph'&&DepoolCinema})`
                      }}
                    >
                        <CCardBody className='descrip'>
                            <h2 className='color-white'>{e.title}</h2>
                        </CCardBody>
                    </CCard>
                </CCol>
            ))
            }
        </CRow>
    </Content>
  )
}

const Content = styled.div`
margin-top: 100px;
.project{
    border: solid 1px;
    background-color: transparent;
    height: 300px;
    background-size: cover;
    position: relative;
}

.descrip{
    position: absolute;
    bottom: 0;
    width: 100%;
    background: rgb(61 27 27 / 36%);
    backdrop-filter: blur(3px);
    display: none;
}

.project:hover{
    filter: drop-shadow(2px -2px 2px #DE023F);
}

.project:hover .descrip{
    display: block;
}
`
