import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';


class UserItem extends React.Component {
    render(props){
        return(
            <div className="container">
                 <Card className="cardWrap">
                    <CardImg top width="100%" src={this.props.user.avatar_url} alt="Card image cap" />
                <CardBody className="cards">
                    <CardTitle className="cardTitle">{this.props.user.name}</CardTitle>
                    <p> <a href={this.props.user.html_url}>{this.props.user.html_url}</a></p>
                    <p>{this.props.user.location}</p>
                 </CardBody>
            </Card>
                
            </div>
        );
    }
}

export default UserItem;


                // <img src={this.props.user.avatar_url} alt="profile img" />
                // <p>Profile Info: <a href={this.props.user.html_url}>{this.props.user.html_url}</a></p>
                // <h1>{this.props.user.name}</h1>
                // <p>{this.props.user.location}</p>
                // <p>Bio: {this.props.user.bio}</p>