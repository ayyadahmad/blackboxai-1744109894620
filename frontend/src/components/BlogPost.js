import React from 'react';

const BlogPost = ({ title, content, author }) => {
    return (
        <div className="blog-post">
            <h3>{title}</h3>
            <p>{content}</p>
            <p className="author">Written by: {author}</p>
        </div>
    );
};

export default BlogPost;
