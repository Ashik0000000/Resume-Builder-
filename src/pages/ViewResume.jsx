import React, { useState, useEffect } from "react";
import { useParams,Link } from "react-router-dom";
import { getResumeAPI } from "../services/allAPI";
import Preview from "../components/Preview";
import { FaDownload } from "react-icons/fa6";
import { IoMdRefreshCircle } from "react-icons/io";
import { FaBackward } from "react-icons/fa6";
import Edit2 from "../components/Edit2";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { addHistoryAPI } from "../services/allAPI";


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
   const handleDownloadResume = async()=>{
    //create a pdf document
    const doc = new jsPDF();
    const preview = document.getElementById('preview')
    //talk ss of previw-html2campusnpm (library)
    const canvas= await html2canvas(preview,{scale:2})
    console.log(canvas)

    //convert canvas to image

    const resumeImg = canvas.toDataURL('image/png')
    console.log(resumeImg)
    //add ss to pdf
    const pageWidth=doc.internal.pageSize.getWidth()
    // const pageHeight=doc.internal.pageSize.getHeight()
    
    const imgWidth=pageWidth-20
    const imgHeight=canvas.height*imgWidth/canvas.width

    doc.addImage(resumeImg,'PNG',0,0,imgWidth,imgHeight)
    //download pdf
    doc.save(`${resume.username}-resume.pdf`)
   
   //local time data=new Date
   const localTimeData=new Date()

   const timeStamp=`${localTimeData.toLocaleDateString()},${localTimeData.toLocaleTimeString()}`

   try{
     await addHistoryAPI({timeStamp,resumeImg})
   }
   catch(err)
   {
    console.log(err)
   }
  }
  return (
    <>
    
        <div className="row container">
          <div className="col-md-2"></div>
          <div className="col-md-8 col-12" >
            <div className="d-flex justify-content-center align-items-center mt-5">
             <button onClick={handleDownloadResume} className="btn fs-4 text-primary"><FaDownload/> </button>
             <Edit2 resumeDetails={resume} setResumeDetails={setResume} />
              <Link to={'/history'} className="btn fs-4 text-warning"><IoMdRefreshCircle/> 
              </Link>
               <Link to={'/resume'} className="btn fs-4 text-warning"><FaBackward/> </Link>
            </div>
           <div id='preview'><Preview resumeDetails={resume} /></div>

          </div>
          <div className="col-md-2"></div>
        </div>
    </>
  );
}

export default ViewResume;
