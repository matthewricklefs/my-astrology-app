import React from 'react'
import App from '../App'

export const SelectTimeframe = ({
    onTimeframeSelected,
}) => {
    return (
        <> 
            <h2>Please select a timeframe..</h2>
 
            {selectedSign}
 
            <div className='grid'>
                {['yesterday', 'today', 'tomorrow'].map(
                    (timeframes) => (
                        <button 
                        className="timeframe"
                        key={timeframes}
                        onClick={ () => 
                            onTimeframeSelected(timeframes) 
                        }  
                        > 

                        {sign} 
                        </button>
                ))}
            </div>
        </>
    )

}