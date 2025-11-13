import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { IoClose } from "react-icons/io5";
import { addResumeAPI } from '../services/allAPI';
import { useNavigate } from 'react-router-dom';

const steps = [
  'Basic Information',
  'Contact Details',
  'Educational Details',
  'Work Experience',
  'Skill and Certification',
  'Review and Submit'
];

function UserInput({ resumeDetails, setResumeDetails }) {
  const skillSuggestion = ['Node JS', 'MongoDB', 'React JS', 'Communication', 'coaching', 'Express Js', 'Node js', 'Critical Thinking'];
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const navigate = useNavigate();
  const skillRef = React.useRef();

  const isStepOptional = (step) => step === 1;
  const isStepSkipped = (step) => skipped.has(step);

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prev) => prev + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }
    setSkipped((prev) => {
      const newSkipped = new Set(prev.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
    setActiveStep((prev) => prev + 1);
  };

  const handleReset = () => setActiveStep(0);

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

  const handleAddResume = async () => {
    const { username, jobTitle, location } = resumeDetails;
    if (!username || !jobTitle || !location) {
      alert('please fill the form completely');
      return;
    } else {
      try {
        const result = await addResumeAPI(resumeDetails);
        console.log(result);
        if (result.status === 201) {
          alert('resume added successfully');
          const id = result.data.id || result.data._id;
          navigate(`/resume/${id}/view`);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const renderStep = (stepCount) => {
    switch (stepCount) {
      case 0:
        return (
          <div>
            <h3>Personal Details</h3>
            <div className="row p-3">
              <TextField value={resumeDetails.username} onChange={e => setResumeDetails({ ...resumeDetails, username: e.target.value })} label="Full Name" variant="standard" />
              <TextField value={resumeDetails.jobTitle} onChange={e => setResumeDetails({ ...resumeDetails, jobTitle: e.target.value })} label="Job Title" variant="standard" />
              <TextField value={resumeDetails.location} onChange={e => setResumeDetails({ ...resumeDetails, location: e.target.value })} label="Location" variant="standard" />
            </div>
          </div>
        );
      case 1:
        return (
          <div className="row">
            <h3>Contact Details</h3>
            <TextField value={resumeDetails.email} onChange={e => setResumeDetails({ ...resumeDetails, email: e.target.value })} label="Email" variant="standard" />
            <TextField value={resumeDetails.mobile} onChange={e => setResumeDetails({ ...resumeDetails, mobile: e.target.value })} label="Mobile number" variant="standard" />
            <TextField value={resumeDetails.github} onChange={e => setResumeDetails({ ...resumeDetails, github: e.target.value })} label="Github Profile link" variant="standard" />
            <TextField value={resumeDetails.linkedin} onChange={e => setResumeDetails({ ...resumeDetails, linkedin: e.target.value })} label="LinkedIn Profile Link" variant="standard" />
            <TextField value={resumeDetails.portfolio} onChange={e => setResumeDetails({ ...resumeDetails, portfolio: e.target.value })} label="Portfolio Link" variant="standard" />
          </div>
        );
      case 2:
        return (
          <div className="row">
            <h3>Education Details</h3>
            <TextField value={resumeDetails.course} onChange={e => setResumeDetails({ ...resumeDetails, course: e.target.value })} label="Course name" variant="standard" />
            <TextField value={resumeDetails.college} onChange={e => setResumeDetails({ ...resumeDetails, college: e.target.value })} label="College name" variant="standard" />
            <TextField value={resumeDetails.university} onChange={e => setResumeDetails({ ...resumeDetails, university: e.target.value })} label="University" variant="standard" />
            <TextField value={resumeDetails.passoutYear} onChange={e => setResumeDetails({ ...resumeDetails, passoutYear: e.target.value })} label="Year of Passout" variant="standard" />
          </div>
        );
      case 3:
        return (
          <div className="row">
            <h3>Professional Details</h3>
            <TextField value={resumeDetails.jobType} onChange={e => setResumeDetails({ ...resumeDetails, jobType: e.target.value })} label="Job or Internship" variant="standard" />
            <TextField value={resumeDetails.company} onChange={e => setResumeDetails({ ...resumeDetails, company: e.target.value })} label="Company Name" variant="standard" />
            <TextField value={resumeDetails.clocation} onChange={e => setResumeDetails({ ...resumeDetails, clocation: e.target.value })} label="Company Location" variant="standard" />
            <TextField value={resumeDetails.duration} onChange={e => setResumeDetails({ ...resumeDetails, duration: e.target.value })} label="Duration" variant="standard" />
          </div>
        );
      case 4:
        return (
          <div>
            <h3>Skills</h3>
            <div className="d-flex align-items-center justify-content-between p-3 w-100">
              <input ref={skillRef} placeholder="Add" type="text" className='form-control' />
              <Button onClick={() => addSkill(skillRef.current.value)} variant="text">ADD</Button>
            </div>
            <h5>Suggestion</h5>
            <div className="d-flex flex-wrap justify-content-between">
              {skillSuggestion.map((item, index) => (
                <Button onClick={() => addSkill(item)} key={index} variant="outlined" className="m-2">{item}</Button>
              ))}
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
        );
      case 5:
        return (
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
        );
      default:
        return null;
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = <Typography variant="caption">Optional</Typography>;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>All steps completed — you're finished!</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box>{renderStep(activeStep)}</Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            {activeStep === steps.length - 1 ? (
              <Button onClick={handleAddResume}>Finish</Button>
            ) : (
              <Button onClick={handleNext}>Next</Button>
            )}
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

export default UserInput;
