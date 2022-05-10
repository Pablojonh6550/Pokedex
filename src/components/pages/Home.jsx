import React from "react";
import { Link } from "react-router-dom";
import CardRegion from "../page_components/CardRegion";

import './css/home.css';

function Home( props ) {
    const { regions } = props;
    
    return (
        <div className="home_comtainer_main">
            <div className="home_region_all">
                <Link to="/pokedex_all"><CardRegion key="all" region="Pokedex"/></Link>
            </div>
            <div className="home_region_name">
                <h1>Regiões</h1>
            </div>
            <div className="home_container">
            <div className="home_cards">
                {regions && regions.map((region) => {
                    return (<CardRegion key={region.id} region={region.name}/>)
                })}
            </div>
            
        </div>
        </div>
    );
}

export default Home;