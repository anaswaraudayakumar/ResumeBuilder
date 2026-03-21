import apiServices from "../api/apiService";
//add resume api called by userinput

export const addResumeAPI = async (resumeData)=>{
   return  await apiServices("POST","/allResumes",resumeData)

}