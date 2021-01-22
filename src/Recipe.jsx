import React from 'react';

let Recipe=({label, calori, image, totalTime})=>{
return(
    <div class="row">
        <div class="col-sm-6">
            <div className="card" style={{width: '20rem'}}>
                <img className="card-img-top" src={image} alt={label}/>
                <div className="card-body">
                    <strong className="card-title">{label}</strong>
                    <p className="card-text"><strong>Calories- </strong> {calori}</p>
                    <p className="card-text"><strong>Total Time- </strong>{totalTime}</p>
                </div>
            </div>
        </div>
    </div>
)

}

export default Recipe