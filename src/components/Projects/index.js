import React, { useState } from 'react'
import { Projects } from './Projects'
import { useEffect } from 'react'
import styled from 'styled-components'
import useStateRef from 'react-usestateref'
import { ModalProject } from './components/ModalProject'

export const ProjectsScreen = () => {

  const [projects, setProjects, projectsRef] = useStateRef([]);
  const [project, setProject, projectRef] = useStateRef([]);
  const [showModal, setShowModal, showModalRef] = useStateRef(false);

  useEffect(() => {
    getData()
  }, [])

  const getData = () =>{
    let data= [
          {
              "id": "1",
              "title": "Depool Cinema",
              "description": "Depool-Cinema is a system for purchasing movie tickets.",
              "metaData": '#Angular #CSS #bootstrap #TypeScript #NodeJs #MySql',
              "links": [
                {
                  "title":"Back-End",
                  "link":"https://github.com/isaacdepool/depoolcinema",
                },
                {
                  "title":"Front-End",
                  "link":"https://github.com/isaacdepool/cinemaApp",
                }
              ]
          },
          {
            "id": "2",
            "title": "Pocket University",
            "description": "Mobile app for student life management, such as taking notes, photos, adding schedules, finances, etc.",
            "metaData": '#Ionic #TypeScript #SqLite',
            "links": [
              {
                "title":"GitHub",
                "link":"https://github.com/isaacdepool/pocketUniversity",
              }
            ]
          },
          {
            "id": "3",
            "title": "GifExpertApp",
            "description": "Gifs search website.",
            "metaData": '#React #CSS #JS #ApisRest',
            "links": [
              {
                "title":"GitHub",
                "link":"https://github.com/isaacdepool/gifExpertApp",
              },
              {
                "title":"Web",
                "link":"https://isaacdepool.github.io/gifExpertApp/",
              }
            ]
          },
          {
            "id": "4",
            "title": "FRINK",
            "description": "App mobile to play and drink with friends.",
            "metaData": '#React Native #CSS #JS',
            "links": [
              {
                "title":"GitHub",
                "link":"https://github.com/isaacdepool/frink",
              },
            ]
          },
        ]

    setProjects(data);
  }
  
  const handleSelectProject = (project) =>{
    setProject(project);
    setShowModal(true);
  }

  return (
    <Container>
      {
        (projectRef.current)&&
          <ModalProject 
          data={projectRef.current}
          show={showModalRef.current}
          setShowModal={setShowModal}
          />
        }
          <Projects
          data={projectsRef.current}
          noAnimation={!showModalRef.current}
          handleSelectProject={handleSelectProject}
          />
    </Container>
  )
}

const Container = styled.div`
min-height: 100vh;
background-color: #1E1F20;
`
