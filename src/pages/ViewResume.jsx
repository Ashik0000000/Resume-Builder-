import React, { useState, useEffect } from "react";
import { useParams,Link } from "react-router-dom";
import { getResumeAPI } from "../services/allAPI";
import Preview from "../components/Preview";
import { FaDownload } from "react-icons/fa6";
import { IoMdRefreshCircle } from "react-icons/io";
import { FaBackward } from "react-icons/fa6";
import Edit2 from "../components/Edit2";


function ViewResume() {
  const { id } = useParams();
  console.log(id);
  const [resume, setResume] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getResumeDetails();
  }, [id]); // ✅ added id as dependency

  const getResumeDetails = async () => {
    try {
      const result = await getResumeAPI(id);
      console.log(result);
      if (result.status === 200) {
        setResume(result.data);
      }
    } catch (error) {
      console.error("Error fetching resume:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    
        <div className="row container">
          <div className="col-md-2"></div>
          <div className="col-md-8 col-12" >
            <div className="d-flex justify-content-center align-items-center mt-5">
             <button className="btn fs-4 text-primary"><FaDownload/> </button>
             <Edit2 resumeDetails={resume} setResumeDetails={setResume} />
              <Link to={'/history'} className="btn fs-4 text-warning"><IoMdRefreshCircle/> 
              </Link>
               <Link to={'/resume'} className="btn fs-4 text-warning"><FaBackward/> </Link>
            </div>
            {loading ? <p>Loading resume...</p> : <Preview resumeDetails={resume} />}
          </div>
          <div className="col-md-2"></div>
        </div>
    </>
  );
}

export default ViewResume;
