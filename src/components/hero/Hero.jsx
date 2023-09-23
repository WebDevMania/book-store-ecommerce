import React from 'react'
import classes from './hero.module.css'

const Hero = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2 className={classes.title}>Find your books here</h2>
        <p className={classes.desc}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, placeat consectetur.
        </p>
        <div className={classes.inputContainer}>
          <input type="email"  placeholder="johndoe@gmail.com" />
          <button>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Hero