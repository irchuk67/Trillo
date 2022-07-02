import React from 'react';
import './description.scss';

let Description = ({listPoints, usersPhotos}) => {
    let list = listPoints.map((item)=>{return <li className={'list__item'}>{item}</li>})

    let icons = usersPhotos.map((photo) => <img src={photo} alt={`${photo} `} className="recommendations__photo"/>);

    return(
        <div className="description">
            <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
            </p>
            <p className="paragraph">
                Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam.
            </p>
            <ul className="list">
                {list}
            </ul>
            <div className="recommendations">
                <p className="recommendations__text">
                    Lucy and 3 other friends recommend this hotel
                </p>
                <div className="recommendations__friends">
                    {icons}
                </div>

            </div>
        </div>
    )
}

export default Description;