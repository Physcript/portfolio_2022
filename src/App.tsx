import React from 'react';
import { Container } from 'react-bootstrap'
import me from './img/me.png'
import me2 from './img/me2.png'
import p from './img/p.png'
import p2 from './img/p2.png'
import p3 from './img/p3.png'
import p4 from './img/p4.png'

import b1 from './img/b1.png'
import b2 from './img/b2.png'
import b3 from './img/b3.png'


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

    const url = 'https://portfolio20211.herokuapp.com/api/mail'
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


        <div className = 'mt-3'  style = {{ height: '90vh' }}>
          <div className = 'se d-flex flex-column h-100 d-block justify-content-center'>
            <h2 style = {{ paddingTop: '20px' }}>Hi i'm<span className = 'c3'> Patrick</span></h2>

            <div className ='d-lg-flex gap-3'>
              <div className = 'myCard col-lg-6 col' >
                <p>I'm a web developer with a focus on the MERN stack, but still exploring other technologies and frameworks that catch my interest</p>
                <p><br/> </p>
                <p> I graduated from the International Electorinics Techinical Institute.</p>
                <br />
                <p>I am passionate about coding and solving problems through code, and I am excited to work alongside other amazing programmers and learn so much more!</p>
              </div>
              <div className = 'myCard ms-auto gap-2 col-lg-6 ' style = {{ backgroundColor: '' }} >
                <img src = { test } className = 'rounded mx-auto d-block mypic' style = {{ width: '' , height: '' }}/>
              </div>

            </div>

          </div>
        </div>


        <div className = 'mt-5' >
          <h2 style = {{ paddingTop: '20px' }}>My <span className = 'c3'>Project</span></h2>
          <br />

          <div className = 'row justify-content-center'>
            
            <div className = 'col-md-6 p-2 myCard mx-1 col-10' style = {{ backgroundColor: '#BAABDA' }} >
              <img src = { p } className = 'img-fluid' />
              <div className =  'image__overlay'>
              <div className = 'image__title'><a target = '_blanc' href = "https://condescending-dubinsky-a9f266.netlify.app/" style = {{ color:'white' }}>ClothingMania</a></div>
              <p className = 'image__description'>Basic ECommerce site</p>
            </div>
            </div>

            <div className = 'col-md-3 p-2 col-10' style = {{ backgroundColor: '#BAABDA' }}>
                <div className = 'mb-2'>
                <img src = { p2 } className = 'img-fluid' />
                </div>
      
                <div className = 'mt-2'>
                <img src = { p4 } className = 'img-fluid' />
                </div>

            </div>

          
          </div>
          <br />
          <div className = 'row justify-content-center'>
            

            <div className = 'col-md-3 p-2 col-10' style = {{ backgroundColor: '#BAABDA' }}>
                <div className = 'mb-2'>
                <img src = { b2 } className = 'img-fluid' />
                </div>
      
                <div className = 'mt-2'>
                <img src = { b3 } className = 'img-fluid' />
                </div>

            </div>


            <div className = 'col-md-6 p-2 myCard mx-1 col-10' style = {{ backgroundColor: '#BAABDA' }} >
              <img src = { b1 } className = 'img-fluid' />
              <div className =  'image__overlay'>
                <div className = 'image__title'><a target = '_blanc' href = "https://suspicious-lamarr-6e5790.netlify.app/" style = {{ color:'white' }}>Blog</a></div>
                  <p className = 'image__description'>Basic Blog site</p>
                </div>
            </div>

            
          </div>
        </div>



        <div className = ''  style = {{ height: '100vh' }}>
            <div className = 'd-flex flex-column h-100 justify-content-center align-items-center '>
            <h2 style = {{ paddingTop: '20px' }}>My <span className = 'c3'>ToolKit</span></h2>

            <div className ='d-flex flex-wrap gap-5 my-5 align-items-center justify-content-center'>
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
            <div className = 'd-lg-flex  gap-2'>
              <div className = 'col col-lg-6 p-4'>
                <p>If you ever want to grab a coffee/bubble tea (virtually) or just want a quick chat - you can find me on social media or you can send me a message here!</p>
                <br/>
                <div className = 'd-flex gap-2'>
                <i className=" c3 fab fa-facebook-square fa-2x"></i>
                <br />
                <i className = "hovs c3 fab fa-github-square fa-2x" onClick = { () =>   window.location.assign('https://github.com/Physcript')}></i>
                </div>
              </div>
              <div className = 'd-flex flex-column gap-3 col col-lg-6'>
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
        <p>Develop and Design by Me Patrick</p>
      </div>
    </div>
  );
}

export default App;
