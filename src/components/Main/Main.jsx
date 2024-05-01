import React, { useContext } from 'react'
import './Main.css'
import loki from '../../assets/hello.jpg'
import location from '../../assets/location.png'
import light from '../../assets/light.png'
import msg from '../../assets/msg.png'
import code from '../../assets/code.png'
import img from '../../assets/image1.png'
import mic from '../../assets/mic.png'
import send from '../../assets/send.png'
import gemini from '../../assets/gemini.png'
import { Contaxt } from '../../context/Context'

const Main = () => {


  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Contaxt)


  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <img height={45} width={45} src={loki} alt="" />
      </div>
      <div className="main-container">


       {!showResult
        ?<>
         <div className="greet">
            <p><samp>Hello, Logesh</samp></p>
            <p>How can I help you today?</p>
        </div>
        <div className="cards">
            <div className="card">
               <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={location} alt="" />
            </div>
            <div className="card">
               <p>Briefly summarize this concept: urban planning</p>
                <img src={light} alt="" />
            </div>
            <div className="card">
               <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={msg} alt="" />
            </div>
            <div className="card">
               <p>Tell me about React js and React native</p>
                <img src={code} alt="" />
            </div>
        </div>
        </>
       :<div className='result'>
        <div className="result-title">
          <img height={45} width={45} src={loki} alt="" />
          <p>{recentPrompt}</p>
        </div>
        <div className="result-data">
          <img src={gemini} alt="" />
          {loading
          ?<div className='loader'>
            <hr />
            <hr />
            <hr />
          </div>
          :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
          }
          
        </div>
       </div>
       }


       
        <div className="main-bottom">
            <div className="search-box">
                <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Message GeminiChat...' />
                <div>
                    <img src={img} alt="" />
                    <img src={mic} alt="" />
                    {input?<img onClick={()=>onSent()} src={send} alt="" />:null}
                </div>
            </div>
            <p className='bottom-info'>
            Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
            </p>
        </div>
      </div>
    </div>
  )
}

export default Main
