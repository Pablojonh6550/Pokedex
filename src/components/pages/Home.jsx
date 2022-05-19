import React from "react";
import { Link } from "react-router-dom";
import CardRegion from "../page_components/CardRegion";

import './css/home.css';

function Home(props) {
    const { setVisible } = props;

    const onVisible = () => {
        setVisible(true);
    }
    return (
        <div className="home_comtainer_main">
            <div className="home_region_all">
                <Link to="/pokedex" onClick={onVisible} ><CardRegion key='0' region="Pokedex" /></Link>
            </div>
            
            <div className="home_container">
                <div className="home_cards">
                 <Link to="/region"><CardRegion key='1' region="Regiões" /></Link>
                
                 <Link to="/fruit"><CardRegion key='2' region="Frutas" /></Link>
                
                 <Link to="/itens"><CardRegion key='3' region="Itens" /></Link>
               
                 <Link to="/"><CardRegion key='4' region="algo" /></Link>
                </div>
            </div>
        </div>
    );
}

export default Home;