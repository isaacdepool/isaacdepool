import React from 'react'
import styled from 'styled-components'
import { ContactTable } from './components/ContactTable'

export const Contact = () => {
  return (
    <Content>
      <ContactTable/>
    </Content>
  )
}

const Content = styled.div`
  // min-height: 92vh;
  background-color: #000;
`
