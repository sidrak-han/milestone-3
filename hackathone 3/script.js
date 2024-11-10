var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
//Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    //collect input values
    var name = document.getElementById('name').value;
    var FATHERNAME = document.getElementById('father name').value;
    var EMAIL = document.getElementById('email').value;
    var PHONE = document.getElementById('phone').value;
    var EDUCATION = document.getElementById('education').value;
    var GENDER = document.getElementById('gender').value;
    var MARITALSTATUS = document.getElementById('marital status').value;
    var SKILLS = document.getElementById('skills').value;
    var WORKEXPERIENCE = document.getElementById('work experience').value;
    // Generate the resume content dynamically 
    var resumeHTML = "\n      <h2><b>Resume</b></h2>\n      <h3>PERSONAL INFORMATION</h3> \n      <p><b>Name:</b>".concat(name, "</p> \n      <p><b>fathername:</b>").concat(FATHERNAME, "</p>\n      <p><b>email:</b>").concat(EMAIL, "</p>\n      <p><b>phone:</b>").concat(PHONE, "</p> \n\n\n      <h3>EDUCATION<h3> \n      <p>").concat(EDUCATION, "</p>\n\n      h3>GENDER<h3> \n      <p>").concat(GENDER, "</p>\n\n      h3>MARITAL STATUS<h3> \n      <p>").concat(MARITALSTATUS, "</p>\n\n      h3>SKILLS<h3> \n      <p>").concat(SKILLS, "</p>\n\n      h3>WORK EXPERIENCE<h3> \n      <p>").concat(WORKEXPERIENCE, "</p>\n      ");
    //Display the generated resume 
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
