import logo from './madara.png';
import logoEntreprise from './uwu.png';
import './App.css';
// import Layout from './components/layout/layout';
// import Projet from './components/projet';
// import Logo from './logo.svg';
import Identite from './components/identite/identite';
import Competence from './components/competence/competence';
import Experience from './components/experience/experience';
import Formation from './components/formation/formation';
import CentreInteret from './components/centreinteret/centreinteret';
import Lien from './components/url/url';
import ProjetD from './components/projet/projet';

function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <div className="images">
            <img src={logo} className="App-logo" alt="logo" />

          </div>

          <h1>Développeur Web Junior</h1>
          <Identite nom={user.nom} prenom={user.prenom}/>
          <Competence></Competence>
          <Experience></Experience>
          <Formation></Formation>
          <CentreInteret></CentreInteret>
          <Lien></Lien>
          <ProjetD></ProjetD>
        </header>
      </div>
      <img src={logoEntreprise} className="troll-logo" alt="logo" />

    </div>
  );
}

export default App;
