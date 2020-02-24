import React from 'react';
import './PostCard.scss';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => (
	<Link to={`/post/${post.id}`}>
		<div className="post_card">
			<img src={post.imageUrl} alt="" />
			<h2>{post.title}</h2>
			<h3>{post.subtitle}</h3>
			<span>Comment ...</span>
		</div>
	</Link>
);

export default PostCard;
