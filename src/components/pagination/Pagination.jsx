import React from "react";

import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import './css/pagination.css';

function Pagination( props ) {
    const { page, totalPage, onLeftClick, onRightClick} = props;
    return (
        <div className="pagination_container">
            <button className="arrow" onClick={onLeftClick}><BsFillArrowLeftCircleFill /></button>
            <div className="pagination_page_number">
                <span>{page}</span> <span>/</span> <span>{totalPage}</span>
            </div>
            <button className="arrow" onClick={onRightClick}><BsFillArrowRightCircleFill /></button>
        </div>
    );

}

export default Pagination;