import './PostCard.css'
import { Button, ButtonGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import { AuthContext } from './../../contexts/auth.context'
import { Link } from 'react-router-dom'
import { useContext } from 'react';

function PostCard({ title, owner }) {

    const { user } = useContext(AuthContext)

    return (
        <Card className="mb-4 CoasterCard">

            <Card.Body>
                <Card.Title>{title}</Card.Title>
                {
                    !owner || owner != user?._id
                        ?
                        <>
                            <Link>
                                <div className="d-grid">
                                    <Button variant="dark" size="sm">Ver detalles</Button>
                                </div>
                            </Link>
                        </>
                        :
                        <>
                            <div className="d-grid">
                                <ButtonGroup aria-label="Basic example">
                                    <Link>
                                        <Button variant="dark" size="sm">Ver detalles</Button>
                                    </Link>
                                </ButtonGroup>
                            </div>

                        </>

                }


            </Card.Body>
        </Card>
    );
}


export default PostCard