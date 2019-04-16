import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ricardoPic from './Images/RicardoPic.jpg';
import richardPic from './Images/RichardPic.jpeg';
import alexPic from './Images/AlexPic.jpg';
import austinPic from './Images/AustinPic.jpg';
import ericPic from './Images/EricPic.jpg';
import gordonPic from './Images/GordonPic.jpg';
import kylePic from './Images/KylePic.jpg';
import philipPic from './Images/PhilipPic.JPG';
import simonPic from './Images/SimonPic.jpeg';
import tenshiPic from './Images/TenshiPic.jpg';
import estherPic from './Images/EstherPic.jpg';

class App extends Component {

  state = { rotating: true }

  toggleRotate = () => {
    console.log("rotating is currently: " + this.state.rotating)
    this.setState({ rotating: !this.state.rotating})
  }

  render() {
    const rotation = this.state.rotating ? 'App-logo' : 'end-rotate';
    return (
    <div className="App">

      <h1>Team B.E.E.R</h1>
      <h3>(Bad Engineers Enjoy Rum)</h3>

      <header>
      <p>We seek to employ TACOS with every deliverable... That is to say
      we are</p>
      <ul className="mission-statement">
        <li><strong>T</strong>ransparent</li>
        <li><strong>A</strong>ll In</li>
        <li><strong>C</strong>ustomer <strong>O</strong>riented</li>
        <li><strong>S</strong>crappy</li>

      </ul>
      </header>

      <header className="App-header">
        <a onClick={this.toggleRotate} href="#"><img src={ricardoPic} className={`${rotation}`} alt="logo"/></a>
        <p>
          Ricardo Molina - Leader
          <br></br>
          Contact info
          <br></br>
          Telephone: (619) 587-1009
          <br></br>
          Email: r3molina@ucsd.edu
        </p>
      </header>


      <header className="App-header">
        <a onClick={this.toggleRotate} href="#"><img src={richardPic} className={`${rotation}`} alt="logo"/></a>
        <p>
          Richard Pena - Co Leader
          <br></br>
          Contact info
          <br></br>
          Telephone: (310) 779-5258
          <br></br>
          Email: penarichard53@gmail.com
        </p>
      </header>



      <header className="App-header">
        <a onClick={this.toggleRotate} href="#"><img src={alexPic} className={`${rotation}`} alt="logo"/></a>
        <p>
        Donghak Alex Oh - Coder
          <br></br>
          Contact info
          <br></br>
          Telephone: (619) 314-2950
          <br></br>
          Email: d4oh@ucsd.edu
        </p>
      </header>



      <header className="App-header">
        <a onClick={this.toggleRotate} href="#"><img src={gordonPic} className={`${rotation}`} alt="logo"/></a>
        <p>
        Gordon Hu - Developer Operations
          <br></br>
          Contact info
          <br></br>
          Telephone: (425) 281-5231
          <br></br>
          Email: gohu@ucsd.edu
        </p>
      </header>

      <header className="App-header">
        <a onClick={this.toggleRotate} href="#"><img src={austinPic} className={`${rotation}`} alt="logo"/></a>
        <p>
        Austin Moss-Ennis - Quality Assurance
          <br></br>
          Contact info
          <br></br>
          Telephone: (661) 301-0301
          <br></br>
          Email: amossenn@ucsd.edu
        </p>
      </header>

      <header className="App-header">
        <a onClick={this.toggleRotate} href="#"><img src={ericPic} className={`${rotation}`} alt="logo"/></a>
        <p>
        Eric Khoi Huynh - Developer Operations
          <br></br>
          Contact info
          <br></br>
          Telephone: (408) 550-4171
          <br></br>
          Email: e7huynh@ucsd.edu
        </p>
      </header>


      <header className="App-header">
        <a onClick={this.toggleRotate}><img src={kylePic} className={`${rotation}`} alt="logo"/></a>
        <p>
        Kyle Burt - Tools And Utility
          <br></br>
          Contact info
          <br></br>
          Telephone: (619) 456-7136
          <br></br>
          Email: k1burt@ucsd.edu
        </p>
      </header>

      <header className="App-header">
        <a onClick={this.toggleRotate}><img src={simonPic} className={`${rotation}`} alt="logo"/></a>
        <p>
        Simon Giraud - Coder
          <br></br>
          Contact info
          <br></br>
          Telephone: 3 (364) 761-1158
          <br></br>
          Email: simon.giraud007@gmail.com
        </p>
      </header>

      <header className="App-header">
        <a onClick={this.toggleRotate}><img src={tenshiPic} className={`${rotation}`} alt="logo"/></a>
        <p>
        Tenshi Mori - Tools And Utility
          <br></br>
          Contact info
          <br></br>
          Telephone: (929) 276-2718
          <br></br>
          Email: temori@ucsd.edu
        </p>
      </header>

      <header className="App-header">
        <a onClick={this.toggleRotate}><img src={philipPic} className={`${rotation}`} alt="logo"/></a>
        <p>
        Phillip Jo
          <br></br>
          Contact info
          <br></br>
          Telephone: (714) 904-8485
          <br></br>
          Email: yulshimi4@gmail.com
        </p>
      </header>

      <header className="App-header">
        <a onClick={this.toggleRotate}><img src={estherPic} className={`${rotation}`} alt="logo"/></a>
        <p>
        Esther Zhao
          <br></br>
          Contact info
          <br></br>
          Telephone: (626) 872-8281
          <br></br>
          Email: ewzhao@ucsd.edu
        </p>
      </header>

    </div>
    );
  }
}

export default App;
