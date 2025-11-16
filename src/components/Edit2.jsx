import React,{useState,useRef} from 'react'
import { MdEditSquare } from "react-icons/md";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { IoClose } from "react-icons/io5";
import { updateResumeAPI } from '../services/allAPI';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  maxHeight:'80vh',
  overflowY:'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Edit2({resumeDetails,setResumeDetails}) {
    const [open, setOpen] = React.useState(false);
     const skillRef = useRef()

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

     const addSkill = (skill) => {
    if (!skill.trim()) return;
    if (resumeDetails.userSkills.includes(skill)) {
      alert("The given skill already added, please add another!!!");
    } else {
      setResumeDetails({ ...resumeDetails, userSkills: [...resumeDetails.userSkills, skill] });
      skillRef.current.value = "";
    }
  };

  const removeSkill = (skill) => {
    setResumeDetails({
      ...resumeDetails,
      userSkills: resumeDetails.userSkills.filter(item => item !== skill)
    });
  };

    const handleResumeUpdate = async()=>{
      const{id,username,jobTitle,location} = resumeDetails
      if(!username && !jobTitle && !location){
        alert("please fill the form completely...")
      }
      else{
        //api
        try{
            const result = await updateResumeAPI(id,resumeDetails)
            console.log(result);
            if(result.status==200){
              alert("resume added successfully")
              handleClose()
            }
            console.log()
        }catch(err){
          console.log(err)
        }
      }
    }

  return (
    

    <div>
         <button onClick={handleOpen}className="btn fs-4 text-warning"><MdEditSquare/> </button>
          <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Resume Details
          </Typography>
          <Box id="modal-modal-description" sx={{ mt: 2 }}>
            {/* //personal data */}
            <div>
                        <h3>Personal Details</h3>
                        <div className="row p-3">
                          <TextField value={resumeDetails.username} onChange={e => setResumeDetails({ ...resumeDetails, username: e.target.value })} label="Full Name" variant="standard" />
                          <TextField value={resumeDetails.jobTitle} onChange={e => setResumeDetails({ ...resumeDetails, jobTitle: e.target.value })} label="Job Title" variant="standard" />
                          <TextField value={resumeDetails.location} onChange={e => setResumeDetails({ ...resumeDetails, location: e.target.value })} label="Location" variant="standard" />
                        </div>
                      </div>
                      {/* contact details */}
                       <div className="row">
            <h3>Contact Details</h3>
            <TextField value={resumeDetails.email} onChange={e => setResumeDetails({ ...resumeDetails, email: e.target.value })} label="Email" variant="standard" />
            <TextField value={resumeDetails.mobile} onChange={e => setResumeDetails({ ...resumeDetails, mobile: e.target.value })} label="Mobile number" variant="standard" />
            <TextField value={resumeDetails.github} onChange={e => setResumeDetails({ ...resumeDetails, github: e.target.value })} label="Github Profile link" variant="standard" />
            <TextField value={resumeDetails.linkedin} onChange={e => setResumeDetails({ ...resumeDetails, linkedin: e.target.value })} label="LinkedIn Profile Link" variant="standard" />
            <TextField value={resumeDetails.portfolio} onChange={e => setResumeDetails({ ...resumeDetails, portfolio: e.target.value })} label="Portfolio Link" variant="standard" />
          </div>
          {/* education details */}
           <div className="row">
            <h3>Education Details</h3>
            <TextField value={resumeDetails.course} onChange={e => setResumeDetails({ ...resumeDetails, course: e.target.value })} label="Course name" variant="standard" />
            <TextField value={resumeDetails.college} onChange={e => setResumeDetails({ ...resumeDetails, college: e.target.value })} label="College name" variant="standard" />
            <TextField value={resumeDetails.university} onChange={e => setResumeDetails({ ...resumeDetails, university: e.target.value })} label="University" variant="standard" />
            <TextField value={resumeDetails.passoutYear} onChange={e => setResumeDetails({ ...resumeDetails, passoutYear: e.target.value })} label="Year of Passout" variant="standard" />
          </div>
          {/* personal details */}
            <div className="row">
            <h3>Professional Details</h3>
            <TextField value={resumeDetails.jobType} onChange={e => setResumeDetails({ ...resumeDetails, jobType: e.target.value })} label="Job or Internship" variant="standard" />
            <TextField value={resumeDetails.company} onChange={e => setResumeDetails({ ...resumeDetails, company: e.target.value })} label="Company Name" variant="standard" />
            <TextField value={resumeDetails.clocation} onChange={e => setResumeDetails({ ...resumeDetails, clocation: e.target.value })} label="Company Location" variant="standard" />
            <TextField value={resumeDetails.duration} onChange={e => setResumeDetails({ ...resumeDetails, duration: e.target.value })} label="Duration" variant="standard" />
          </div>
          {/* skill */}
           <div>
            <h3>Skills</h3>
            <div className="d-flex align-items-center justify-content-between p-3 w-100">
              <input ref={skillRef} placeholder="Add" type="text" className='form-control' />
              <Button onClick={() => addSkill(skillRef.current.value)} variant="text">ADD</Button>
            </div>
            <h5>Added Skills</h5>
            <div className="d-flex flex-wrap justify-content-between my-3">
              {resumeDetails.userSkills?.length > 0 ? (
                resumeDetails.userSkills.map((skill, index) => (
                  <Button key={index} variant="contained" className="m-1">
                    {skill}
                    <IoClose onClick={() => removeSkill(skill)} className='ms-2 cursor-pointer' />
                  </Button>
                ))
              ) : (
                <p>No Skills Added Yet</p>
              )}
            </div>
          </div>
          {/* summary */}
           <div>
            <h3>Summary</h3>
            <div className="p-3 row">
              <TextField
                onChange={e => setResumeDetails({ ...resumeDetails, summary: e.target.value })}
                label="Write a short summary of yourself"
                variant="standard"
                multiline
                rows={7}
                defaultValue={
                  'A motivated and detail-oriented BCA student with hands-on experience in developing web and AI-based applications. Passionate about technology, problem-solving, and building efficient solutions using modern tools like React, Firebase, and Python. Eager to apply academic knowledge and project experience to real-world challenges and grow as a professional in the IT industry.'
                }
              />
            </div>
          </div>
          <div className='my-3'>
            <button onClick={handleResumeUpdate} className='btn btn-warning text-light' >update</button>
          </div>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default Edit2