import React from 'react'
import styled from 'styled-components'
import { AboutScreen } from '../About'
import { ContactScreen } from '../Contact'
import { ProjectsScreen } from '../Projects'
import { Home } from './Home'

export const HomeScreen = () => {
  return (
    <Container>
      <Home/>
      <AboutScreen/>
      <ProjectsScreen/>
      <ContactScreen/>
    </Container>
  )
}

const Container = styled.div`
  margin: 0px auto;
  margin-bottom: 0;
`