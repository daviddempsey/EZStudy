import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import logo from "./logo.jpg";

console.log(logo);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      url: ""
    };
  }

  handleChange = ev => {
    this.setState({ success: false, url: "" });
  };
  // Perform the upload
  handleUpload = ev => {
    let file = this.uploadInput.files[0];
    // Split the filename to get the name and type
    let fileParts = this.uploadInput.files[0].name.split(".");
    let fileName = fileParts[0];
    let fileType = fileParts[1];
    console.log("Preparing the upload");
    axios
      .post("http://localhost:3001/sign_s3", {
        fileName: fileName,
        fileType: fileType
      })
      .then(response => {
        var returnData = response.data.data.returnData;
        var signedRequest = returnData.signedRequest;
        var url = returnData.url;
        this.setState({ url: url });
        console.log("Recieved a signed request " + signedRequest);

        // Put the fileType in the headers for the upload
        var options = {
          headers: {
            "Content-Type": fileType
          }
        };
        axios
          .put(signedRequest, file, options)
          .then(result => {
            console.log("Response from s3");
            this.setState({ success: true });
          })
          .catch(error => {
            alert("ERROR " + JSON.stringify(error));
          });
      })
      .catch(error => {
        alert(JSON.stringify(error));
      });
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
              <img className="logo" src={logo} alt="logo" />

              {/* <button class="buttons">Sign Up</button>
              <button class="buttons">Log In</button> */}
            </div>
            <h1 className="header">Create Your Study Guide</h1>
            <h2 className="subhead">Upload a File</h2>
            {this.state.success ? <Success_message /> : null}
            <input
              className="button1"
              onChange={this.handleChange}
              ref={ref => {
                this.uploadInput = ref;
              }}
              type="file"
            />
            <h2></h2>

            <br />
            <button className="button2" onClick={this.handleUpload}>
              UPLOAD
            </button>
            <span></span>
            <div className="steps">
              <section className="steps-container">
                <h1>How to create your Study Guide</h1>
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
            </div>
          </center>
        </div>
      </div>
    );
  }
}
export default App;
