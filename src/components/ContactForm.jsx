import "./ContactForm.scss";
import Terre from "../assets/Planet-Earth.png";

const ContactForm = () => {
  return (
    <>
    <div class="bg-animation">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>
      </div>
    <form>
      <div className="formulaire">
        <div className="tete-formulaire">
          <div className="image-position">
          <img src={Terre} alt="Planete Terre" />
          </div>
          <h1>Nous contacter</h1>
          <div className="question">
            <h2>Une question ? Nous sommes là pour y répondre.</h2>
          </div>
        </div>
        <p className="info-perso">Informations personnelles :</p>
        <div className="identite">
          <div className="boite-1">
            <label className="label-style">Prénom </label>
            <label className="label-style">Nom</label>
          </div>
          <div className="boite-2">
            <input placeholder="ex : Jean" type="text" required />
            <input placeholder="ex : Dubois" type="text" required />
          </div>
        </div>
        <div className="mail">
          <label>Email *</label>
          <input placeholder="ex : jeandubois@gmail.com" type="text" required />
        </div>
        <div className="pied-formulaire">
          <div className="message">
            <label>Message</label>
            <textarea placeholder="Ecrivez votre message ici"></textarea>
          </div>
          <div className="bouton">
            <button>Envoyer</button>
          </div>
        </div>
      </div>
    </form>
    </> 
  );
};
export default ContactForm;
