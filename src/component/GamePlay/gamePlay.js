import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './gamePlay.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
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



const GamePlay = () => {
    const question = useSelector(questions);
    const quesCount = useSelector(questionCount);
    const getName1 = useSelector(name1);
    const getName2 = useSelector(name2);
    const getIndexQuestion = useSelector(indexQuestion);
    const [showBtn, setShowBtn] = useState(true);
    const getPlayerLength = useSelector(getPlayer);
    console.log(getIndexQuestion, "name")

    const answer = question[getIndexQuestion]?.correct_answer;
    const answerIncorrect = question[getIndexQuestion]?.incorrect_answers;
    const [checkAnswer, setCheckAnswer] = useState('');
    const [resultAnswer, setResultAnswer] = useState('');

    // const [ques, setQues] = useState(question[getIndexQuestion]?.question);

    const ques = question[getIndexQuestion]?.question
    const [submitName1, setSubmitName1] = useState('');

    const playerCounts = useSelector(playerCount)

    const dispatch = useDispatch();



    const handleSubmit = () => {
        dispatch(saveResult({ getName1, getName2, resultAnswer }));

        dispatch(nextPlayer());

        setShowBtn(false);
    }


    const onNextPlayer = () => {
        getName1 ? setSubmitName1(true) : setSubmitName1(false);
        setShowBtn(true);
        dispatch(nextQuestion());
        if (playerCount === getPlayerLength.length) {
            console.log("hu")
        }
    }



    const handleChoose = (e) => {
        setCheckAnswer(e.target.value)
    }

    useEffect(() => {
        if (checkAnswer === answer) {
            getName1 === name1 ? setSubmitName1(true) : setSubmitName1(false);
            return setResultAnswer('correct');
        } else {
            return setResultAnswer('incorrect');
        }
    }, [checkAnswer]);

    console.log(resultAnswer, submitName1)

    let totalAnswer = []
    totalAnswer = totalAnswer.concat(answer, answerIncorrect)

    const answerItems = totalAnswer?.map((item) => {
        return (
            <div key={item} className="game-body-choose-form">
                <Form.Check
                    type={'radio'}
                    name="group1"
                    label={item}
                    value={item} onChange={(e) => handleChoose(e)}
                />
            </div>
        );
    });

    return (
        <div className='game-container'>
            <div className='game-header'>
                <div className='game-count-ques'>{quesCount} questions left</div>
                <div className='game-count-time'>time remaing 10</div>
            </div>
            <div className='game-body'>
                <div className='game-body-question'>
                    Question:   {ques}
                </div>

                <div className='game-body-choose'>

                    <Form className='game-body-choose-big-form' >
                        {answerItems}
                    </Form>
                </div>

            </div>

            <div className='game-footer'>


                {showBtn && <Button onClick={handleSubmit}
                    // disabled={isDisable}
                    variant="outline-dark" >Submit</Button>}
                {
                    !showBtn && <Button className="btn-player" variant="primary" onClick={onNextPlayer} >
                        {submitName1 ? 'next player' : 'next game '}
                    </Button>
                }
                {/* {
                    getIndexQuestion === 2 && playerCount === 2 && <Link to="/result">
                        <Button variant="outline-dark" className='btn-result '>
                            ViewResult
                        </Button>
                    </Link>
                } */}
                <Link to="/result">
                    <Button variant="outline-dark" className='btn-result '>
                        ViewResult
                    </Button>
                </Link>
            </div>
        </div >
    );
}

export default GamePlay;
