import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <article>
      <h2>Welcome to the Library of Computer Science</h2>
      <p>
        Check out our amazing selection in our <Link to="/books">catalog</Link>
      </p>
    </article>
  )
}
