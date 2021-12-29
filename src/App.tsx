import React from 'react';
import { Container } from 'react-bootstrap'
import me from './img/me.png'
import me2 from './img/me2.png'
import p from './img/p.png'
import ex from './img/ex.png'
import mongo from './img/mongo.png'
import ts from './img/ts.png'
import test from './img/test.jpg'
import './App.css';

import { useState } from 'react'


function App() {

  const [ data,setData ] = useState({
    name:'',
    email:'',
    message: ''
  })
  const [ success,setSuccess ] = useState('')
  const [ error,setError ] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault()
    const { name,value } = e.target
    setData((val) => ({
      ...val,
      [name]:value
    }))
  }

  const sendMessageHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if(data.email === '' || data.message === '') {
      setError('Dont leave blank 💔')
      return
    }

    const url = 'http://localhost:1337/api/mail'
    const jsonData = JSON.stringify(data)

    const request = new Request(url,{
      method: 'POST',
      headers: { 'Content-Type':'application/json' },
      body: jsonData
    })

    fetch(request).then((val) => {
      if(val.status === 200) {
        val.json().then((res) => {
          setSuccess('I Got your Message. i will response shortly 📧')
          setData({
            name:'',
            email:'',
            message: ''
          })
        })
        setError('')
      }else{
        val.json().then((res) => {
          setError('Something went wrong')
          setSuccess('')
        })
      }
    })

  }
  return (
    <div className="App">
      <Container>

          <div className = 'bar' >
            <i className = "fas fa-bars fa-lg" style = {{  }}></i>
          </div>

        <div className = ''  style = {{ height: '100vh' }}>
          <div className = 'd-flex align-items-center h-100'>
            <div className = "d-flex flex-grow-1 flex-column">
              <p>Hi THERE</p>
              <h1>I'm <span className = 'c3'>John</span></h1>
              <p>Mern Stack Developer. Passionate about creating interactive <br />application and expirience on web </p>
            </div>
            <div className = "flex-grow-1 lora">
              <h1>MY PHOTO</h1>
              <h1>SHOULD BE</h1>
              <h1>HERE</h1>
            </div>
          </div>
        </div>
        <div className = ''  style = {{ height: '100vh' }}>
          <div className = 'd-flex flex-column h-100 justify-content-center'>
            <h2 style = {{ paddingTop: '20px' }}>My <span className = 'c3'>project</span></h2>

            <div className ='d-flex gap-3'>
              <div className = 'myCard w-75 p-2 h-100' style = {{ backgroundColor: '#BAABDA' }} >
                <img src = { p } className = 'img-fluid' />
                <div className =  'image__overlay'>
                  <div className = 'image__title'>ClothingMania</div>
                  <p className = 'image__description'>Basic ECommerce site</p>
                </div>
              </div>
              <div className = 'myCard w-25 h-100 p2' style = {{ backgroundColor: '#BAABDA' }} >
                <div style = {{ backgroundColor: 'white' }}>

                </div>
              </div>
            </div>

          </div>
        </div>

        <div className = ''  style = {{ height: '100vh' }}>
          <div className = 'd-flex flex-column h-100 justify-content-center'>
            <h2 style = {{ paddingTop: '20px' }}>About <span className = 'c3'>me</span></h2>

            <div className ='d-flex gap-3'>
              <div className = 'myCard w-50' >
                <p>I'm a web developer with a focus on the MERN stack, but still exploring other technologies and frameworks that catch my interest</p>
                <p><br/> </p>
                <p> I graduated from the International Electorinics Techinical Institute.</p>
                <br />
                <p>I am passionate about coding and solving problems through code, and I am excited to work alongside other amazing programmers and learn so much more!</p>
              </div>
              <div className = 'myCard ms-auto d-flex flex-column gap-2' style = {{ backgroundColor: '' }} >
                <img src = { test } className = '' style = {{ width: '' , height: '400px' }}/>
              </div>

            </div>

          </div>
        </div>


        <div className = ''  style = {{ height: '100vh' }}>
            <div className = 'd-flex flex-column h-100 justify-content-center'>
            <h2 style = {{ paddingTop: '20px' }}>My <span className = 'c3'>ToolKit</span></h2>

            <div className ='d-flex gap-5 my-5'>
              <div className = 'd-flex flex-column align-items-center'>
                <i className="fab fa-node fa-4x"></i>
                <label  className = 'c3'>NODE</label>
              </div>
              <div className = 'd-flex flex-column align-items-center'>
                <i className="fab fa-react fa-4x"></i>
                <label  className = 'c3'>REACT</label>
              </div>
              <div className = 'd-flex flex-column align-items-center'>
                <i className="fab fa-github fa-4x"></i>
                <label  className = 'c3'>GITHUB</label>
              </div>
              <div className = 'd-flex flex-column align-items-center'>
                <img src = { ex } style = {{ width:'', height: '60px' }} />
                <label  className = 'c3'>EXPRESS</label>
              </div>
              <div className = 'd-flex flex-column align-items-center'>
                <img src = { mongo } style = {{ width:'', height: '60px' }} />
                <label  className = 'c3'>MONGO DB</label>
              </div>
              <div className = 'd-flex flex-column align-items-center'>
                <img src = { ts } style = {{ width:'', height: '60px' }} />
                <label  className = 'c3'>TYPESCRIPT</label>
              </div>
            </div>

          </div>
        </div>
      </Container>

      <div className = 'contact p-3 py-5' style = {{  }}>
        <Container>
            <h2 style = {{ paddingTop: '20px' }}><span className = 'c3'>Contact</span></h2>
            <div className = 'd-flex gap-2'>
              <div className = 'w-50 p-4'>
                <p>If you ever want to grab a coffee/bubble tea (virtually) or just want a quick chat - you can find me on social media or you can send me a message here!</p>
                <br/>
                <div className = 'd-flex gap-2'>
                <i className=" c3 fab fa-facebook-square fa-2x"></i>
                <br />
                <i className=" c3 fab fa-github-square fa-2x"></i>
                </div>
              </div>
              <div className = 'w-50 d-flex flex-column gap-3'>
                <label className = 'c3'>{ success }</label>
                <label className = 'c3'>{ error }</label>
                <input
                  placeholder = 'Name'
                  name = 'name'
                  value = {data.name}
                  onChange = { onChange }

                />
                <input
                  placeholder = 'Email'
                  name = 'email'
                  value = {data.email}
                  onChange = { onChange }
                />
                <textarea
                  placeholder = "Message"
                  name = 'message'
                  value = {data.message}
                  onChange = { onChange }
                  rows = { 4 } cols = { 50 }
                />
                <button className = 'w-25' onClick = { sendMessageHandler }>Send</button>

              </div>
            </div>
        </Container>
      </div>
      <div className = 'footer'>
        <p>Develop and Design by Me John</p>
      </div>
    </div>
  );
}

export default App;
