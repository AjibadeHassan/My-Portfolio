import React from 'react'

const About = () => {

  const Skills = ['HTML', 'CSS', 'Javascript', 'React', 'Typescript','SASS', 'Git', 'Github', 'SEO', 'Responsive Design','Node Basics']
  return (
    <div>
        <main className='About_container'>
            <span>
            <h1>ABOUT ME</h1>
            <div className='About_underline'></div>
            <p>Here you will find more information about me, what I do, and my current skills mostly
                 in terms of programming and technology.</p>
                 </span>
                 <section className='content_section'>
                    <div className='About_writeup'>
                        <h2>Get to know me!</h2>
                        <p>I'm a Frontend Web Developer building the Front-end
                           of Websites and Web Applications that leads
                           to the success of the overall product. Check out 
                           some of my work in the Projects section.</p>
                           <p>I'm open to Job opportunities where I can contribute,
                            learn and grow. If you have a good opportunity that 
                            matches my skills and experience then don't hesitate
                             to contact me.
                        </p>
                        <button>Contact me</button>
                    </div>
                    <div className='My_skills'>
                      <h2>My Skills</h2>


                      <div className='Skill_holder'>
                      {
                        Skills.map((items)=>(
                          <span>{items}</span>
                        ))
                      }

                      </div>
                    </div>
                 </section>
        </main>
    </div>
  )
}

export default About