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

const competences = [
    { nom: 'PHP' },
    { nom: 'JavaScript' },
    { nom: 'SQL' },
    { nom: 'HTML/CSS' }
]
const experiences = [
    { nom: 'Stage en tant que Développeur chez Event2Give', date: '2020-2021' },
    { nom: 'Alternance en tant qu\'Aprentit Développeur chez QUALICONSULT', date: '2021-2023' }
]
const formations = [
    { nom: 'BAC PRO ELEEC', date: '2015 - 2018' },
    { nom: 'BTS SIO', date: '2020-2022' },
    { nom: 'Bachelor DEV FULL STACKS', date: '2022-2023' }
]
const interets = [
    { nom: 'Sport ', type: "Muscul / Foot" },
    { nom: 'Jeu-vidéo', type: 'LOL' },
    { nom: 'Patisserie', type: 'Tiramisu / Tarte Framboise' }
]

function App() {
    return (
        <div>
            <div className="App">
                <header className="App-header">
                    <div className="images">
                        <img src={logo} className="App-logo" alt="logo" />

                    </div>
                    <h1>Développeur Web Junior</h1>


                    <div className="block-div">
                        <Identite nom='Carneiro' prenom='David' />

                    </div>
                    <div className="block-div">
                        <section>Compétences</section>
                        <ul>
                            {competences.map((competence) => {
                                return <Competence nom={competence.nom}></Competence>

                            })}
                        </ul>
                    </div>

                    <div className="block-div">
                        <section>Expérience</section >
                        <ul>
                            {experiences.map((experience) => {
                                return <Experience nom={experience.nom} date={experience.date}></Experience>
                            })}
                        </ul>
                    </div>

                    <div className="block-div">
                        <section>Formations</section>
                        <ul>
                            {formations.map((formation) => {
                                return <Formation date={formation.date} nom={formation.nom}></Formation>
                            })}
                        </ul>
                    </div>
                    <div className="block-div">
                        <section>Centre d'intéret</section>
                        <ul>
                            {interets.map((interet) => {
                                return <CentreInteret nom={interet.nom} type={interet.type}></CentreInteret>
                            })}
                        </ul>
                    </div>

                    <div className="block-div">
                        <Lien></Lien>

                    </div>
                    <div className="block-div">
                        <ProjetD></ProjetD>
                    </div>
                </header>
            </div>
            <img src={logoEntreprise} className="troll-logo" alt="logo" />

        </div>
    );
}

export default App;
