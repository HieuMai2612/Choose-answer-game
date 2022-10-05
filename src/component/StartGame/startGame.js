import './startGame.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../asset/OIP.jpg"


const StartGame = () => {

    return (
        <div className="start-game">
            <img src={logo} />
            <div className='title-game'>FUNNY GAME</div>
            <Link to="/create-game">
                <Button variant="outline-dark"  >
                    Start Game
                </Button>
            </Link>
        </div>
    );
};

export default StartGame;