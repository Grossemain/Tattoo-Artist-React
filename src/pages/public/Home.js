import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SearchForm from "../../components/public/SearchBar/SearchForm";

export class Home extends Component {
  render() {
    return (
      <div>
        <Container className="HomeHeader">
          <Row>
            <div className="mt-4">
              <h1>
                Tattoo artist : Trouve ton tatoueur <span>en France</span>
              </h1>
            </div>
            <SearchForm />
          </Row>
        </Container>
        <div className="SectionBgColor-1">
        <Container className="HomeSection-1">
          <div>
            <Row>
              <h2 className="mt-4">
                Tu recherche ton tatoueur en France pour un tatouage ?
              </h2>
              <Col>
                <img srcset="home-tattoo-artist-500px.jpg 500w, home-tattoo-artist-350px.jpg 300w"
                sizes ="(max-width:515px) 300px, 500px"
                src="./home-tattoo-artist-500px.jpg," alt="tatoueur France" />
              </Col>
              <Col>
                <ul>
                  <li>
                    <span>Meilleur Tatoueur Français</span>
                  </li>
                  <p>
                    Chaque tatoueur à son style, son expérience et son
                    savoir-faire. Si tu veux le meilleur tatoueur, découvre
                    notre liste d’artistes.
                  </p>
                  <li>
                    <span>Tattoo shop Français</span>
                  </li>
                  <p>
                    Tu recherche un tattoo shop pour te renseigne sur ton projet
                    de tattoo? Notre liste de studio de tatouage Français
                    t'aiguillera vers ton futur tatoueur
                  </p>
                  <li>
                    <span>Tatoueurs par style</span>
                  </li>
                  <p>
                    Tu recherche un tatoueur dans un style particulier ? Sache
                    qu’en France, tu asle choix et c’est sur notre site que tu
                    trouverera tous les styles des tatoueurs Français.
                  </p>
                </ul>
              </Col>
            </Row>
          </div>
        </Container>
        </div>
        <Container className="HomeSection-2">
          <div>
          <h3>Comment choisir son tatoueur?</h3>
          <div className="separatorCenter">
          <span className="separator"></span>
          </div>
            <Row>
                <Col className="ColTextAlignRight">
                    <h4>Le style graphique</h4>

                  <p>
                    Le style du Tattoo à forcément une importance dans le choix
                    du tatoueur. Tu pourras choisir un tatoueur qui fait du
                    tatouage alimentaire (un peu de tout) ou un tatoueur qui à
                    son propre style graphique qu’il maîtrise à la perfection.
                  </p>


                    <h4>La réputation</h4>

                  <p>
                    Un bon tatoueur se fait toujours connaître via son travail.
                    Si son travail est bon, on parlera naturellement de lui dans
                    les magazines spécialisés, sur les réseaux sociaux
                    (Instagram, Pinterest, Tik Tok), internet mais aussi via le
                    bouche à oreille.
                  </p>


                    <h4>La certification d'hygiène</h4>

                  <p>
                    La certification d’hygiène est obligatoire pour les
                    tatoueurs. Cette certification ainsi que la déclaration à
                    l’ARS (Agence régionale de santé) doit être affichés chez
                    votre tatoueur pour être sûr que l’artiste connaît et
                    respecte l’hygiène pour la création d’un tatouage.
                  </p>


                    <h4>La disponibilité</h4>

                  <p>
                    Les tatoueurs réputés sont souvent vite « bookés », parfois
                    leur agenda peut être plein pour plusieurs mois, voire une
                    année complète. N'hésite pas à prendre rapidement
                    rendez-vous pour planifier tes séances surtout si tu es
                    pressé.
                  </p>
                </Col>
                <Col className="ColTextAlignLeft">

                    <h4>Le prix</h4>

                  <p>
                    Tous les tatoueurs ne pratiquent pas les mêmes tarifs pour
                    un tatouage. En effet, selon la maîtrise de son art, son
                    expérience ou sa réputation, le prix du tatouage peut
                    changer. En règle générale un tatoueur calcule son Taux
                    journalier moyen pour ensuite évaluer le prix du tatouage en
                    fonction du temps qu’il va passer dessus.
                  </p>

                    <h4>Les avis</h4>

                  <p>
                    Les avis de tatoueurs sont probablement les éléments de
                    détermination dans le choix de son tatoueur. Pour récolter
                    des avis, rendez-vous sur les plateformes spécialisées ou
                    directement sur Google via les avis Google. Tu pourras aussi
                    contacter les clients des tatoueurs pour savoir comment se
                    sont passées les séances de tatouage dans le studio.
                  </p>


                    <h4>Le tattoo shop</h4>

                  <p>
                    Pour choisir ton tatoueur, assurez-toi qu’il tatou dans les
                    bonnes conditions d’hygiène et que le studio de tatouage est
                    bien accessible. N’hésite pas à demander à visiter le shop
                    et la pièce dédiée aux séances de tatouage pour te rassurer.
                  </p>


                    <h4>Studio privé ou public</h4>

                  <p>
                    De plus en plus de tatoueurs ouvrent leur studio en privé.
                    Cela veut dire que le shop n’est pas ouvert au public et que
                    tous les renseignements sont pris par mail ou visio. Le but
                    de cette démarche est d’être concentré à 100% sur la
                    création et le tatouage sans être dérangé.
                  </p>
                </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}
export default Home;
