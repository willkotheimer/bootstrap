import React, { Component } from 'react';
import { Card,CardImg, CardText,CardBody,CardTitle } from 'reactstrap';
import Comment from './Comment';

	const Dishdetail = (props) => {
    
    	

        return (
         	
            <div className="row">
          
            	
            	<Card>
              <CardImg width="100%" src={props.selectedDish.image} alt={props.selectedDish.name} />
              <CardBody>
                   <CardTitle>{props.selectedDish.name} </CardTitle>
                   <CardText>{props.selectedDish.description} </CardText>


              </CardBody>

                </Card>
                <Card>
                <CardBody>
              	<h5> Comments </h5>
                  <ul>

                   {props.selectedDish.comments.map((comment) => {

                   	return <Comment comment={comment}/>
                   })
               	}
              </ul>
              </CardBody>
                </Card>
			
                 
            </div>
         

        );
   
}

export default Dishdetail;