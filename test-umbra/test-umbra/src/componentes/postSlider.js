import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import posts from '../dataPost/post.js';
import Comments from '../componentes/comments.js';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const PostSlider = ({ id, comment, show,close}) =>{
  if (!show) {
      return null
  }

    return(
    <div className='ContentSlider'>
        <div  className='ContainSlider'>
        <AliceCarousel activeIndex={id-1} >
            {
            posts.map(post => {
                return(
                <>
                <div className='contentImageSlider'>
                <img className="imageSlider" src={post.imagePost} alt="img"/>
                </div>
                </>
                )
            })
            }
        </AliceCarousel>
    </div> 
                <div className='ContentComment'>
                <Comments comment={comment} show={show} close={close}/>
                </div> 
                </div>         
    )
}

export default PostSlider