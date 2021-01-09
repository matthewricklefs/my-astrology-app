import React, { useEffect, useState } from 'react'

import { getSigns } from '../services/api'

import App from '../App'



export const SelectSign = ({ onSignSelected }) => {
    
    const [signs, setSigns ] = useState([])

    useEffect( () => {
        getSigns().then(setSigns)   
      }, [] )
    
    return (
       <> 
            <h2>Please select a sign</h2>

            {selectedSign}

            <div className='grid'>
                {signs.map((sign) => (
                    <button 
                    className='sign'
                    key={sign}
                    onClick={ () => setSelectedSign(sign) }  
                    > 

                    {sign} 
                    </button>
                ))}
            </div>
        </>
    )
}