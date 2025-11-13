import commonAPI from "./commonAPI"
import ServerURL from "./SERVERURL"
//resume add api
export const addResumeAPI = async (resume)=>{
   return await commonAPI(`${ServerURL}/resumes`,"POST",resume)
}
//get resume API
export const getResumeAPI = async (id)=>{
   return await commonAPI(`${ServerURL}/resumes/${id}`,"GET","")
}
//update resume api
export const updateResumeAPI=async(id,resume)=>{12
   return await commonAPI(`${ServerURL}/resumes/${id}`,"PUT",resume)
}