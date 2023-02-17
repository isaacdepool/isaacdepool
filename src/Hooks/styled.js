import {
    CInputGroupText,
    CFormInput,
    CButton,
    CFormCheck,
    CCard,
    CFormSelect,
    CFormTextarea,
  } from '@coreui/react'
import styled from 'styled-components'

export const CInput = styled(CFormInput)`
  background-color: #fff;
  border: 2px solid var(--secondary-color);
  color: var(--secondary-color);
  box-shadow: none !important;
  font-size: var(--font-size);
  border-radius: 0rem;
  :focus {   
    border: 1px solid var(--primary-color);
    color: var(--primary-color) !important;
  }
  ::placeholder {
    // color: var(--secondary-color);
    opacity: 1;
  }
  :-ms-input-placeholder, ::-ms-input-placeholder {
    color: var(--primary-color) ;
  }
`