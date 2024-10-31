import React, { Fragment } from 'react';
import { VscHome } from 'react-icons/vsc';
import { FiUser } from 'react-icons/fi';
import { BsCode } from 'react-icons/bs';
import { MdOutlineDashboard, MdOutlineContactPage, MdEmail } from 'react-icons/md';
import { AiFillLinkedin, AiFillGithub, AiOutlineUnorderedList } from 'react-icons/ai';
import { Link, NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <Fragment>
      <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark slide-in-left">
        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
          {/* Increase font size for the name */}
          <Link to="/" className="d-flex align-items-center pb-1 mb-md-0 me-md-auto text-white text-decoration-none">
            <span className="fs-2 d-none d-sm-inline ff-jost fw-600" style={{ fontSize: '2rem' }}>Yalancy C R</span>
          </Link>
          <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
            <li className="nav-item">
              <NavLink to="/" className="nav-link align-middle px-0 text-white">
                <VscHome className='fs-4' /> <span className="ms-1 d-none d-sm-inline" style={{ fontSize: '1.25 rem' }}>Home</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link align-middle px-0 text-white">
                <FiUser className='fs-4' /> <span className="ms-1 d-none d-sm-inline" style={{ fontSize: '1.25rem' }}>About</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/skills" className="nav-link align-middle px-0 text-white">
                <BsCode className='fs-4' /> <span className="ms-1 d-none d-sm-inline" style={{ fontSize: '1.25rem' }}>Skills</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/mywork" className="nav-link align-middle px-0 text-white">
                <MdOutlineDashboard className='fs-4' /> <span className="ms-1 d-none d-sm-inline" style={{ fontSize: '1.25rem' }}>My Work</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/resume" className="nav-link align-middle px-0 text-white">
                <AiOutlineUnorderedList className='fs-4' /> <span className="ms-1 d-none d-sm-inline" style={{ fontSize: '1.25rem' }}>Resume</span>
              </NavLink>
            </li>
          </ul>
          <hr />
          <div className="dropdown pb-4 dropup">
            <a href="/" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
              <MdOutlineContactPage className='fs-5' />
              <span className="d-none d-sm-inline mx-1" style={{ fontSize: '1.5rem' }}>Contact</span>
            </a>
            <ul className="dropdown-menu shadow" aria-labelledby="dropdownUser1">
              <li><a className="dropdown-item text-black" href="mailto:chandrarajanyalancy@email.com" target="_blank" rel="noopener noreferrer"><MdEmail className='fs-5' /> Email</a></li>
              <li> <hr className="dropdown-divider" /> </li>
              <li><a className="dropdown-item text-black" href="https://www.linkedin.com/in/yalancy/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin className='fs-5' /> LinkedIn</a></li>
              <li> <hr className="dropdown-divider" /> </li>
              <li><a className="dropdown-item text-black" href="https://github.com/Yalancy0901" target="_blank" rel="noopener noreferrer"><AiFillGithub className='fs-5' /> Github</a></li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Sidebar;
