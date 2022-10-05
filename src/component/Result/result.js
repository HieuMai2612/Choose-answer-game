import './result.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useDispatch } from 'react';
import {
    questions,
    questionCount,
    saveResult,
    name1,
    name2,
    playerCount,
    indexQuestion,
    nextQuestion,
    nextPlayer,
    getPlayer
} from '../../features/CreateSlice';

const Result = () => {
    const question = useSelector(questions);
    const quesCount = useSelector(questionCount);
    const getName1 = useSelector(name1);
    const getName2 = useSelector(name2);
    const getIndexQuestion = useSelector(indexQuestion);
    const getPlayerLength = useSelector(getPlayer);
    const answer = question[getIndexQuestion]?.correct_answer;

    // const handleSearch = (e) => {
    //     setText(e.target.value)
    // }


    const tableItem = getPlayerLength.map((results, index) => {
        return (
            <tr key={index}>
                <td>{index}</td>
                <td>{results?.name}</td>
                <td>00/11/2000</td>
                <td>{results?.answer}</td>
                <td>{results?.result}</td>
                <td>{results?.result === 'yes' ? '1' : '0'}</td>
            </tr>
        );
    });



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