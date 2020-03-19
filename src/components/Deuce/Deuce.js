import React from 'react';

const Deuce = ({deuce}) =>  (
    deuce === 1 ? <h2 className="alert alert-warning">Deuce!</h2> : null
)

export default Deuce;