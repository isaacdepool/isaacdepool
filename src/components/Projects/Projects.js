import React from 'react'
import styled from 'styled-components'

export const Projects = ({data}) => {
  return (
    <Content>
        <div id="projects">Projects</div>
        <div>{data?.name}</div>
    </Content>
  )
}

const Content = styled.div`
  min-height: 100vh;
background-color: #1E1F20
`
