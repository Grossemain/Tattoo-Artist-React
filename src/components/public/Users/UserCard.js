import React from 'react';
import {Card, Button} from 'react-bootstrap/';
import { Link } from 'react-router-dom'


const UserCard = ({ user }) => {
    return (
        <Card className="md-6">
                      <Card.Body>
                        <Card.Title><h2>{user.pseudo_user}</h2></Card.Title> 
                        <Card.Text><em>{user.description	}</em></Card.Text>
                        <Card.Text><span className='bg-warning rounded-pill p-2'>{user.email_contact}</span></Card.Text>
                        <Button variant="primary">
                            <Link className="text-light text-decoration-none"
                            to={`/tatoueur/${user.user_id}`}>{user.pseudo_user}</Link>
                        </Button>
                      </Card.Body>
                    </Card>
    );
};
export default UserCard;