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
          url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=AIzaSyDfkmutgGmbXZHf1N86LHBPUYNZce5GeyQ",
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

    <h1 style={{color:'black'}}> <img width="50" height="45" src="https://img.icons8.com/ios/50/bot.png" alt="bot"/> Chat AI</h1>
    <div className="ans">
    <textarea name="" id="text" value={answer} cols="30" rows="10"></textarea>
    </div>
    <div className="ques">

    <input type="text" value={question}  onChange={(e)=>setQuestion(e.target.value)}  placeholder="Ask anything" />
    <button onClick={getdata}><i class="fa-solid fa-paper-plane"></i></button>{console.log(question)}
    </div>
    </div>
    </>
  )
}

export default Chat
