import React from 'react';
import { Link } from 'react-router-dom';

const BlogListPage = () => {
    return (
        <div className="container">
            <p>Blog</p>
            <Link to="/blogs/1" className="">Blog1</Link>
            <Link to="/blogs/2">Blog2</Link>
        </div>
    )
}

export default BlogListPage
