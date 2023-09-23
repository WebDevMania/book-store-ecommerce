import React, { useCallback, useEffect, useState } from 'react'
import classes from './reviewModal.module.css'
import { AiOutlineClose } from 'react-icons/ai'
import { useSession } from 'next-auth/react'

const ReviewModal = ({
  handleHideModal,
  bookId
}) => {
  const { data: session } = useSession()
  const [rating, setRating] = useState(1)
  const [desc, setDesc] = useState("")

  // make escape key close the review modal
  const escapeFunction = useCallback((event) => {
    if (event.key === 'Escape') {
      handleHideModal()
    }
  })

  useEffect(() => {
    document.addEventListener("keydown", escapeFunction, false)

    return () => {
      document.removeEventListener("keydown", escapeFunction, false)

    }
  }, [escapeFunction])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      if (!rating || !desc) {
        return
      }

      const headers = {
        "Authorization": `Bearer ${session?.user?.accessToken}`,
        "Content-Type": "application/json"
      }

      const body = {
        rating: Number(rating),
        desc,
        bookId,
        userId: session?.user?._id
      }

      const res = await fetch("http://localhost:3000/api/review", {
        headers,
        method: "POST",
        body: JSON.stringify(body)
      })

      console.log(await res.json())

      if (res.ok) {
        window.location.reload()
        handleHideModal()
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2 className={classes.title}>
          Write a review
        </h2>
        <form onSubmit={handleSubmit}>
          <input type="number" step={0.1} min={1} max={10} onChange={(e) => setRating(e.target.value)} placeholder="8.5" />
          <input type="text" onChange={(e) => setDesc(e.target.value)} placeholder="This book is a pleas...." />
          <button>
            Submit
          </button>
        </form>
        <AiOutlineClose
          className={classes.closeIcon}
          size={20}
          onClick={handleHideModal}
        />
      </div>
    </div>
  )
}

export default ReviewModal