import React, { Component } from "react";
// import {Link} from 'react-router';
import axios from "axios";
import "./App.css";
import logo from "./logo.jpg";
import { tsConstructorType } from "@babel/types";

console.log(logo);

function refreshPage() {
  window.location.reload();
}

const ProgressBar = (props) => {
  return (
    <div className="progress-bar">
        <Filler percentage={props.percentage} />
    </div>
  )

}

const Filler = (props) => {
  return <div className="filler" style={{width: ${props.percentage}% }} />
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: [],
      success: false,
      url: "", 
      percentage: 0 
    };
    this.nextStep = this.nextStep.bind(this)
  }

  nextStep() {
    if(this.state.percentage === 100) return 
    this.setState(prevState => ({ percentage: prevState.percentage + 100 }))
  }

  handleChange = ev => {
    this.setState({ link: this.state.link, success: false, url: "" });
  };

  testStuff = () => {
    const newLink = this.state.link;
    newLink.push(
      "https://www.https://ezstudy-inputs.s3-us-west-1.amazonaws.com/Uploaded+Notes/The+Allied+Powers+(1).pdf.com"
    );
    this.setState({ link: newLink, success: false, url: "" });
  };

  // Perform the upload
  handleUpload = ev => {
    let file = this.uploadInput.files[0];
    // Split the filename to get the name and type
    let fileParts = this.uploadInput.files[0].name.split(".");
    let fileName = fileParts[0];
    let fileType = fileParts[1];
    console.log("Preparing the upload");
  };

  render() {
    const Success_message = () => (
      <div style={{ padding: 50 }}>
        <h3 style={{ color: "green" }}>SUCCESSFUL UPLOAD</h3>
        <a href={this.state.url}>Access the file here</a>
        <br />
      </div>
    );
    return (
      <div className="parent">
        <div className="App">
          <center>
            <div className="top">
              <button className="imgbutton" type="button" onClick={refreshPage}>
                <img className="logo" src={logo} alt="logo" />
              </button>
            </div>
            <h1 className="header">Online Study Guide Creator</h1>
            <h2 className="subhead">Create Your Study Guide!</h2>
            {this.state.success ? <Success_message /> : null}
            {/* <label class="custom-file-upload"> */}
              {/* Choose File */}
              <input
                className="button1"
                onChange={this.handleChange}
                ref={ref => {
                  this.uploadInput = ref;
                }}
                type="file"
              />
            {/* </label> */}
            <h2> </h2>

            <br />
            <div>
            <button className="button2" onClick={this.nextStep}>UPLOAD</button>
            </div>
            <div>
              <ProgressBar percentage={this.state.percentage} />
            </div>

            <div className="steps">
              <section className="steps-container">
                <h1 className="how-to">How to create your Study Guide</h1>
                <ol className="descrips">
                  <li className="descriptions">
                    Select the "Choose File" button.
                  </li>
                  <li className="descriptions">
                    Select the Word, Excel, PowerPoint, PDF or other file you
                    wish to convert.
                  </li>
                  <li className="descriptions">
                    Our converter will convert your PDF into a Study Guide ready
                    for download!
                  </li>
                  <li className="descriptions">
                    Save that file and get your study on!
                  </li>
                </ol>
              </section>
              <button
                className="guide"
                value="Study Guide"
                onClick={this.testStuff}
              >
                Click HERE for your Study Materials!
              </button>
              <h1> </h1>
              {this.state.link.map(link => {
                return (
                  <div className="outputs"> 
                    <a
                      href="https://ezstudy-inputs.s3-us-west-1.amazonaws.com/Uploaded+Notes/The+Allied+Powers+(1).pdf"
                      className="links"
                    >
                      Study Guide
                    </a>

                    {/* <a
                    href="https://ezstudy-inputs.s3-us-west-1.amazonaws.com/Uploaded+Notes/The+Allied+Powers+(1).pdf"
                    className="links"
                    >
                    Wikipedia Link
                  </a> */}
                  </div>
                );
              })}
            </div>
          </center>
        </div>
      </div>
    );
  }
}
export default App;