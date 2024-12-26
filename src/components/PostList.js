import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsRequest } from "../features/posts/postsSlice";

const PostList = () => {
    const dispatch = useDispatch();
    const { posts, loading, error } = useSelector(state => state.posts);

    useEffect(() => {
        dispatch(fetchPostsRequest());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>DUMMY LIST FROM API</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PostList;