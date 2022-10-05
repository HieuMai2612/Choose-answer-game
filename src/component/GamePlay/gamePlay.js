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
    const [showBtnSubmit, setShowBtnSubmit] = useState(true);
    const [showBtnNextPlay, setShowBtnNextPlay] = useState(false);
    const [showBtnNextGame, setShowBtnNextGame] = useState(false);
    const getPlayerLength = useSelector(getPlayer);
    const [answerResult, setAnswerResult] = useState('');
    const answer = question[getIndexQuestion]?.correct_answer;
    const answerIncorrect = question[getIndexQuestion]?.incorrect_answers;
    const [checkAnswer, setCheckAnswer] = useState('');
    const [resultAnswer, setResultAnswer] = useState('');
    const ques = question[getIndexQuestion]?.question;
    const [submitName1, setSubmitName1] = useState('');

    const playerCounts = useSelector(playerCount);


    console.log(playerCounts);
    const dispatch = useDispatch();



    const handleSubmit = () => {
        dispatch(saveResult({
            players: getPlayerLength[playerCounts],
            result: resultAnswer,
            answerResult
        }));

        if (playerCounts !== getPlayer.length - 1) {
            setShowBtnNextPlay(false);
            setShowBtnNextGame(true);
            console.log("d")
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
        console.log(playerCounts, 'plcount')
        console.log(getPlayer.length - 1, 'f')
    }

    const onNextPlayer = () => {
        dispatch(nextPlayer());
        setShowBtnNextPlay(false);
        setShowBtnSubmit(true);
        setShowBtnNextGame(false);
    };


    const onNextGame = () => {
        getName1 ? setSubmitName1(true) : setSubmitName1(false);
        dispatch(nextQuestion());
        setShowBtnNextGame(false);
        setShowBtnSubmit(true);
    }



    const handleChoose = (e) => {
        setCheckAnswer(e.target.value)
        setAnswerResult(e.target.value);
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
