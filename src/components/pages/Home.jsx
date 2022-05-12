import React from "react";
import { Link } from "react-router-dom";
import CardRegion from "../page_components/CardRegion";

import './css/home.css';

function Home( props ) {
    const { regions } = props;
    // const id = regions.map((region) => {
    //     return region.id;
    // })
    // setId(id);
    return (
        <div className="home_comtainer_main">
            <div className="home_region_all">
                <Link to="/pokedex_all"><CardRegion key='9' region="Pokedex"/></Link>
            </div>
            <div className="home_region_name">
                <h1>Regiões</h1>
            </div>
            <div className="home_container">
            <div className="home_cards">
                {regions && regions.map((region) => {
                    return (<Link to="/kanto"><CardRegion key={region.id} region={region.name} /></Link>)
                })}
            </div>
            
        </div>
        </div>
    );
}

export default Home;