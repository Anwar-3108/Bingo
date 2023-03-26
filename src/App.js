import React, { useState } from 'react'
import Alert from './Alert';
import Navbar from './Navbar'
import TextForms from './TextForm'

export default function App() {
      const[mode ,setMode]= useState('light');
   
  const[alert ,setAlert] = useState(null);

  const showAlert =(message ,type)=>{
      setAlert({
        msg: message ,
        type : type
      })

      setTimeout(() => {
        setAlert(null)
      }, 1500);}

        const toggalMode =()=>{
    if (mode==='dark') {
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light Mode Enabled","success")
    } else {
      setMode('dark') 
      document.body.style.backgroundColor='black'
      showAlert("Dark Mode Enabled","success")
    }
  }
  return (
    <div>
      <Navbar title="BinGo"  mode={mode} toggalMode={toggalMode}/>
      <Alert alert={alert}/>
      <div className="container m-y-5">

      <TextForms showAlert={showAlert} heading= "Enter The Text To Analysis" text="this is your text analyser" textSummary="Your Text Summary"/>
      </div>
    </div>
  )
};




































// // import About from './About';
// import { useState } from 'react';
// // import Alert from './Alert';
// import './App.css';
// import Navbar from './Navbar';
// // import Carousel from './Carousel';
// import TextForms from './TextForms';

// function App() {
//   const[mode ,setMode]= useState('light');
//   const[alert ,setAlert] = useState(null);

//   const showAlert =(message ,type)=>{
//       setAlert({
//         msg: message ,
//         type : type
//       })

//       setTimeout(() => {
//         setAlert(null)
//       }, 1500);
//   }

//   const toggalMode =()=>{
//     if (mode==='dark') {
//       setMode('light')
//       document.body.style.backgroundColor='white'
//       showAlert("Light Mode Enabled","success")
//     } else {
//       setMode('dark') 
//       document.body.style.backgroundColor='black'
//       showAlert("Dark Mode Enabled","success")
//     }
//   }

  


//   return (
// <>
// <Navbar title= "BinGo" Mail= "Feedback" mode={mode} toggalMode={toggalMode}/>

// {/* <Alert alert={alert}/> */}

// {/* <div className="container  my-5">
// <TextForms showAlert={showAlert} heading= "Enter The Text To Analysis" text="this is your text analyser" textSummary="Your Text Summary"/>
// </div> */}

// {/* <Carousel/> */}
// </>
//   );
// }

// export default App;
