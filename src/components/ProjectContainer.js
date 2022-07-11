import React from 'react';
import Project from './Project';
import './style.css'

const projectData = [{
    name:"Project 1",
    description:"Small Game Project in which if total odd then win otherwise loss",
    skills:['Html','Css','React'],
    github:"https://github.com/Kathan29/SmallGameProject",
  
},
{
    name:"Project 2",
    description:"Api demo for git",
    skills:['Css',,'React'],
    github:"https://github.com/Kathan29/DemoProject2",
   
}
];

const ProjectContainer = () => {
    return (
        <div className="projectContainer">
            {
                projectData.map(projectItem=>{
                    return <Project projectItem={projectItem}/>
                })
            }
        </div>
    )
}

export default ProjectContainer