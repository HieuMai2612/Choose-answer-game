import './result.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, } from 'react';
import {
    results
} from '../../features/CreateSlice';

const Result = () => {
    const result = useSelector(results);
    const lisResult = Object.values(result);
    const [search, setSearch] = useState("");
    const filterPosts = lisResult.filter((result) =>
        result.namePlayer.toLowerCase().includes(search.toLowerCase())
    );
    // const handleSearch = (e) => {
    //     setText(e.target.value)
    // }


    // const tableItem = getPlayerLength.map((results, index) => {
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
                    {
                        filterPosts.map((result, index) => (
                            <tr
                                key={index}
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <td>{result.namePlayer}</td>
                                <td>
                                    {result.answerPlayer.map((item) => (
                                        <div>{item}</div>
                                    ))}
                                </td>
                                <td>
                                    {result.answerApi.map((item) => (
                                        <div>{item}</div>
                                    ))}
                                </td>
                                <td>{result.score}</td>
                                <td>10s</td>
                            </tr>
                        ))
                    }
                </tbody>

            </Table>
        </>
    )
}


export default Result