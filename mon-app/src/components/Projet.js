import { Link } from 'react-router-dom';
import './Projet.css'
function Projet (props) {
    return(
        <>
        <div class="card">
			<div class="box">
				<div class="content">
					<h2>{props.projet.attributes.numero}</h2>
					<h3>{props.projet.attributes.nom}</h3>
					<Link to={"/Projet/" + props.projet.id}  id="projetlink">Aller à la page</Link>
				</div>
			</div>
        </div>
        </>
    )
}
export default Projet;