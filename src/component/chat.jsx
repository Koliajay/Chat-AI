import { useState } from 'react'
// import axios from 'axios'
import  axios from 'axios'
import Style from "./App.module.css" 

function Chat() {
  const [question,setQuestion ] = useState("")
  const [answer,setAnswer] = useState("")

 async function getdata()
  {
    setAnswer("loading...")
         var response= await axios({
          url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyDBQ4B0x6sEoYI6hgR8qr5bQT4duD8lWgo",
          method:"post",
          data:{
            contents:[
              {parts:[{text:question}]},
            ],
          },

        })
        var ans=response['data']['candidates'][0]['content']['parts'][0]['text']
        // var text=document.getElementById("text")
        // text.innerHTML=ans
        setAnswer(ans)
  }

  return (
    <>
    <div className={Style.container}>

    <h1>Pocket Attorney</h1>
    <div className="ans">
    <textarea name="" id="text" value={answer} cols="30" rows="10"></textarea>
    </div>
    <div className="ques">

    <input type="text" value={question}  onChange={(e)=>setQuestion(e.target.value)}  placeholder="Enter yours questions" />
    <button onClick={getdata}>click</button>{console.log(question)}
    </div>
    </div>
    </>
  )
}

export default Chat
