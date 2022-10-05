import './history.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { selectAllQuestion } from '../../features/QuestionSlice/questionSlice';
import { selectAllResult } from '../../features/Result/result';

const History = () => {

    const [indexName, setIndexName] = useState(0);
    const results = useSelector(selectAllResult);
    const [text, setText] = useState('');

    const [questionNum, setQuestionNum] = useState(results[results.length - 1]?.matchId || 0);

    const questions = useSelector(selectAllQuestion);

    const handleSearch = (e) => {
        setText(e.target.value)
    }

    const matchResult = results.filter((match) => {
        if (match.matchId === questionNum) {
            return match;
        }
    });
    const search = matchResult.filter((item) => item?.name?.includes(text));

    const tableItem = search.map((results, index) => {
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

    console.log(results);

    return (
        <>
            <div className='game-header'>
                <div className='game-title'>Yes No WTF GAME</div>
                <Link to="/game-play">
                    <Button className='history-btn' variant="outline-dark">Back</Button>
                </Link>
            </div>
            <div className='game-body-match'>
                Match {questions[indexName]?.match}
            </div>
            <Form.Control
                type="text"
                name="name"
                className="history-search"
                onChange={handleSearch}
            />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Player Name</th>
                        <th>Date</th>
                        <th>Answer</th>
                        <th>Result</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {tableItem}
                </tbody>
                <thead>
                    <tr>
                        <th>Summary</th>
                        <th>Correct Percent</th>
                        <th>Total Score</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mark</td>
                        <td>0%</td>
                        <td>0</td>

                    </tr>
                    <tr>
                        <td>Hennry</td>
                        <td>100%</td>
                        <td>1</td>

                    </tr>

                </tbody>
            </Table>
        </>
    )
}


export default History