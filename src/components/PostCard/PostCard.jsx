import './PostCard.css'
import { Button, ButtonGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import { AuthContext } from './../../contexts/auth.context'
import { Link } from 'react-router-dom'
import { useContext } from 'react';

const PostCard = (props) => {
    const { title, owner, content } = props;
    console.log(props)
    const { user } = useContext(AuthContext)

    return (
        <Card className="mb-4 CoasterCard">

            <Card.Body>
                <Card.Title>{props?.owner?.username}</Card.Title>
                <h2>{props.title}</h2>
                <h4>{props.content}</h4>
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