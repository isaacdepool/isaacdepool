import React, { useState } from 'react'
import { Projects } from './Projects'
import api from '../../api/api'
import { useEffect } from 'react'

export const ProjectsScreen = () => {


  const [data, setData] = useState(null);

  useEffect(() => {
    getData()
  }, [])

  const getData = () =>{
    console.log('hola');
    api.get('/berry/64').then((result) => {

      console.log('results', result.data);
      setData(result.data.firmness)
      
    }).catch((err) => {
      console.log(err);
    });
  }

  return (
    <>
        <Projects
        data={data}
        />
    </>
  )
}
