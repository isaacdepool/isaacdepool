import React from 'react'
import styled from 'styled-components'
import { ProjectsTable } from './components/ProjectsTable'
import handleViewport from 'react-in-viewport';

export const Projects = ({data, handleSelectProject, noAnimation}) => {

  const Block = (props) => {
    const { inViewport, forwardedRef } = props;
    const animate__bounceIn = (inViewport && noAnimation) ? 'animate__animated animate__zoomIn' : 'Not in viewport';
  
    return(
      <div  className='present pb-5' ref={forwardedRef}> 
        <h1 id="projects" className='color-white font-size-primary text-center pt-2 mb-5'>Projects</h1>

        {
          (data.length > 0)
          ?
          <ProjectsTable
          animate__bounceIn={animate__bounceIn}
          handleSelectProject={handleSelectProject}
          data={data}
          />
          :
          <div></div>
        }
      </div>
    )
  };
  
  const ViewportBlock = handleViewport(Block, /** options: {}, config: {} **/);

  return (
    <Content>
      <ViewportBlock 
      // onEnterViewport={() => console.log('enter')} 
      // onLeaveViewport={() => console.log('leave')} 
      />
    </Content>
  )
}

const Content = styled.div`
  .present{
    place-items: center;
   },
`
