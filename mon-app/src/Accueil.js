import React, { Component } from "react";
import { Container } from "react-bootstrap";
import MyNavbar from "./components/Navbar";
import img_jeremy from './img/moi.jpg';
import gamingcampus from './img/gamingcampus.png'
import './Accueil.css';
import { Link } from "react-router-dom";

class Accueil extends Component{
    render() {
        return (
        <> 
        <MyNavbar/>
        <Container>
            <div id="presentation">
                <img id="moi" src={img_jeremy} alt="Jérémy DUC"></img>
                <div id="persocontent">
                    <h2>Jérémy Duc<br/><span>Etudiant en Informatique</span></h2>
                    <hr id="hrpresentation"/>
                    <p id="ppresentation">Je m'appelle Jérémy DUC, je suis étudiant en Informatique. Je viens de Savoie, j'aime le ski, les jeux vidéos et la culture japonaise. J'aime également la programmation et passer du bon temps avec des amis.</p>
                </div>
            </div>
        </Container>
        {/* <Container>
            <div id="presentation">
                <h2 id="h2projetpro">Projet Professionnel</h2>
                <div id="projetprocontent">
                    <hr id="hrpresentation"/>
                    <p id="ppresentation">En étudiant au GAMING CAMPUS de Lyon j'aspire à devenir Lead Developer c'est-à-dire chef d'équipe de dévoleppement dans un studio de jeux vidéos. Pour cela il faudra acquérir tout au long du cursus de l'école des compétences solides et diversifiées. Je pense que la motivation et la passion sont deux de mes atouts les plus importants pour parvenir à mon but. En début de carrière je devrais cependant commencer en tant que développeur mais cela est normal pour tout type de carrière en sortie d'études.</p>
                    <hr id="hrpresentation"/>
                    <img id="gamingcampus" src={gamingcampus} alt="Gaming Campus Logo"></img>
                </div>
            </div>
        </Container> */}
        <Container id="CV">
            <h3>Pour télécharger mon CV :</h3>
            <a id="CVbutton" href='./fichiers/Jeremy DUC.pdf' download>Cliquer ICI</a>
        </Container>
        
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
        <Link to="/Contact" id="contactbutton">Me contacter</Link>
        </Container>
        </>
        );
    }
}

export default Accueil;