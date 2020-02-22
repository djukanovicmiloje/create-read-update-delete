import React from 'react';

const PostCard = ({post}) => (
	<div>
		<img src={post.imageUrl} alt="" />
		<h2>{post.title}</h2>
		<h3>{post.subtitle}</h3>
		<p>{post.text}</p>
	</div>
);

export default PostCard;
