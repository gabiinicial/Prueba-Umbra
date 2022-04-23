import './components.css';
const CommentsPost = ({comment, show,close})=>{
    if (!show) {
        return null
    }
    return(
        <section className="sectionComment">
            <div className="headerComment">
            <h3>Comments</h3>
            <h2 onClick={close}>X</h2>
            </div>
            <div className="comments">
            {
                comment.map(com =>{
                    return(
                        <div className="SpaceComment">
                            <p>{"Name: " +com.name}</p>
                            <p>{"Email: " + com.email}</p>
                            <p>{"Comment: " + com.body}</p>
                            <hr/>
                        </div>
                    )
                })
            }
            </div>
        </section>
    )
}

export default CommentsPost