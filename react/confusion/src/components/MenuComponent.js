 
import React, { Component, useState } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import Dishdetail from './DishdetailComponent';

const Menu = (props) => {


        const [selectedDish, upDateDish] = useState(null);

        const [previousDish, updatePrev] = useState(null);

        function onDishSelect(dish) {
          // this.setState({ selectedDish: dish});
          updatePrev(selectedDish);
          upDateDish(dish);
        } 

        function renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

        const menu = props.dishes.map((dish) => {
            return (
              <div  className="col-12 col-md-5 m-1">
                <Card key={dish.id}
                  onClick={() => onDishSelect(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });



        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    
                    {selectedDish && <Dishdetail selectedDish={selectedDish}/>}
                    <br/>
                    <h4>prev dish</h4>
                    {previousDish && <Dishdetail selectedDish={previousDish}/>}
                  </div>
                </div>
            </div>
        );
    
}

export default Menu;
 