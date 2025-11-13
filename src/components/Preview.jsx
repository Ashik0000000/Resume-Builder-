import React from 'react'
import { Divider,Button } from '@mui/material'

function Preview({resumeDetails}) {
  return (
    <div style={{margin:'70px'}} className='shadow p-5 w-100 rounded text-center'>
     <h3>{resumeDetails?.username}</h3>
     <h4>{resumeDetails?.jobTitle}</h4>
     <h6><span className="mx-2">{resumeDetails?.location}</span><span><span>|</span></span><span className="mx-2">{resumeDetails?.email}</span>|<span className="mx-2">{resumeDetails?.mobile}</span></h6>
     <p>
      <a href={resumeDetails?.github} target="_blank">GITHUB</a>|
      <a href={resumeDetails?.linkedin} target="_blank">LINKEDIN</a>|
      <a href={resumeDetails?.portfolio} target="_blank">PORTFOLIO</a>
     </p>
      <Divider sx={{fontSize:'25px'}}>Summary</Divider>
      <p style={{textAlign:'justify'}}>{resumeDetails?.summary}</p>
       <Divider sx={{fontSize:'25px'}}>Education</Divider>
       <h4 className='mt-2'>{resumeDetails?.course}</h4>
     <h6><span className="mx-2">{resumeDetails?.college}</span><span><span>|</span></span><span className="mx-2">{resumeDetails?.university}</span>|<span className="mx-2">{resumeDetails?.passoutYear}</span></h6>

     <Divider sx={{fontSize:'25px'}}>Professional Experience</Divider>
       <h4 className='mt-2'>{resumeDetails?.jobType}</h4>
     <h6><span className="mx-2">{resumeDetails?.company}</span><span><span>|</span></span><span className="mx-2">{resumeDetails?.clocation}</span>|<span className="mx-2">{resumeDetails?.duration}</span></h6>
     <Divider sx={{fontSize:'25px'}}>Skills</Divider>
      <div className="d-flex flex-wrap justify-content-between my-3">
        {
          resumeDetails.userSkills?.map((item,index)=>(
            <Button key={index} variant="contained" className="m-1">{item}</Button>
          ))
        }
      </div>
    </div>
     
  )
}

export default Preview