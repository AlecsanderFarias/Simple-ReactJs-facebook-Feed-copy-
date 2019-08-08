import React from "react";

import Comment from "./Comment";
import { comment } from "postcss-selector-parser";

//Post chama um component Comment para cada post de seu vetor
function Post({ post }) {
  return (
    <div className="post">
      <div className="user_info">
        <img className="avatar" src={post.author.avatar} />
        <div className="user_details">
          <h4>{post.author.name}</h4>
          <p className="date"> {post.date}</p>
        </div>
      </div>
      <div className="content">
        <p className="content_text"> {post.content}</p>
      </div>
      <div className="comments_list">
        {post.comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}

export default Post;
