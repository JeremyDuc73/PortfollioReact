import React, { Component } from 'react';
import { Button, Container } from 'react-bootstrap';
import './Contact.css'
import MyNavbar from './components/Navbar';

class Contact extends Component{
  handleSubmit = (event) => {
    event.preventDefault()
    let prenom = event.target[0].value
    let nom = event.target[1].value
    let mail = event.target[2].value
    let message = event.target[3].value

    const infos = {
      "data":{
        "Prenom" : prenom,
        "Nom" : nom,
        "Mail" : mail,
        "Message" : message
      }
    }
    fetch('http://localhost:1337/api/contacts', {
        method: 'POST',
        headers:{
          'Content-type' : "application/json",
        },
        body : JSON.stringify(infos),
      })
      console.log(event.target[0].value);
      console.log(event.target[1].value);
      console.log(event.target[2].value);
      console.log(event.target[3].value);
  }
  render () {
    return (
      <>
      <MyNavbar/>
      <form onSubmit={this.handleSubmit}>
        <div id="formcontactdiv">
          <input type="text" required/>
          <label>Prénom</label>
        </div>
        <div id="formcontactdiv">
          <input type="text" required/>
          <label>Nom</label>
        </div>
        <div id="formcontactdiv">
          <input type="email" required/>
          <label>Adresse mail</label>
        </div>
        <div id="formcontactdiv">
          <textarea type="text" required></textarea>
          <label id="textarealabel">Message</label>
        </div>
        <Button id="contactbutton" type="submit">envoyer</Button>
      </form>
      <Container id="containersocial">
        <ul id="socialul">
            <li>
                <a href="https://www.facebook.com/profile.php?id=100007718383355" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
            </li>
            <li>
                <a href="https://twitter.com/KC_Nashoba" target="_blank"><i class="fa-brands fa-twitter"></i></a>
            </li>
            <li>
                <a href="https://www.instagram.com/jeremy.duc/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/j%C3%A9r%C3%A9my-duc-404b03221/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
            </li>
		    </ul>
      </Container>
      </>
    );
  }
}

export default Contact;