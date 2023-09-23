import React from 'react'
import woman_image from '../../app/assets/woman.jpg'
import classes from './reviewCard.module.css'
import { format } from 'timeago.js'
import Image from 'next/image'

const ReviewCard = ({
  review
}) => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.top}>
          <Image
            src={woman_image}
            alt=""
          />
          <div>
            <h3>{review?.userId?.username}</h3>
            <span>
              {format(review?.createdAt)}
            </span>
          </div>
        </div>
        <div className={classes.bottom}>
          <p className={classes.desc}>
            {review?.desc}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard