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
        <header className="App-header">
          <img src={ricardoPic} className={`${rotation}`} alt="logo"/>
          <p onClick={this.toggleRotate} >
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
  <img src={richardPic} className={`${rotation}`} alt="logo"/>
  <p onClick={this.toggleRotate} >
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
  <img src={alexPic} className={`${rotation}`} alt="logo"/>
  <p onClick={this.toggleRotate} >
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
  <img src={gordonPic} className={`${rotation}`} alt="logo"/>
  <p onClick={this.toggleRotate} >
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
  <img src={austinPic} className={`${rotation}`} alt="logo"/>
  <p onClick={this.toggleRotate} >
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
  <img src={ericPic} className={`${rotation}`} alt="logo"/>
  <p onClick={this.toggleRotate} >
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
  <img src={kylePic} className={`${rotation}`} alt="logo"/>
  <p onClick={this.toggleRotate} >
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
  <img src={simonPic} className={`${rotation}`} alt="logo"/>
  <p onClick={this.toggleRotate} >
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
  <img src={tenshiPic} className={`${rotation}`} alt="logo"/>
  <p onClick={this.toggleRotate} >
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
  <img src={philipPic} className={`${rotation}`} alt="logo"/>
  <p onClick={this.toggleRotate} >
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
  <img src={estherPic} className={`${rotation}`} alt="logo"/>
  <p onClick={this.toggleRotate} >
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
