import React from "react"
import "./Home.css"
import hero from "../pic/profilePhoto.jpg"
import { useTypewriter } from "react-simple-typewriter"

const Home = () => {

  const {text} = useTypewriter({
    words: [' Self-Taught Developer', ' Financial Advisor', ' Full-Stack Engineer', ' Life-Long Learner'],
    loop: 0, 
  })
  
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>Chris Maguire</span>
            </h1>
            <h2>
              a
              <span>
                {text}
              </span>
            </h2>

            <p>I started my career as a financial advisor at Merrill Lynch. I then went on to start a company called Flibyrd, first making an investment research platform and then pivoting to a mobile app that provides holisitic financial planning and investment recommendations. My failures and unique experiences make me who I am today.</p>
          </div>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
        </div>
      </section>
    </>
  )
}

export default Home
