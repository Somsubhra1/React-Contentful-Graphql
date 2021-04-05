import React from 'react'
import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
    console.log(bookmark)
    return (
        <div>
            <h3>BookMarks</h3>
            {bookmark.map((b, i) => <div key={i}>
                <p>{b.title} {b.comment}</p>
            </div>)}
        </div>
    )
}

Bookmark.propTypes = {
    bookmark: PropTypes.array.isRequired
}

export default Bookmark
