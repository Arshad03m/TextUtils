import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("");

    const handleOnChange = (event) => {
        // console.log("Handle on change")
        setText(event.target.value)
    }

    const handleUpClick = () => {
        // console.log("Upper case was clicked: " + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper Case", "success")
    }
    const handleLowClick = () => {
        // console.log("Upper case was clicked: " + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower Case", "success")
    }
    const handleClearClick = () => {
        // console.log("Upper case was clicked: " + text)
        let newText = "";
        setText(newText)
        props.showAlert("Text has been cleared", "success")
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        if (text.value.length > 0) {
            navigator.clipboard.writeText(text.value);
            props.showAlert("Text has been copied", "success")
        }
        else {
            props.showAlert("Enter the text to copy", "warning")
        }
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces has been removed", "success")
    }


    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#003f88' : 'white', color: props.mode === 'dark' ? 'white' : 'grey' }} id="myBox" rows="8"></textarea>
                    <button className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
                    <button className="btn btn-primary mx-1 my-2" onClick={handleLowClick}>Convert to LowerCase</button>
                    <button className="btn btn-primary mx-1 my-2" onClick={handleClearClick}>Clear Text</button>
                    <button className="btn btn-primary mx-1 my-2" onClick={handleCopy}>Copy Text</button>
                    <button className="btn btn-primary mx-1 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                </div>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                
                {/* <p>{text.split("\n").length} lines, {text.trim().split(/\s+/).length} words, {text.length} characters </p>  */}
                <p>
                    {text.length > 0 ? (
                        <>
                            {text.split("\n").length} lines, {text.trim().split(/\s+/).length} words, {text.length} characters
                        </>
                    ) : (
                        <>
                            0 lines, 0 words, 0 characters
                        </>
                    )}
                </p>

                <p>
                    {text.length > 0 ? 0.008 * text.trim().split(/\s+/).length : 0} minutes read
                </p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter something in textbox to preview it here'}</p>
            </div>
        </>
    )
}
