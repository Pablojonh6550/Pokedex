import React from 'react'
import { Link } from 'react-router-dom';
import CardRegion from '../page_components/CardRegion';

import './css/regionpage.css'; 

function RegionPage(props) {
    const { regions } = props;
    return (
        <div className='region_container_main'>
            <div className="region_name">
                <h1>Regiões</h1>
            </div>
            <div className="region_container">
                <div className="region_cards">
                    {regions && regions.map((region) => {
                        return (<Link to='/region'><CardRegion key={region.id} region={region.name} /></Link>)
                    })}
                </div>
            </div>
        </div>
    );
}

export default RegionPage;