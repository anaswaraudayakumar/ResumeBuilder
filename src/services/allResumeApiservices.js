import apiServices from "../api/apiService";
//add resume api called by userinput when finish button clicked

export const addResumeAPI = async (resumeData)=>{
   return  await apiServices("POST","/allResumes",resumeData)

}

//get resume api called by viewResume when page loaded (useEffect hook)
export const getResumeAPI = async (id)=>{
   return  await apiServices("GET",`/allResumes/${id}`,{})

}