import axios from "axios";
import HeaderImage from "components/HeaderImage/HeaderImage";
import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import BlogImg from "../../images/blog-background.jpg";

const BlogArchive = () => {
    const [posts, setPosts] = useState([]);
    const GetPostsFromApi = (endpoint) => {
        axios.get(`${endpoint}`)
            .then((response) => {
                let postsData = response.data;
                setPosts(postsData);
            });
    }
    useEffect(() => GetPostsFromApi(`https://jbrambor-dev.pl/engineer-backend/wp-json/wp/v2/posts?_embed`), []);
    
    if (posts.length === 0) {
        return (
            <div className="container">
                <p>
                    Loading...
                </p>
            </div>
        )
    }
    
    return (
        <div>
            <HeaderImage src={BlogImg} alt={"Travel"}/>
            <div className="container blog">
                <h1>
                    Blog
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum euismod facilisis. Aenean eu risus aliquet, vestibulum arcu nec, bibendum turpis. Aliquam et risus sem. Maecenas in dui vel diam consequat porttitor. Ut congue tortor vitae sapien interdum bibendum. Praesent ullamcorper vulputate velit, et molestie nisl rutrum eu. In hac habitasse platea dictumst. 
                </p>
                <div className="blog-all">
                    { posts.flatMap((post, index) => (
                        <div className="post" key={index} 
                        >   
                            <div className="post__thumbnail">
                                <img 
                                    src={post._embedded['wp:featuredmedia'][0].source_url} 
                                    alt="">
                                </img>
                            </div>
                            
                            <div className="post__title">
                                <h2>
                                    {post.title.rendered}
                                </h2>
                            </div>
                            <div className="post__description">
                                <p dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}>
                                </p>
                            </div>
                            <div className="post__button">
                                <Link 
                                    className="post__button--btn"
                                    to={`/blog/${post.id}`}>
                                    See more
                                </Link>
                            </div>
                            
                        </div>
                    )                    
                    ) }
                </div>
            </div>
        </div>
    )
}

export default BlogArchive;
