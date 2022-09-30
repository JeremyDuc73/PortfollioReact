import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import MyNavbar from "./components/Navbar";
import Projet from "./components/Projet";


class ListeProjets extends Component{
    constructor(props){
        super(props);
        this.state = {
            projets : []
        }
    }
    async componentDidMount() {
        const response = await fetch('http://localhost:1337/api/projets?populate=*', {
            method: 'GET',
            headers: {'Accept': 'application/json', 'Content-Type' : 'application/json'}
        })
        const projets = await response.json()
        this.setState({projets:projets})
    }
    render() {
        let short = this.state.projets.data;
        return(
            <>
            <MyNavbar/>
            <Container>
                <Row>
                    {short && short.map((projets,i)=><Projet projet = {projets} key={i}/>)}
                </Row>
            </Container> 
            </>
        );
    }
}
export default ListeProjets;