import './startGame.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../asset/OIP.jpg"
import { resetLocal } from '../../features/CreateSlice';
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";

const StartGame = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        localStorage.clear();
        dispatch(resetLocal());
    }, []);

    return (
        <div className="start-game">
            <img src={logo} alt='' />
            <div className='title-game'>FUNNY GAME</div>
            <Link to="/create-game">
                <Button variant="outline-dark"  >
                    Start Game
                </Button>
            </Link>
        </div >
    );
};

export default StartGame;