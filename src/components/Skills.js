import React, { Fragment } from 'react'
import { SiPython, SiDjango, SiReact, SiNodedotjs, SiMicrosoftsqlserver, SiJava, SiSpringboot, SiCplusplus, SiGit, SiFlask, SiHtml5, SiCss3, SiBootstrap, SiMongodb, SiTensorflow } from 'react-icons/si'

function Skills() {
  return (
    <Fragment>
      <div className="col py-3 d-flex align-items-center"> 
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
              <div>
                <h1 className="font-big text-red slide-in-top">Technologies I know</h1>
                <hr />

                <div className="row my-2">
                  <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                    <span><SiPython className='fs-4' /> Python</span>
                  </div>
                  <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                    <span><SiDjango className='fs-4' /> Django</span>
                  </div>
                  <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                    <span><SiReact className='fs-4' /> React JS</span>
                  </div>
                  <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                    <span><SiNodedotjs className='fs-4' /> Node.js</span>
                  </div>
                  <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                    <span><SiMicrosoftsqlserver className='fs-4' /> SQL Database</span>
                  </div>
                  <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                    <span><SiJava className='fs-4' /> Java</span>
                  </div>
                  <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                    <span><SiSpringboot className='fs-4' /> Spring Boot</span>
                  </div>
                  <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                    <span><SiCplusplus className='fs-4' /> C++</span>
                  </div>
                  <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                    <span><SiGit className='fs-4' /> Git</span>
                  </div>
                  <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                    <span><SiFlask className='fs-4' /> Flask</span>
                  </div>
                  <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                    <span><SiTensorflow className='fs-4' /> Machine Learning</span>
                  </div>
                  <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                    <span><SiHtml5 className='fs-4' /> HTML</span>
                  </div>
                  <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                    <span><SiCss3 className='fs-4' /> CSS</span>
                  </div>
                  <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                    <span><SiBootstrap className='fs-4' /> Bootstrap</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <img className="img-fluid" src="../images/homepg.png" alt="Development illustration" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Skills
