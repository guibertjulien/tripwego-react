import React from 'react'

import './Card.css'

const PUBLIC_SYMBOL = 'PUBLIC'
const PRIVATE_SYMBOL = 'PRIVATE'

const Card = ({name, startDate, nbDays, tags, published}) => {
    <div className="card">
        <h1>{name}</h1>
        <span>
            {published === 'true' ? PUBLIC_SYMBOL : PRIVATE_SYMBOL}
        </span>
    </div>
}
export default Card