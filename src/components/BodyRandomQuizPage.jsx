import React, { useState, useEffect } from "react";
import data from "../data/quiz_01.json";
import { useNavigate } from "react-router-dom";

function BodyRandomQuizPage() {

    const [shuffledData, setShuffledData] = useState([]);
    const shuffleArray = (array) => {
        return array.sort(() => Math.random() - 0.5);
      };
    
      // Charger les données mélangées au démarrage
      useEffect(() => {
        setShuffledData(shuffleArray([...data])); // Copie de `data` pour éviter de modifier l'original
      }, []);

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const navigate = useNavigate();

    const [orderInput, setOrderInput] = useState("");
    const [familyInput, setFamilyInput] = useState("");
    const [scientificInput, setScientificInput] = useState("");
    const [nameInput, setNameInput] = useState("");

    const [orderInputState, setOrderInputState] = useState("");
    const [orderAnswer, setOrderAnswer] = useState("");
    const [familyInputState, setFamilyInputState] = useState("");
    const [familyAnswer, setFamilyAnswer] = useState("");
    const [scientificInputState, setScientificInputState] = useState("");
    const [scientificAnswer, setScientificAnswer] = useState("");
    const [nameInputState, setNameInputState] = useState("");
    const [nameAnswer, setNameAnswer] = useState("");

    const [score, setScore] = useState(0);
    const [feedback, setFeedback] = useState("");

    const handleSubmit = () => {
        const currentData = shuffledData[currentQuestion];
        let currentScore = 0;


        if (orderInput.toLowerCase() === currentData.order.toLowerCase()) {
            currentScore = currentScore + 0.5
        } else {
            setOrderInputState(orderInput.toLowerCase())
            setOrderAnswer(currentData.order.toLowerCase())
        }
        if (familyInput.toLowerCase() === currentData.family.toLowerCase()) {
            currentScore = currentScore + 0.5
        } else {
            setFamilyInputState(familyInput.toLowerCase())
            setFamilyAnswer(currentData.family.toLowerCase())
        }
        if (scientificInput.toLowerCase() === currentData.scientific_name.toLowerCase()) {
            currentScore = currentScore + 0.5
        } else {
            setScientificInputState(scientificInput.toLowerCase())
            setScientificAnswer(currentData.scientific_name.toLowerCase())
        }
        if (nameInput.toLowerCase() === currentData.common_name.toLowerCase()) {
            currentScore = currentScore + 0.5
        } else {
            setNameInputState(nameInput.toLowerCase())
            setNameAnswer(currentData.common_name.toLowerCase())
        }
    
        setScore(score + currentScore);
    
        if (currentScore === 2) {
          setFeedback("Good Job ! 2/2 points !");
        } else if (currentScore === 1.5) {
            setFeedback("Almost ! 1.5/2 point.");
        } else if (currentScore === 1) {
            setFeedback("Meh ! 1/2 point.");
        } else if (currentScore === 0.5) {
            setFeedback("Outch ! 0.5/2 point.");
        } else {
            setFeedback("What are u doing ?! 0/2 point.");
        }
    };
    
    const handleNextQuestion = () => {
        setFeedback("");
        setOrderInput("");
        setFamilyInput("");
        setScientificInput("");
        setNameInput("");
        setOrderInputState("");
        setOrderAnswer("");
        setFamilyInputState("")
        setFamilyAnswer("")
        setScientificInputState("")
        setScientificAnswer("")
        setNameInputState("")
        setNameAnswer("")

        if (currentQuestion < shuffledData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            alert(`Quiz terminé ! Votre score final est de ${score} / 20.`);
            setCurrentQuestion(0);
            setScore(0);
            navigate('/')
        }
    };

    //const currentData = data[currentQuestion];
    //const imagePath = require(`../assets/${currentData.image}`);
    const currentData = shuffledData[currentQuestion] || {};
    const imagePath = currentData.image
    ? require(`../assets/${currentData.image}`)
    : null;

    return (
        <section className="quiz_page_section">
            <article className="quiz_page_box">
                <h1 className="quiz_page_h1">Reconocimiento Peces lvl 1</h1>
                <p className="quiz_page_current_question">Question <span className="quiz_page_current_question_span">{currentQuestion + 1}</span> on {data.length}</p>
                <article className="quiz_page_box_question-image">
                    <div className="quiz_page_box-question">
                        <div>
                            <label className="quiz_page_box-question_label">
                                ORDEN :
                                <input
                                    className="quiz_page_box-question_input"
                                    type="text"
                                    value={orderInput}
                                    onChange={(e) => setOrderInput(e.target.value)}
                                    style={{ margin: "10px" }}
                                />
                            </label>
                        </div>
                        <div>
                            <label className="quiz_page_box-question_label">
                                FAMILIA :
                                <input
                                    className="quiz_page_box-question_input"
                                    type="text"
                                    value={familyInput}
                                    onChange={(e) => setFamilyInput(e.target.value)}
                                    style={{ margin: "10px" }}
                                />
                            </label>
                        </div>
                        <div>
                            <label className="quiz_page_box-question_label">
                                NOMBRE CIENTIFICO :
                                <input
                                    className="quiz_page_box-question_input"
                                    type="text"
                                    value={scientificInput}
                                    onChange={(e) => setScientificInput(e.target.value)}
                                    style={{ margin: "10px" }}
                                />
                            </label>
                        </div>
                        <div>
                            <label className="quiz_page_box-question_label">
                                NOMBRE COMUN :
                                <input
                                    className="quiz_page_box-question_input"
                                    type="text"
                                    value={nameInput}
                                    onChange={(e) => setNameInput(e.target.value)}
                                    style={{ margin: "10px" }}
                                />
                            </label>
                        </div>
                        <p className="quiz_page_box_feedback">{feedback}</p>

                        <div style={{color:'white'}}>Answer 
                            <span style={{color:'red'}}> {orderInputState}</span> : {orderAnswer}
                        </div>
                        <div style={{color:'white'}}>Answer 
                            <span style={{color:'red'}}> {familyInputState}</span> : {familyAnswer}
                        </div>
                        <div style={{color:'white'}}>Answer 
                            <span style={{color:'red'}}> {scientificInputState}</span> : {scientificAnswer}
                        </div>
                        <div style={{color:'white'}}>Answer 
                            <span style={{color:'red'}}> {nameInputState}</span> : {nameAnswer}
                        </div>

                    </div>
                    <div className="quiz_page_box-image">
                    {imagePath ? (
                        <img
                            src={imagePath}
                            alt={currentData.name || "Image"}
                            style={{ width: "400px", height: "300px" }}
                        />
                    ) : (
                        <p>Image non disponible</p>
                    )}
                    </div>
                </article>
                <article className="quiz_page_result">
                    <button className="quiz_page_result_button" onClick={handleSubmit} style={{backgroundColor: "#94C788"}}>
                        Check
                    </button>
                    <button className="quiz_page_result_button" onClick={handleNextQuestion} style={{backgroundColor: "#8DB5E6"}}>
                        Next Question
                    </button>
                    
                </article>
                
            </article>
        </section>
    )
}

export default BodyRandomQuizPage