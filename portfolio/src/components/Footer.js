import React from 'react'

import {BsGithub , BsLinkedin } from 'react-icons/bs'

function Footer() {

    const style = {
        main: {
            height: "100%",
            width: "100%"
        },
        icon: {
            height: "50px",
            width: "50px"
        }
    }

    return (
        <div className='d-flex justify-content-center mb-5 mt-5' style={style.main}>
            <icon className="mx-3">
            <a href="https://github.com/DKhubgit" rel="noreferrer" target="_blank"><BsGithub style={style.icon} /></a>
            </icon>
            <icon className="mx-3"> 
                <a href="https://www.linkedin.com/in/daniel-kang-0a9322238/" rel="noreferrer" target="_blank"><BsLinkedin style={style.icon} /></a>
            </icon>
        </div>
    )
}

export default Footer;