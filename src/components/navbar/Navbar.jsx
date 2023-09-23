"use client"
import React from 'react'
import classes from './navbar.module.css'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const { data: session } = useSession()
  const books = useSelector((state) => state.cart.books)

  const isLoggedIn = Boolean(session?.user)

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Link href='/' className={classes.left}>
          <h2>WebDevMania</h2>
        </Link>
        <div className={classes.right}>
          {
            isLoggedIn
              ? (
                <button onClick={() => signOut()} className={classes.logoutButton}>
                  Logout
                </button>
              )
              : (
                <>
                  <button onClick={() => signIn()} className={classes.login}>
                    Log in
                  </button>
                  <Link href='/register' className={classes.register}>
                    Register
                  </Link>
                </>
              )
          }
          {
            isLoggedIn &&
            <Link href='/cart' className={classes.cartContainer}>
              <AiOutlineShoppingCart className={classes.cartIcon} />
              <span className={classes.cartQuantity}>
                {books?.length}
              </span>
            </Link>
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar