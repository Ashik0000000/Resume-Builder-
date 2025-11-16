import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import { MdDelete } from "react-icons/md";
import { getHistoryAPI, removeHistoryAPI } from '../services/allAPI';


function History() {

  const [allHistory, setAllHistory] = useState([]);

  useEffect(() => {
    getHistory();
  }, []);

  const getHistory = async () => {
    const result = await getHistoryAPI();
    if (result.status === 200) {
      setAllHistory(result.data);
    }
  };
  const deleteHistory= async(id)=>{
    try{
      await removeHistoryAPI(id)
      getHistory()
    }
    catch(err){
      console.log(err)
    }
  }

  return (
    <div>
      <h1 className="text-center my-5">Downloaded Resume History</h1>

      <Link 
        to={'/resume'} 
        className='float-end me-5 fs-3' 
        style={{ marginTop: '-80px' }}
      >
        Back
      </Link>

      <Box component="section" className="container-fluid">
        <div className="row">

          {
            allHistory.length > 0 ? 
            allHistory.map((item) => (
              <div key={item?.id} className="col-md-4">

                <Paper elevation={3} sx={{ my: 5, p: 5, textAlign: 'center' }}>

                  <div className="d-flex justify-content-between align-items-center">
                    <h6>Review At: {item?.timeStamp}</h6>

                    <button onClick={()=>deleteHistory(item?.id)} className="btn text-danger fs-4">
                      <MdDelete />
                    </button>
                  </div>

                  <div className="border rounded p-3">
                    <img
                      width={'200px'}
                      height={'200px'}
                      src={item?.resumeImg}
                      alt="resume"
                    />
                  </div>

                </Paper>

              </div>
            ))
            :
            <p>No resumes are downloaded yet!!!</p>
          }

        </div>
      </Box>
    </div>
  )
}

export default History
