import React from "react";
import "./PostCard.scss";
import { Link } from "react-router-dom";
import AuthorCard from "../AuthorCard";
import CommentSection from "../CommentSection";

const PostCard = ({ post }) => (
  <div className="post_card">
    <img src={post.imageUrl} alt="" />
    <h2>{post.title}</h2>
    <h3>{post.subtitle}</h3>
    <span>Comment ...</span>
    <AuthorCard post={post} />
    <CommentSection post={post} />
  </div>
);

export default PostCard;
