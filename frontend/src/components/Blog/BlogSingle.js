import {theme} from 'modules/uiTheme/theme';
import React from "react";
import {Link} from "react-router-dom";

function BlogSingle(blog){
    return (
        <div className="blog__last--card">
            <Link to={blog.href}>
                <div className="card-img">
                    <img src={blog.src} alt={blog.alt}>

                    </img>
                </div>
                <div className="card-category" >
                    <span style={{
                        color: `${theme.colors.primary40}`
                    }}>
                        {blog.category}
                    </span>
                </div>
                <div className="card-title">
                    <h3>
                        {blog.title}
                    </h3>
                </div>
                <div className="card-description">
                    <p>
                        {blog.description}
                    </p>
                </div>
                <div className="card-button">
                    <Link to={blog.href}>
                        Read more
                    </Link>
                </div>
            </Link>
        </div>
    );
}

export default BlogSingle;
