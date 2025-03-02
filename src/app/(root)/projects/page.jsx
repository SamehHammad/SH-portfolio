import React from 'react'
import ProjectsPage from './ProjectsPage'
import { metadata } from '../../../lib/projectsMeta';


export { metadata };

const page = () => {
  return (
    <div>
      <ProjectsPage/>
    </div>
  )
}

export default page