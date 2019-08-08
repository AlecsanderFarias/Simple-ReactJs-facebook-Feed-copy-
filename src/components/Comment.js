import React from "react";

function Comment({ comment }) {
  return (
    <div className="comment">
      <img className="avatar" src={comment.author.avatar} />
      <div className="comment_content">
        <p className="comment_text">
          <span className="bold">{comment.author.name} </span> {comment.content}
        </p>
      </div>
    </div>
  );
}

export default Comment;
