import { Component } from "react";
import MyNavbar from "./components/Navbar";
import './Pageprojet.css'

class Pageprojet extends Component{
    constructor(props) {
        super(props)
        this.state = {
            pagesprojets : []
        }
    }
    async componentDidMount() {
        const response = await fetch('http://localhost:1337/api/projets?populate=*',{
            method: 'GET',
            headers: {
                'Accept' : 'Application/json',
                'Content-Type' : 'Application/json'
            }
        })
        const pagesprojets = await response.json()
        this.setState({pagesprojets:pagesprojets})
        console.log(this.state.pagesprojets.data)
    }
    render() {
        let { id } = this.props.match.params;
        let short = this.state.pagesprojets.data
        return(
            <>
            <MyNavbar/>
            <div>
                {short && short.filter(pageprojet => pageprojet.id == id).map((pagesprojets,i)=><h2 id="h2numproj" key={i}>{pagesprojets.attributes.numero}</h2>)}
            </div>
            <div id="descriptionproj">
                {short && short.filter(pageprojet => pageprojet.id == id).map((pagesprojets,i)=><h3 id="h3nomproj" key={i}>{pagesprojets.attributes.nom}</h3>)}
                {short && short.filter(pageprojet => pageprojet.id == id).map((pagesprojets,i)=><p id="pproj" key={i}>{pagesprojets.attributes.description}</p>)}
            </div>
            <div>
                {short && short.filter(pageprojet => pageprojet.id == id).map((pagesprojets,i) =><img id="imgproj" alt="Rendu Projet" key={i} src={"http://localhost:1337"+pagesprojets.attributes.image.data.attributes.url}/>)}
            </div>
            <div id="descriptionproj">
                {short && short.filter(pageprojet => pageprojet.id == id).map((pagesprojets,i)=><p id="pproj" key={i}>{pagesprojets.attributes.rendu}</p>)}
            </div>
            </>
        );
    }
}
export default Pageprojet;