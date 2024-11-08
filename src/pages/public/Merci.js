import React, { Component } from 'react'


export class Merci extends Component {
render() {
return (
<div className="text-center">
<h1>Merci pour ton inscription et bienvenu ! </h1>
<img src="./merci-et-bienvenue.png" alt="Merci" width="500px"/>

<p>Tu peux desormais avoir accès à ton compte via ce lien: <a href="/mon-compte/">Mon compte</a> tu pourras alors :
<ul>
    <li>Manager ton compte</li>
    <li>Ajouter des photos de tes réalisation de tatouage</li>
    <li>Ajouter des Modèle de Flash à proposer aux visiteurs</li>
    <li>Créer la fiche de ton salon de tatouage</li>
    <li>Ajouter des articles d'actualité</li>
</ul>
</p>
</div>
)
}
}
export default Merci