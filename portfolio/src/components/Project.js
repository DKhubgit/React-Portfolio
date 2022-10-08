import React from 'react'

function Project(props) {

    const style = {
        main: {
            height: "90%",
            width: "90%"
        },
        img: {
            height: "100%",
            width: "100%"
        }
    }

    return (
        <div className="border border-primary rounded-3 p-2 text-center mb-4" style={style.main}>
            <a href={props.content.src} rel="noreferrer" target="_blank"><img src={props.content.project} alt="project" style={style.img}></img></a>
        </div>
    )
}

export default Project;