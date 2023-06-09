import React from 'react'

export default function Form() {
    return (
        <div>
            <form action="post">
                <input type="text" placeholder='Book Title' />
                <input type="text" placeholder='Book Author' />
                <button type='button'>Add Book</button>
            </form>
        </div>
    )
}
