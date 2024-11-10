const resumeform  = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplay = document.getElementById('resume-display') as HTMLDivElement

//Handle form submission
resumeform.addEventListener('submit', (event: Event)=>{
    event.preventDefault(); //prevent page reload

    //collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value
    const FATHERNAME = (document.getElementById('father name') as HTMLInputElement).value
    const EMAIL = (document.getElementById('email') as HTMLInputElement).value 
    const PHONE = (document.getElementById('phone') as HTMLInputElement).value
    const EDUCATION = (document.getElementById('education') as HTMLInputElement).value
    const GENDER = (document.getElementById('gender') as HTMLInputElement).value
    const MARITALSTATUS = (document.getElementById('marital status') as HTMLInputElement).value  
    const SKILLS = (document.getElementById('skills') as HTMLInputElement).value
    const WORKEXPERIENCE = (document.getElementById('work experience') as HTMLInputElement).value 
    
      // Generate the resume content dynamically 
      const resumeHTML = `
      <h2><b>Resume</b></h2>
      <h3>PERSONAL INFORMATION</h3> 
      <p><b>Name:</b>${name}</p> 
      <p><b>fathername:</b>${FATHERNAME}</p>
      <p><b>email:</b>${EMAIL}</p>
      <p><b>phone:</b>${PHONE}</p> 


      <h3>EDUCATION<h3> 
      <p>${EDUCATION}</p>

      h3>GENDER<h3> 
      <p>${GENDER}</p>

      h3>MARITAL STATUS<h3> 
      <p>${MARITALSTATUS}</p>

      h3>SKILLS<h3> 
      <p>${SKILLS}</p>

      h3>WORK EXPERIENCE<h3> 
      <p>${WORKEXPERIENCE}</p>
      `; 

      //Display the generated resume 
      if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML;
      }else{
          console.error('The resume display element is missing.'); 
      }
      
});
