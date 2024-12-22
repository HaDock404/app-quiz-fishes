import { Link } from "react-router-dom"

function QuizCard({title, text, difficulty, color, order}) {
    return (
        <Link to="/random-quiz" className="quiz_card_article">
            <div className="quiz_card_title">
                {title}
            </div>
            <div className="quiz_card_text">
                {text}
            </div>
            <div style={{backgroundColor: color}} className="quiz_card_tag_difficulty">
                {difficulty}
            </div>
            <div className="quiz_card_tag_order">
                {order}
            </div>
        </Link>
    )
}

export default QuizCard