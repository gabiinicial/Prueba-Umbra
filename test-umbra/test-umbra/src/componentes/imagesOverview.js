import posts from '../dataPost/post';
import PostSlider from '../componentes/postSlider.js';

import './components.css';
import React, { useEffect , useState} from "react";
const ImageOverview = () => {
    let [comment, setcomments] = useState([]);
    let [commentFilter, setcommentsFilter] = useState([]);
    const [showComment, setShowComment] = useState(false);
    let [idPostSlect, setidPost] = useState(0);

    useEffect(() =>{
        const getApiComments = () =>{
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then((res) => res.json())
        .then((res) => setcomments(res))
    }
    getApiComments();
},[]);


const controllerCommentPost = () =>{
    setShowComment(!showComment);
}
const getPostSelect = (id) =>{
    idPostSlect = id;
    commentFilter = comment.filter(comments => comments.postId == id)
    setcommentsFilter([...commentFilter]);
        setidPost(idPostSlect);
        controllerCommentPost()
    }

    return ( 
        <div className="wrap">
            <div className='posts'>
            {
            posts.map(post =>{
                return(
                <>
                <section className='contentSelect' onClick={ () => getPostSelect(post.Id) }>
                <img className='postImage' src={post.imagePost} alt="img"/>
                </section>
                </>
                )
            })
            }
            </div>
            <PostSlider show={showComment} comment={commentFilter} id={idPostSlect}  close={controllerCommentPost}/>
        </div> 
    )
}

export default ImageOverview