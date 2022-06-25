import axios from "axios";
import HeaderImage from "components/HeaderImage/HeaderImage";
import { React, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";


const BlogSinglePost = () => {
    const postParams = useParams();
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(false);
    const GetPostsFromApi = (endpoint) => {
        setLoading(true);
        axios.get(`${endpoint}`)
            .then((response) => {
                let postData = response.data;
                setPost(postData);
                console.log(post);
                setLoading(false);
            });
    }
    useEffect(() => GetPostsFromApi(`https://jbrambor-dev.pl/engineer-backend/wp-json/wp/v2/posts/${postParams.ID}?_embed`), []);
    if (loading || post.length === 0) {
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
            
            <HeaderImage src={post._embedded['wp:featuredmedia'][0].source_url} alt={"Travel"}/>
            <div className="post__back container">
                <Link
                    to="/blog"
                >
                    Go to all posts
                </Link>
            </div>
            <div className="container blog">
                <h1>
                    {post.title.rendered}
                </h1>
                <p dangerouslySetInnerHTML={{__html: post.content.rendered}}>
                    
                </p>
                
            </div>
        </div>
    )
}

export default BlogSinglePost;
