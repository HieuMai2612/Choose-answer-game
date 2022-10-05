import { Button } from 'react-bootstrap';
import './gamePlay.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { getAnswer, saveName1, saveName2 } from '../../features/CreateSlice';

const GamePlay = () => {
    const questions = useSelector(getAnswer);
    const [ques, setQues] = useState(questions[questions])
    const [answer, setAnser] = useState('');

    console.log(questions[questions])


    return (
        <div className='game-container'>
            <div className='game-header'>
                <div className='game-count-ques'>choose question</div>
                <div className='game-count-time'>time remaing 10</div>
            </div>
            <div className='game-body'>
                <div className='game-body-question'>
                    {getAnswer[getAnswer]?.results}
                </div>

                <div className='game-body-choose'>
                    <Form className='game-body-choose-big-form' >
                        <div className="game-body-choose-form">
                            <Form.Check
                                name="group1"
                                type={'radio'}
                            />
                            <div>test</div>
                        </div>
                        <div className="game-body-choose-form">
                            <Form.Check
                                name="group1"
                                type={'radio'}
                            />
                            <div>test</div>
                        </div>
                        <div className="game-body-choose-form">
                            <Form.Check
                                name="group1"
                                type={'radio'}
                            />
                            <div>test</div>
                        </div>
                    </Form>
                </div>

            </div>

            <div className='game-footer'>
                <Button className="btn-player" variant="primary">
                    Submit
                </Button>

            </div>
        </div>
    );
}

export default GamePlay;
