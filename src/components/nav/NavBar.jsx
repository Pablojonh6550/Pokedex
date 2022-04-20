import React from "react";

import './css/navbar.css';

function NavBar() {
    const logo_pokedex = 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png';

    return (
            <nav>
                <div>
                    <img src={logo_pokedex} alt="logo_pokedex" className="navbar_logo" />
                </div>
            </nav>
    );
}

export default NavBar;