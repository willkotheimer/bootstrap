import React, { Component } from 'react';
import { Card,CardImg, CardText,CardBody,CardTitle } from 'reactstrap';

const Comment = ({comment}) => {
	return (

		<li>
			<div> rating: {comment.rating} </div>
	        <div> comment: {comment.comment} </div>
	        <div> author: {comment.author} </div>
	        <div> date:  {comment.date}  </div>
        </li>

		);
}

export default Comment;