import React, { Fragment } from 'react'
import { SiCodechef, SiHackerrank } from 'react-icons/si';

function Resume() {
  return (
    <Fragment>
      <div className="col p-4"> 
        <div className="p-4 bg-dark slide-in-top">
          <div className="row">
            <div className="col-6">
              <h2 className="ff-jose fw-bold ls-2">Yalancy C R</h2>
            </div>
          </div>
          <hr></hr>

          <div className="row">
            <div className="col-md-6">
              <h4 className="ff-jose ls-2">EXPERIENCE</h4>
              <ul>
                <li>
                  <h4 className="ff-jose my-1 text-red">React Developer</h4>
                  <h6 className="blue-label px-2 py-1">Jun 2024 - Present</h6>
                  <p className="m-0">Asokumar ES PVT LTD · Part-time</p>
                  <p>Remote</p>
                </li>
                <li>
                  <h4 className="ff-jose my-1 text-red">Technical Intern</h4>
                  <h6 className="blue-label px-2 py-1">Nov 2023 - Dec 2023</h6>
                  <p className="m-0">Preludesys · Internship</p>
                  <p>Chennai, Tamil Nadu, India</p>
                </li>
                <li>
                  <h4 className="ff-jose my-1 text-red">Full Stack Developer</h4>
                  <h6 className="blue-label px-2 py-1">May 2024 - Jun 2024</h6>
                  <p className="m-0">ImRobonix · Internship</p>
                  <p>Chennai, Tamil Nadu, India</p>
                </li>
              </ul>
            </div>

            <div className="col-md-6">
              <h4 className="ff-jose ls-2">EDUCATION</h4>
              <ul>
                <li>
                  <h4 className="ff-jose my-1 text-red">B.Tech - Computer Science and Business Systems</h4>
                  <h6 className="blue-label px-2 py-1">2022 - 2026</h6>
                  <p className="m-0">Chennai Institute of Technology</p>
                  <p>CGPA: 9.20/10</p>
                </li>
                <li>
                  <h4 className="ff-jose my-1 text-red">Higher Secondary School</h4>
                  <h6 className="blue-label px-2 py-1">2022</h6>
                  <p className="m-0">Sri Chaitanya Techno School</p>
                  <p>Grade: 83.2 %</p>
                </li>
              </ul>
            </div>
          </div>

          <hr></hr>

          <div className="row">
            <div className="col-12">
              <h4 className="ff-jose ls-2">CERTIFICATIONS</h4>
              <ul>
              <li>
                  <h4 className="ff-jose my-1 text-red">Cloud Computing</h4>
                  <h6 className="blue-label px-2 py-1"> NPTEL - NOv 2023</h6>
                </li>
                <li>
                  <h4 className="ff-jose my-1 text-red">Complete Web development BootCamp</h4>
                  <h6 className="blue-label px-2 py-1">Udemy - May 2023</h6>
                </li>
                <li>
                  <h4 className="ff-jose my-1 text-red">Python Course IIT-M certification</h4>
                  <h6 className="blue-label px-2 py-1">IIT-M - Mar 2023</h6>
                </li>
                <li>
                  <h4 className="ff-jose my-1 text-red">Cybersecurity Essentials</h4>
                  <h6 className="blue-label px-2 py-1">CISCO- Feb 2023</h6>
                </li>
                <li>
                  <h4 className="ff-jose my-1 text-red">Introduction to networks</h4>
                  <h6 className="blue-label px-2 py-1"> CISCO - Feb 2023</h6>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Resume;
