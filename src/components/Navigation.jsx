import React from 'react'
import {v4 as uuidv4} from 'uuid';


const Navigation = ({developers, currentItem, setCurrentItem}) => {

  

  return (
    <div className="btn-container">
        {developers.map((job, index)=>{
          const id = uuidv4();
            return (
                <button type='button' 
                key={id} 
                className={index === currentItem? 'job-btn active-btn':'job-btn '}
                onClick={()=>setCurrentItem(index)}
                >{job.company}</button>
            )
        })}
    </div>
  )
}

export default Navigation