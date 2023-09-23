import React from 'react'
import classes from './bookCard.module.css'
import Link from 'next/link'
import Image from 'next/image'

const BookCard = ({
  book
}) => {
  const coverImage = `https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`

  return (
    <Link href={`/details/${book.id}`} className={classes.container}>
        <div className={classes.wrapper}>
          <Image 
            src={coverImage}
            alt="book cover"
            height='275'
            width='175'
          />
        </div>
    </Link>
  )
}

export default BookCard