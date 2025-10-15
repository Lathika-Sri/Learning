//react - unidirectional (signal way)
//for boiler code - rafce
//react components : 2 types (class,functional) for now modern technology uses functional components
import React from 'react'

const First = ({name,department,skills,projectsdone}) => {
  return ( //inside return we can only use single fragments < /> not as mutliple fragments <></>
    <div>
        <h1>I'm {name} from {department} department</h1>
        <ol>
            <h2>skills</h2>
            {skills.map((skill,id)=>(           //passing parameter and maping each skill sequentially
                <li key = {id}>{skill}</li>
            ))}
            
        </ol>
        <ol>
            <h2>projectsdone</h2>
            {projectsdone.map((projectsdone,id)=>(           //passing parameter and maping each skill sequentially
                <li key = {id}>{projectsdone}</li>
            ))}
            
        </ol>
    </div>
  )
}

export default First;