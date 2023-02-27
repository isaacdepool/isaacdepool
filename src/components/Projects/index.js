import React, { useState } from 'react'
import { Projects } from './Projects'
import { useEffect } from 'react'
import styled from 'styled-components'
import useStateRef from 'react-usestateref'

export const ProjectsScreen = () => {

  const [projects, setProjects, projectsRef] = useStateRef([]);

  useEffect(() => {
    getData()
  }, [])

  const getData = () =>{
    let data= [
          {
              "id": "1",
              "title": "Joseph",
              "description": "20",
              "img": 'avatar.png'
          },
        ]

    setProjects(data);
  }

  return (
    <Container>
        <Projects
        data={projectsRef.current}
        />
    </Container>
  )
}

const Container = styled.div`
min-height: 100vh;
background-color: #1E1F20;
`
