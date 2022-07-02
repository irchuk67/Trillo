import React from "react";
import ButtonArrow from "../../Components/Buttons/button-arrow";
import './user-reviews.scss';

let UserReviews = ({reviews}) => {
    let reviewList = reviews.map((review) => {
        return(
            <figure className={'review'}>
                <p className="review__text">{review[0]}</p>
                <figcaption className="review__user">
                    <img src={review[1]} alt="user photo" className="review__user__photo"/>
                    <div className="review__user__box">
                        <p className="review__user__name">{review[2]}</p>
                        <span className="review__user__review-date">{review[3]}</span>
                    </div>
                    <div className="review__rate">
                        {review[4]}
                    </div>

                </figcaption>
            </figure>
        )
    })

    return(
        <figure className="user-reviews">
            {reviewList}
            <ButtonArrow text={'Show all'}/>
        </figure>
    )
}

export default UserReviews;