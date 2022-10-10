import './createGame.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';

import {
    getAnswer,
    saveName1,
    saveName2,
    savePlayers

} from '../../features/CreateSlice';

const CreateGame = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [nameP2, setNameP2] = useState('');
    const [show, setShow] = useState(true);
    const dispatch = useDispatch();
    const handleClose = () => setShow(false);

    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleChangeP2 = (event) => {
        setNameP2(event.target.value);
    }


    const handleAdd = (e) => {
        e.preventDefault();
        dispatch(saveName1(name));
        dispatch(saveName2(nameP2));

        dispatch(savePlayers());
        setName('');
        setNameP2('');
        setShow(false);
        dispatch(getAnswer()).then(() => navigate("../game-screen"));
    };





    return (
        <div className='wrapper_dialog'>

            <div>
                <span className="visually">Loading...</span>
            </div>
            <Spinner animation="border" role="status">
            </Spinner>
            <Modal className='input-form' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Game</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form.Label >New player 1 </Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        placeholder="Enter name"
                    />
                </Modal.Body>
                <Modal.Body>
                    <Form.Label >New player 2 </Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={nameP2}
                        onChange={handleChangeP2}
                        placeholder="Enter name"
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn-player" variant="primary" onClick={handleAdd}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    );

}

export default CreateGame;