import React from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa';
import {v4 as uuidv4} from 'uuid'; // use this library return with unique id.
                                 //use uuid library if their is no id in the array.

const Duties = ({duties}) => {
  return (
    <div> 
        {duties.map((duty)=>{
            const id = uuidv4(); // use this library return with unique id.
                                //use uuid library if their is no id in the array.
            return (
                <div key={id} className="job-desc">
                    <FaAngleDoubleRight className='job-icon'/>
                    <p>{duty}</p>
                </div>
        )})} 
    </div>
  )
}

export default Duties