import React from 'react'
import styled from 'styled-components'
import { ProjectsTable } from './components/ProjectsTable'

export const Projects = ({data}) => {
  console.log('hola',data);
  return (
    <Content>
      <div  className='present pb-5'> 
        <h1 id="projects" className='color-white font-size-primary text-center pt-2 mb-5'>Projects</h1>

        {
          (data.length > 0)
          ?
          <ProjectsTable
          data={data}
          />
          :
          <div></div>
        }
      </div>
    </Content>
  )
}

const Content = styled.div`
  .present{
    place-items: center;
   },
`
