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


    // useEffect(() => {

    //     if (lisResult[0].score > lisResult[1].score) {
    //         console.log("d", lisResult[0].score)
    //     }


    // },)





    return (
        <div className="winner-game">
            <img src={logo} />
            <div className='winner-game-title'>
                {getLisResult[0].score > getLisResult[1].score
                    ? `Winner : ${getLisResult[0].namePlayer}` : `Winner : ${getLisResult[1].namePlayer}`}
                {
                }
            </div>
        </div>
    );
};

export default Winner;