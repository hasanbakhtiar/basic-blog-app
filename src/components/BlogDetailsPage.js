import React from 'react'

const BlogDetailsPage = ({match}) => {
    return (
        <div className="container">
            Blog Details: {match.params.id}
        </div>
    )
}

export default BlogDetailsPage
