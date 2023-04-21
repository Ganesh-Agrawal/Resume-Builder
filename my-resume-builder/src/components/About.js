import React from 'react'

export default function About(props) {
  return (
    <div className={`container mr-auto p-3 text-${props.mode === 'light'? 'dark' : 'light'}`} >
     <p>
      Resume builders are platforms that provide pre-designed templates and pre-filled
       content to job applicants to create their resumes quickly. They reduce
        the time necessary for 
      developing a resume and can improve its visual appeal.
      </p>
      <p>
        A Quick and Easy Way to Create Your Professional Resume.
        Fast and Easy to Use Our resume builder lets you easily
        and quickly create a resume using our resume wizard.
      </p>
      <p>
      Resume Builder is the best software to build you a CV/Resume. It allows you to put in 
      all of your work experience, education, and skills, as well as extra bits of relevant 
      information such as hobbies and interests. After you have finished building your resume, 
      you can print it out in an attractive format suitable for hard copies or digital applications.
      </p>
      <p>
      A resume is a formal document that a job applicant creates to itemize their qualifications 
      for a position. A resume is usually accompanied by a customized cover letter in which the
       applicant expresses an interest in a specific job or 
      company and draws attention to the most relevant specifics on the resume.
      </p>
    </div>
  )
}
