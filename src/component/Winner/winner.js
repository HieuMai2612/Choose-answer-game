import './winner.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../asset/OIP.jpg"
import { useSelector } from 'react-redux';
import {
    results
} from '../../features/CreateSlice';

const Winner = () => {

    const result = useSelector(results);
    const getLisResult = Object.values(result);



    // console.log(getLisResult)
    return (
        <div className="winner-game">
            <img src={logo} alt='' />
            <div className='winner-game-title'>
                {getLisResult[0].score > getLisResult[1].score
                    || getLisResult[0].time >= getLisResult[1].time
                    ? `Winner : ${getLisResult[0].namePlayer}` : `Winner : ${getLisResult[1].namePlayer}`}

            </div>
        </div>
    );
};

export default Winner;