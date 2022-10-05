import './result.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { questions, questionCount, saveResult, saveName1, name1, name2 } from '../../features/CreateSlice';

const Result = () => {
    const getName1 = useSelector(name1);
    const getName2 = useSelector(name2);
    // const [indexName, setIndexName] = useState(0);
    // // const results = useSelector(selectAllResult);
    // const [text, setText] = useState('');

    // const [questionNum, setQuestionNum] = useState(results[results.length - 1]?.matchId || 0);

    // const questions = useSelector(selectAllQuestion);

    // const handleSearch = (e) => {
    //     setText(e.target.value)
    // }

    // const matchResult = results.filter((match) => {
    //     if (match.matchId === questionNum) {
    //         return match;
    //     }
    // });
    // const search = matchResult.filter((item) => item?.name?.includes(text));

    // const tableItem = search.map((results, index) => {
    //     return (
    //         <tr key={index}>
    //             <td>{index}</td>
    //             <td>{results?.name}</td>
    //             <td>00/11/2000</td>
    //             <td>{results?.answer}</td>
    //             <td>{results?.result}</td>
    //             <td>{results?.result === 'yes' ? '1' : '0'}</td>
    //         </tr>
    //     );
    // });

    // console.log(results);

    return (
        <>
            <div className='game-header'>
                <div className='game-title'>Result Game</div>
                <Link to="/game-screen">
                    <Button className='history-btn' variant="outline-dark">Finally</Button>
                </Link>
            </div>
            <Form.Control
                type="text"
                name="name"
                className="history-search"
            // onChange={handleSearch}
            />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Answer</th>
                        <th>Result</th>
                        <th>Score</th>
                        <th>Time Finish</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {tableItem} */}
                </tbody>

            </Table>
        </>
    )
}


export default Result