import React  from 'react'
import Skills from './skill/Skills';
import Education from './education/Education';
import PersonalDetail from './personalDetail/PersonalDetail';
import WorkExperience from './workExperience/WorkExperience';

export default function CreateNewResume() {

  return (
    <>
     <PersonalDetail/>
     
     <Education/>

     <Skills/>

     <WorkExperience />

    </>

  )
}
