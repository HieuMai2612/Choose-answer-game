import { Button } from 'react-bootstrap';
import './gamePlay.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { getAnswer, questions, questionCount } from '../../features/CreateSlice';

const GamePlay = () => {
    const question = useSelector(questions);
    const quesCount = useSelector(questionCount);
    const [answer, setAnswer] = useState(question[question.length - 2]?.correct_answer);
    const [answerIncorrect, setAnswerIncorrect] = useState(question[question.length - 2]?.incorrect_answers);
    const [checkAnswer, setCheckAnswer] = useState('');
    const [chooseAnswer, setChooseAnswer] = useState('')
    const [ques, setQues] = useState(question[question.length - 2]?.question);


    const handleChoose = (e) => {
        setCheckAnswer(e.target.value);
        chooseAnswer === answer ? setCheckAnswer('correct') : setCheckAnswer("incorrect");
        console.log(checkAnswer)
    }

    const answerItems = answerIncorrect.map((item) => {
        return (
            <div className="game-body-choose-form">
                <Form.Check
                    name="group1"
                    type={'radio'}
                    onClick={handleChoose}
                />
                <div key={item}>{item}</div>
            </div>

        );
    });



    const HandleSubmit = () => {
        console.log("duke")

        if (checkAnswer === answer) {

        }

    }



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
                        <div className="game-body-choose-form">
                            <Form.Check
                                name="group1"
                                type={'radio'}
                                onClick={handleChoose}
                            />
                            <div>
                                {question[question.length - 2].correct_answer}
                            </div>
                        </div>
                    </Form>
                </div>

            </div>

            <div className='game-footer'>
                <Button className="btn-player" variant="primary" onClick={HandleSubmit}>
                    Submit
                </Button>
            </div>
        </div >
    );
}

export default GamePlay;
