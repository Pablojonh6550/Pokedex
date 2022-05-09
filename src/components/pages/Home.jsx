import React from "react";
import CardRegion from "../page_components/CardRegion";

import './css/home.css';

function Home( props ) {
    const { regions } = props;
    
    return (
        <div className="home_container">
            <div className="home_cards">
                {regions && regions.map((region) => {
                    return (<CardRegion key={region.id} region={region.name}/>)
                })}
            </div>
            
        </div>
    );
}

export default Home;