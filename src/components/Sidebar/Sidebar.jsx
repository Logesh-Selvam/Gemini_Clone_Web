import React, { useContext, useState } from 'react'
import './Sidebar.css'
import menu from '../../assets/menu.png'
import plus from '../../assets/plus.png'
import msg from '../../assets/msg.png'
import qus from '../../assets/qus.png'
import time from '../../assets/time.png'
import settings from '../../assets/settings.png'
import { Contaxt } from '../../context/Context'

const Sidebar = () => {

  const[extended,setExtended] = useState(false)
  const {onSent, prevPrompts, setRecentPrompt, newChat} = useContext(Contaxt)

  const loadPrompt = async (prompt) =>{
    setRecentPrompt(prompt)
    await onSent(prompt)
  }


  return (
    <div className='sidebar'>
      <div className="top">
        <img onClick={()=>setExtended(prev=>!prev)} height={20} width={25} className='menu' src={menu} alt="" />
        <div onClick={()=>newChat()} className="new-chat">
            <img height={20} width={20} src={plus} alt="" className='plus' />
            {extended ?<p>New Chat</p>:null}
        </div>
         {extended ?
        <div className="recent">
            <p className='recent-title'>Recent</p>
            {prevPrompts.map((item,index)=>{
              return (
                <div onClick={()=>loadPrompt(item)} className="recent-entry">
                <img height={20} width={25} src={msg} alt="" />
                <p>{item.slice(0,18)}...</p>
            </div>
              )
            })}
            
        </div>
        : null}
      </div>
      <div className="bottom">
        <div className="buttom-item recent-entry">
            <img height={20} width={25} src={qus} alt="" />
            {extended?<p>Help</p>:null}
        </div>
        <div className="buttom-item recent-entry">
            <img height={20} width={25} src={time} alt="" />
            {extended?<p>Activiy</p>:null}
        </div>
        <div className="buttom-item recent-entry">
            <img height={20} width={25} src={settings} alt="" />
            {extended?<p>Settings</p>:null}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
