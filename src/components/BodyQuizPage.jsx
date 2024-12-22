import React, { useState } from "react";
import data from "../data/quiz_01.json";


function BodyQuizPage() {
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [orderInput, setOrderInput] = useState("");
    const [familyInput, setFamilyInput] = useState("");
    const [scientificInput, setScientificInput] = useState("");
    const [nameInput, setNameInput] = useState("");



    const [score, setScore] = useState(0);
    const [feedback, setFeedback] = useState("");

    const handleSubmit = () => {
        const currentData = data[currentQuestion];
        let currentScore = 0;
    
        if (orderInput.toLowerCase() === currentData.order.toLowerCase()) {
            currentScore = currentScore + 0.5
          
        }
        if (familyInput.toLowerCase() === currentData.family.toLowerCase()) {
            currentScore = currentScore + 0.5
        }
        if (scientificInput.toLowerCase() === currentData.scientific_name.toLowerCase()) {
            currentScore = currentScore + 0.5
        }
        if (nameInput.toLowerCase() === currentData.common_name.toLowerCase()) {
            currentScore = currentScore + 0.5
        }
    
        setScore(score + currentScore);
    
        if (currentScore === 2) {
          setFeedback("Correct ! 2/2 points !");
        } else if (currentScore === 1) {
          setFeedback("Partiellement correct ! 1/2 point.");
        } else {
          setFeedback("Incorrect ! 0/2 point.");
        }
    };
    
    const handleNextQuestion = () => {
        setFeedback("");
        setOrderInput("");
        setFamilyInput("");
        setScientificInput("");
        setNameInput("");

        if (currentQuestion < data.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            alert(`Quiz terminé ! Votre score final est de ${score} / 20.`);
            setCurrentQuestion(0);
            setScore(0);
        }
    };

    const currentData = data[currentQuestion];
    const imagePath = require(`../assets/${currentData.image}`);

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
                    </div>
                    <div className="quiz_page_box-image">
                        <img
                            src={imagePath}
                            alt={currentData.name}
                            style={{ width: "400px", height: "300px" }}
                        />
                    </div>
                </article>
                <article className="quiz_page_result">
                    <button className="quiz_page_result_button" onClick={handleSubmit} style={{backgroundColor: "#94C788"}}>
                        Valider
                    </button>
                    <button className="quiz_page_result_button" onClick={handleNextQuestion} style={{backgroundColor: "#8DB5E6"}}>
                        Question suivante
                    </button>
                    <p>{feedback}</p>
                </article>
                
            </article>
        </section>
    )
}

export default BodyQuizPage