const Projet = ({img, nom, lien}) => {
    return (
        <>
        <h2>Je suis le projet : {nom}</h2>
        <img src={img} alt={nom}/>
        <a href={lien} title={nom}>Redirection</a>
        </>
    )
}

export default Projet