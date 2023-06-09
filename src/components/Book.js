import React from 'react'

export default function Book({ books }) {
    return (
        <div>
            <h2>{books.name}</h2>
            <h3>{books.author}</h3>
            <button type='button'>Delete</button>
        </div>
    )
}
