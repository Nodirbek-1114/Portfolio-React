
const Header = () => {
    // let them="dark";
    // const headerStyle = {
    //     backgroundColor: them==="dark" ? "#333452" : "#fff"
    // }
    

    return (
        <>
            <header style={headerStyle}>
                <div className="container-header">
                    <nav className="nav">
                        <ul className="nav__ul">
                            <li className="nav__ul--list">
                                <a href="#" className="nav__ul--list-link">Works</a>
                            </li>
                            <li className="nav__ul--list">
                                <a href="#" className="nav__ul--list-link">Blog</a>
                            </li>
                            <li className="nav__ul--list">
                                <a href="#" className="nav__ul--list-link">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header