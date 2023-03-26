// import React from 'react'

// export default function TextForm() {
//   return (
//     <div>
      
//     </div>
//   )
// }



































































































































import React, { useState } from 'react'

export default function TextForms(props) {
    const [text, setText] = useState("")


    const upperCase = () => {

        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted To UpperCase")
        
    }
    const lowerCase = () => {
        
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted To lowerCase")
        
        
    }
    const cut = () => {
        
    //    // let newText = text.
     //   // setText(newText)
        setText("")
        props.showAlert("Text Deleted")
        
        
    }
    const removeSpace = () => {
        
        let newText = text.replace(/\s+/g, ' ').trim()
      
        setText(newText)
        
        props.showAlert("Removed Extra Space")
        
    }
    const Copy = () => {
        
        let copyText = document.getElementById("exampleFormControlTextarea1");
        
    //     // Select the text field
        copyText.select();
    //     // copyText.setSelectionRange(0, 99999); // For mobile devices
        
    //     // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);
        
    //     // Alert the copied text
    //     // alert("Copied the text: ");
        
        
        props.showAlert("Text Copied")
    // }
    // // function paste() {
    // //     if(window.clipboardData) {   
    // //       document.getElementById('exampleFormControlTextarea1').value = window.clipboardData.getData("Text");
    // //     } 
    // //    }
       
    // // const paste = () => {

    // //     // let pasteText = document.getElementById("exampleFormControlTextarea1");

    // //     // Select the text field
    // //     // pasteText.select();
    // //     // pasteText.onpaste();
    // //     // copyText.setSelectionRange(0, 99999); // For mobile devices

    // //     // Copy the text inside the text field
    // //     // navigator.clipboard.readText(pasteText.value);
    // //     // navigator.clipboard.readText(pasteText);
    // //     navigator.clipboard.readText();

    // //     // Alert the copied text
    // //     // alert("Copied the text: ");


    }
    const handleOnchange = (event) => {

        setText(event.target.value)
    }


    return (
        <div>

            <div className="container my-2">
                <h2 className={`enterTheTextToAnalyse text-${document.body.style.backgroundColor==='black'? 'light':'dark'}`}>{props.heading}</h2>

                <textarea className={`form-control `}id="exampleFormControlTextarea1" rows="10" value={text} onChange={handleOnchange} />


                <button className={` ${document.body.style.backgroundColor==='black'? 'btn btn-primary':'btn btn-success'}   my-2 `}type="submit" onClick={upperCase}>Convert To upperCase (ABC)</button>

                <button className={` ${document.body.style.backgroundColor==='black'? 'btn btn-primary':'btn btn-success'}  mx-2 my-2 `} type="submit" onClick={lowerCase}>Convert To LowerCase  (abc)</button>

                <button className={` ${document.body.style.backgroundColor==='black'? 'btn btn-primary':'btn btn-success'}  mx-2 my-2 `} type="submit" onClick={removeSpace}>Remove Space <i className="bi bi-eraser"></i> </button>

                <button className={` ${document.body.style.backgroundColor==='black'? 'btn btn-primary':'btn btn-success'}  mx-2 my-2 `} type="submit" onClick={Copy}>Copy <i className="bi bi-clipboard2-check"></i></button>
               
                <button className={` ${document.body.style.backgroundColor==='black'? 'btn btn-primary':'btn btn-success'}  mx-2 my-2 `} type="submit" onClick={cut} >Delete <i className="bi bi-trash3"></i> </button>




            </div>

            <h3 className={`textSummary text-${document.body.style.backgroundColor==='black'? 'light':'dark'} mx-2`}>{props.textSummary} <i className="bi bi-pencil-square"></i> :</h3>
            <p className={`textCounter  mx-3 text-${document.body.style.backgroundColor==='black'? 'light':'dark'} `}> <strong>{text.split(" ").length -1}</strong> :Words  and <strong>{text.length}</strong> : Charecter </p>

            <h3 className={`zoomOut mx-3 text-${document.body.style.backgroundColor==='black'? 'light':'dark'}`}>Text Zoom-In <i className="bi bi-zoom-in"></i>  :</h3>
            <h2 className={`zoomOut mx-3 text-${document.body.style.backgroundColor==='black'? 'light':'dark'}`}>{text}</h2>


        </div>
    )
}
