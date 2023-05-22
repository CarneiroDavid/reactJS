const Identite = ({nom, prenom}) => {
    return (
        <>
            <section>Identité</section>
            <ul>
                <li>Nom : {nom}</li>
                <li>Prénom : {prenom}</li>
                <li>Job : Apprenti Développeur</li>
            </ul>
        </>
    );
}

export default Identite;