import React, { Fragment } from 'react'

function Home() {
  return (
    <Fragment>
      <div className="col py-3 d-flex align-items-center"> 
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
              <div>
                <h1 className="m-0 font-big slide-in-top">Hi,</h1>
                <h1 className="m-0 font-big animate-charcter">I'm Yalancy,</h1>
                <p className="ls-2 mt-2 slide-in-bottom">Full Stack Developer / Aspiring SDE / Coding Enthusiast</p>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center position-relative">
              
              <div
                style={{
                  backgroundColor: '#E94560', // Pink coral color
                  padding: '10px',
                  borderRadius: '15px',
                  transform: 'rotate(-2deg)', // slight rotation for the wavy look
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                }}
              >
                {/* Inner container for the image */}
                <div
                  style={{
                    backgroundColor: '#1A1A2E', // Dark background color
                    padding: '5px',
                    borderRadius: '10px',
                    transform: 'rotate(2deg)', // slight rotation in the opposite direction
                  }}
                >
                  <img
                    className="img-fluid"
                    src="../images/pp.png"
                    alt="Yalancy"
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '10px',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Home
