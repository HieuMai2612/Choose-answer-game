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
    getPlayer,
    getTotalTime,
} from '../../features/CreateSlice';
import Spinner from 'react-bootstrap/Spinner';

const GamePlay = () => {
    const question = useSelector(questions);
    const quesCount = useSelector(questionCount);
    const getName1 = useSelector(name1);
    const getName2 = useSelector(name2);
    const getIndexQuestion = useSelector(indexQuestion);
    const [showBtnSubmit, setShowBtnSubmit] = useState(true);
    const [showBtnNextPlay, setShowBtnNextPlay] = useState(false);
    const [showBtnNextGame, setShowBtnNextGame] = useState(false);
    const getPlayerLength = useSelector(getPlayer);
    const answer = question[getIndexQuestion]?.correct_answer;
    const answerIncorrect = question[getIndexQuestion]?.incorrect_answers;
    // checkAnswer for check if === answerApi => correct : incorrect
    const [checkAnswer, setCheckAnswer] = useState('');
    const [resultAnswer, setResultAnswer] = useState('');
    const ques = question[getIndexQuestion]?.question;
    const [submitName1, setSubmitName1] = useState('');
    //loading page
    const [loading, setLoading] = useState(false);

    // set time counter 
    const [time, setTime] = useState(5);
    // set reset checkbox after change player or game 
    const [checkBox, setCheckBox] = useState(false);

    const handleChoose = (e) => {
        setCheckAnswer(e.target.value);
        setAnswerResult(e.target.value);
    }
    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prev) => prev - 1);
        }, 1000);
        if (time === 0) {
            clearInterval(interval);
        }
        if (playerCounts === getPlayer.length - 1 && time === 0) {
            handleSubmit();
            onNextPlayer();
            clearInterval(interval);
        }
        if (playerCounts === getPlayer.length && showBtnNextGame === true && quesCount === 2 && time === 0) {
            onNextGame();
            clearInterval(interval);
        }
        else if (playerCounts === getPlayer.length && time === 0) {
            handleSubmit();
            clearInterval(interval);
        }
        if (playerCounts === getPlayer.length && getIndexQuestion === question.length - 1) {
            setTime(0)
            clearInterval(interval)
        }
        return () => clearInterval(interval);
    }, [time])

    // getPlayer.length  = 1
    // question.length = 2


    //answer of user
    const [answerResult, setAnswerResult] = useState('');

    const playerCounts = useSelector(playerCount);
    const dispatch = useDispatch();

    const handleSubmit = () => {
        setTime(5);
        dispatch(getTotalTime(time));
        setShowBtnNextPlay(true)
        dispatch(saveResult({
            players: getPlayerLength[playerCounts],
            result: resultAnswer,
            apiResult: answer,
            answerUser: answerResult,
            timePlay: time,
        }));
        if (playerCounts !== getPlayer.length - 1) {
            setShowBtnNextPlay(false);
            setShowBtnNextGame(true);
        }
        if (playerCounts === getPlayer.length - 1) {
            setShowBtnSubmit(true);
            setShowBtnNextPlay(true);
            setShowBtnNextGame(false);
        }

        if (playerCounts !== getPlayer.length - 1 && getIndexQuestion === question.length - 1) {
            setShowBtnNextGame(true);
        }

        if (playerCounts !== getPlayer.length - 1 && getIndexQuestion === 1) {
            setShowBtnNextGame(false);
        }
        setShowBtnSubmit(false);
        setCheckBox(prevState => !prevState)
    }


    const onNextPlayer = () => {
        setTime(5);
        setShowBtnNextPlay(false);
        dispatch(nextPlayer());
        setShowBtnSubmit(true);
        setShowBtnNextGame(false);
        setCheckBox(false)
    };


    const onNextGame = () => {
        getName1 ? setSubmitName1(true) : setSubmitName1(false);
        setTime(5);
        dispatch(nextQuestion());
        setShowBtnNextGame(false);
        setShowBtnSubmit(true);
        setCheckBox(false)
    }



    useEffect((e) => {
        if (checkAnswer === answer) {
            getName1 === name1 ? setSubmitName1(true) : setSubmitName1(false);
            return setResultAnswer('correct');
        } else {
            return setResultAnswer('incorrect');
        }
    }, [checkAnswer]);

    let totalAnswer = []
    totalAnswer = totalAnswer.concat(answer, answerIncorrect)

    const answerItems = totalAnswer?.map((item) => {
        return (
            <div key={item} className="game-body-choose-form">
                <Form.Check
                    type={'radio'}
                    name="group1"
                    label={item}
                    key={checkBox}
                    value={item} onChange={(e) => handleChoose(e)}
                />
            </div>
        );
    });

    return (
        <div className='game-container'>
            <div className='game-header'>
                <div className='game-count-ques'>{quesCount} questions left</div>
                <div className='game-count-time'>Time remaing
                    <span className='game-count-time-number'>
                        {time}
                    </span>
                </div>
            </div>
            <div className='game-body'>
                <div className='game-body-question'>
                    Question:   {ques}
                </div>
                <div className='game-body-choose'>
                    <div className='game-body-name'>
                        Name : {playerCounts === getPlayer.length - 1 ? getName1 : getName2}
                    </div>
                    <Form className='game-body-choose-big-form' >
                        {answerItems}
                    </Form>
                </div>
            </div>

            <div className='game-footer'>
                {loading && <Spinner animation="border" role="status">
                </Spinner>}
                {showBtnSubmit && <Button onClick={handleSubmit}
                    // disabled={isDisable}
                    variant="outline-dark" >Submit</Button>}
                {showBtnNextPlay &&
                    <Button className="btn-player" variant="primary" onClick={onNextPlayer} >
                        Next player
                    </Button>
                }
                {showBtnNextGame &&
                    < Button className="btn-player" variant="primary" onClick={onNextGame} >
                        Next game
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
