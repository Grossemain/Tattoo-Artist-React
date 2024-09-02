import React from 'react';
import Card from 'react-bootstrap/Card';

const UserCard = ({ user }) => {
    return (
        <Card className="md-6">
                      <Card.Body>
                        <Card.Title><h2>{user.pseudo_user}</h2></Card.Title> 
                        <Card.Text><em>{user.description	}</em></Card.Text>
                        <Card.Text><span className='bg-warning rounded-pill p-2'>{user.email_contact}</span></Card.Text>
                      </Card.Body>
                    </Card>
    );
};
export default UserCard;