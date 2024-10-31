import React, { Fragment } from 'react'

function About() {
  return (
    <Fragment>
      <div className="col py-3 d-flex align-items-center about-image"> 
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
              <div>
                <h1 className="font-big text-red slide-in-top">About me</h1>
                <hr />
                <p className='slide-in-bottom'>
                  Hi, I'm Yalancy, a <b>Pre-final year student at Chennai Institute of Technology </b>, currently pursuing a B.Tech in Computer Science and Business Systems. My academic journey has been marked by a genuine passion for the intersection of technology and business, a fervor that propels me towards excellence in both theoretical knowledge and practical applications.
                </p>
                <p className='slide-in-bottom'>
                  In the realm of computer science, I am not merely a student; I am an avid explorer, delving deep into the intricacies of coding, algorithms, and system architectures. This enthusiasm has translated into a solid foundation that fuels my eagerness to take on challenging projects and embrace the ever-evolving landscape of technology.
                </p>
                <p className='slide-in-bottom'>
                  One distinguishing aspect is my prowess as an excellent speaker, allowing me to communicate complex technical concepts with clarity and precision. Coupled with this, I am a quick learner, always open to challenges, and ready to embark on new milestones.
                </p>
                <p className='slide-in-bottom'>
                  Beyond academics, I actively engage in extracurricular activities, internships, and collaborative projects, seeking not only to enhance my skill set but also to contribute meaningfully to the field. This holistic approach reflects my commitment to personal and professional growth as I navigate the exciting and dynamic world of computer science and business systems.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <img className="img-fluid" src="../images/about.png" alt="Profile illustration" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default About
