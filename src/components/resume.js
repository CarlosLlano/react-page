import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import myImage from '../assets/me.jpg';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return (
            <div>
              <Grid>
                  <Cell col={4}>
                    <div style={{textAlign: 'center'}}>
                        <img
                            src={myImage}
                            alt="avatar"
                            style={{height: "200px"}}
                        />
                    </div>
                    <h2 style={{paddingTop: '2em'}}>Carlos Llano</h2>
                    <h4 style={{color: 'grey'}}>Software Engineer</h4>
                    <hr style={{borderTop: '3px solid #833fb2', width: "50%"}}/>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                    <hr style={{borderTop: '3px solid #833fb2', width: "50%"}}/>
                    <h5>Mobile</h5>
                    <p>(+57) 316 627 9150</p>
                    <h5>Email</h5>
                    <p>carlos_eduardo_llano@hotmail.com</p>
                  </Cell>
                  <Cell className="resume-right-col" col={8}>
                    <h2>Education</h2>
                    <Education 
                        startYear='2006' 
                        endYear='2012' 
                        schoolName='IES Distrito Maritimo' 
                        degree='high school diploma'/>
                    <Education 
                        startYear='2012' 
                        endYear='2018' 
                        schoolName='Universidad Icesi' 
                        degree='Bachelor in Software Engineering / Bachelor in Industrial Engineering'/>
                    <hr style={{borderTop: '3px solid #e22947'}}/>
                    <h2>Experience</h2>
                    <Experience 
                        startYear='June 2016' 
                        endYear='Aug 2016' 
                        company='Universidad Icesi' 
                        jobName='SQL Developer' 
                        jobDescription="Designing and implementing SQL queries for reports generation in the new information system at Icesi University named banner."
                    />
                    <Experience 
                        startYear='Jan 2018' 
                        endYear='Jul 2018' 
                        company='IBM Colombia' 
                        jobName='Developer Advocate Intern' 
                        jobDescription="Promoting through workshops the IBM Global Entrepreneur Program (GEP) and the IBM Cloud Services. Helping IBM Clients in the process of migrating their current IT infrastructure to IBM Cloud, participating in architecture design, software developments, testing, and sizing."
                    />
                    <hr style={{borderTop: '3px solid #e22947'}}/>
                    <h2>Skills</h2>
                    <Skills skill="JAVA" level="100"/>
                    <Skills skill="Docker" level="75"/>
                    <Skills skill="Linux" level="25"/>
                  </Cell>
              </Grid>
            </div>
        );
    }
}

export default Resume;

