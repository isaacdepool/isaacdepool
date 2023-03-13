import { CCol, CModal, CRow } from '@coreui/react'
import React from 'react'
import styled from 'styled-components'

// ICONS 
import clipIcon from '../../../assets/projects/paperclip.svg'
import closeIcon from '../../../assets/projects/Icon close.svg'

// imgs 
import DepoolCinema from '../../../assets/projects/depool-cinema.PNG'
import Pocket from '../../../assets/projects/Pocket.jpg'
import Gif from '../../../assets/projects/Gif.PNG'
import Frink from '../../../assets/projects/Frink.jpg'

export const ModalProject = ({data, show, setShowModal}) => {
  return (
    <>
        <Modal
        alignment='center' 
        size={'lg'}
        visible={show}
        // onClose={onClose}
        onDismiss={true}
        backDrop={true}
        >
            <CRow>
                <CCol xs={6} className='pe-0'>
                    <div className='box'
                    style={{ 
                        backgroundImage: `url(${data.id== 1&&DepoolCinema || data.id== 2&&Pocket || data.id== 3&&Gif || data.id== 4&&Frink})`
                      }}>
                    </div>

                </CCol>
                <CCol xs={6} className='ps-0'>
                    <div className='content'>
                        <div className='mx-3 py-2'>
                            <div className='d-flex justify-content-end my-2 cursor-pointer'
                            onClick={() => setShowModal(false)}
                            >
                                <img
                                src={closeIcon}
                                width={20}
                                height={20}
                                />
                            </div>
                            <h2 className='font-size-20'>{data.title}</h2>
                            <hr/>
                            <h3 className='font-size-14 mb-2'>{data.description}</h3>
                            <h4 className='font-size-14 color-red'>{data.metaData}</h4>
                        </div>


                        <div className='box-link ps-3 d-flex flex-nowrap pb-2'>
                            {
                                data?.links?.map((item,i) =>(

                                    <div className='d-flex box-link-item me-1 px-2 pt-1 my-1 cursor-pointer'
                                    onClick={() => window.open(item.link)}
                                    key={i}>
                                        <img 
                                        src={clipIcon}
                                        width={15}
                                        height={15}
                                        className='mt-1 me-2'
                                        />
                                        <h4 className='color-white font-size-14'>{item.title}</h4>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </CCol>
            </CRow>
        </Modal>
    </>
  )
}

const Modal = styled(CModal)`

    .box{
        width: 100%;
        height: 100%;
        background-color: #fff;
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: center;
    };

    .box-link{
        position: absolute;
        bottom: 0;
        width: 100%;
        // background: rgb(255 24 24 / 50%);
        backdrop-filter: blur(3px);
        border-bottom-right-radius: 5px;
    };

    .box-link-item:hover{
        background: rgb(69 123 157);
    };

    .content{
        position: relative;
        height: 100%;
        margin-bottom: 100px
    };

    .box-link-item{
        background-color: #457b9d;
        background: rgb(69 123 157 / 70%);
        backdrop-filter: blur(3px);
        border-radius: 10px;
    }
`
