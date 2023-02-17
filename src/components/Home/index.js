import React from 'react'
import styled from 'styled-components'
import { About } from '../About/About'
import { Contact } from '../Contact/Contact'
import { Projects } from '../Projects/Projects'
import { Home } from './Home'

export const HomeScreen = () => {
  return (
    <Container>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
    </Container>
  )
}

const Container = styled.div`
  margin: 60px auto;
  margin-bottom: 0;
`