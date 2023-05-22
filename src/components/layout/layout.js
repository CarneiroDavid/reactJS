const Layout = ({children}) =>{
    return(
        <>
        <header>
            <p>Je suis header</p>
        </header>
        <main>
            {children}
        </main>
        <footer>
            <p>Je suis le footer</p>
        </footer>
        </>
    );
}

export default Layout;