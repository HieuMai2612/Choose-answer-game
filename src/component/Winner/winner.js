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
    const sumTimeP1 = getLisResult[0].time.reduce((a, b) => a + b);
    const sumTimeP2 = getLisResult[1].time.reduce((a, b) => a + b);

    console.log(sumTimeP1, 'd')
    const MaxTimeAndScore = () => {
        try {
            if (
                getLisResult[0].score > getLisResult[1].score
                && sumTimeP1 >= sumTimeP2
            ) {
                return (
                    <div className='winner-game-title'>
                        {`Winner : ${getLisResult[0].namePlayer}`}
                    </div>
                );
            } else if (
                getLisResult[0].score === getLisResult[1].score
                && sumTimeP1 > sumTimeP2
            ) {
                console.log(getLisResult[0].namePlayer);
                return (
                    <div className='winner-game-title'>
                        {`Winner : ${getLisResult[0].namePlayer}`}
                    </div>
                );
            }
            else if (
                getLisResult[0].score === getLisResult[1].score
                && sumTimeP1 === sumTimeP2
            ) {
                return (
                    <div className='winner-game-title'>
                        {`Draw`}
                    </div>
                );
            }
        } catch (error) {
            return (
                <div className='winner-game-title'>
                    {`Winner : ${getLisResult[1].namePlayer}`}
                </div>
            );
        }


    }


    return (
        <div className="winner-game">
            <img src={logo} alt='' />

            <MaxTimeAndScore />

        </div>
    );
};

export default Winner;