import React from 'react'

function About() {

    const style = {
        main: {
            width: "75%",
        },
        other: {
            textDecoration: 'underline'
        }
    }

    return (
        <div className='text-center mx-auto mt-5' style={style.main}>
            <h1 style={style.other}>About Me!</h1>
            <p>
                My name is Daniel Kang and I am an aspiring web developer looking to get my foot in the door in this fantastic career. To give a little background, I graduated from the University of California Riverside with a mathematics degree with a focus in computational math. There I learned not only the challenges of computer science and math but also how much it can grow and its limitless capabilities. After a little setback after graduating, I thought of the opportunities that this career has and I discovered a coding bootcamp that UCR offered. After enrolling, I was tasked with pre-work that introduced me to the discipline of web development. My first ever webpage I created was a fan page of one of my favorite singers, IU. I had a super fun time creating it and I really felt proud of it! With that enjoyment, i dedicated myself to learn more about web development through the bootcamp. Here I am now looking for opportunities to work in this exciting field, ready to work hard and contribute.
                 <br></br>
                 <br></br>
                A little about myself! I enjoy playing video games and playing guitar. I am a 2nd-generation Korean American who loves Korean food! I have a weird persistence in creating or learning new things. Quite recently I was resolving an issue with my home network setup and enjoyed learning about switches, Wireless access points, and it's Command line interface. Pretty cool!
            </p>
        </div>
    )
}

export default About;