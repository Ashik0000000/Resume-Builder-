import React from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import { MdDelete } from "react-icons/md";

Link
function History() {
  return (
    <div>
      <h1 className='text-center my-5'> Downloaded Resume History</h1>
        <Link className='float-end me-5 fs-3' style={{marginTop:'-90px'}} to={'/resume'}>Back</Link>
              <Box component="section" className="container-fluid">
                <div className="row">
                  <div className="col-md-4">
                   <Paper elevation={3} sx={{my:5,p:5,textAlign:'center'}}>
                    <div className="d-flex justify-content-between">
                      <h6>Revie At: date</h6>
                      <button className='btn text-danger fs-5'><MdDelete /></button>
                    </div>
                   <div className="border rounded p-3">
                    <img  width={'200px'} height={'200px'}className="img-fluid" src="https://marketplace.canva.com/EAGVLq3_1Kk/1/0/1131w/canva-blue-and-gray-simple-professional-cv-resume-mm8ax3-1FmE.jpg" alt="" />
                   </div>
                   </Paper>
                  </div>
                </div>
          </Box>
    </div>

  )
}

export default History