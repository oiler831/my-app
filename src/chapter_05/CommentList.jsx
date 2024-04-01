import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name:"전병진",
        comment:"안녕하세요"
    },
    {
        name:"전병진2",
        comment:"안녕하세요123"
    },
    {
        name:"전병진3",
        comment:"안녕하세요456"
    },
]

function CommentList(props){
    return (
        <div>
            {comments.map((comment)=>{
                return(
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;