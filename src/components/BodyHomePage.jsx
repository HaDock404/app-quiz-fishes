import '../styles/homepage.css'
import QuizCard from './QuizCard'

function BodyHomePage() {
    return (
        <section className="body_homepage_section">
            <article className='body_homepage_article_header'>
                <span className='body_homepage_article_header_title'>Quiz Management</span>
            </article>
            <QuizCard
                to="/quiz"
                data="quiz_01.json"
                title="Reconocimiento Peces lvl 1"
                text="Practice finding the names of the fish in order."
                difficulty="easy"
                color="#94C788"
                order="ordered"
            />
            <QuizCard 
                to="/random-quiz"
                data="quiz_01.json"
                title="Reconocimiento Peces lvl 1"
                text="Practice finding the names of the fish in random order."
                difficulty="medium"
                color="#C7BD88"
                order="disorderly"
            />
            <QuizCard 
                to="/quiz"
                data="quiz_02.json"
                title="Reconocimiento Peces lvl 2"
                text="Practice finding the names of the fish in order."
                difficulty="easy"
                color="#94C788"
                order="ordered"
            />
            <QuizCard 
                to="/random-quiz"
                data="quiz_02.json"
                title="Reconocimiento Peces lvl 2"
                text="Practice finding the names of the fish in random order."
                difficulty="medium"
                color="#C7BD88"
                order="disorderly"
            />
            <QuizCard 
                to="/random-quiz"
                data="quiz_02bis.json"
                title="Reconocimiento Peces lvl 2"
                text="Practice finding the names of the fish from all the previous levels"
                difficulty="hard"
                color=""
                order="disorderly"
            />
            <QuizCard
                to="/quiz"
                data="quiz_03.json"
                title="Reconocimiento Peces lvl 3"
                text="Practice finding the names of the fish in order."
                difficulty="easy"
                color="#94C788"
                order="ordered"
            />
            <QuizCard
                to="/random-quiz"
                data="quiz_03.json"
                title="Reconocimiento Peces lvl 3"
                text="Practice finding the names of the fish in random order."
                difficulty="medium"
                color="#C7BD88"
                order="disorderly"
            />
            <QuizCard 
                to="/random-quiz"
                data="quiz_03bis.json"
                title="Reconocimiento Peces lvl 3"
                text="Practice finding the names of the fish from all the previous levels."
                difficulty="hard"
                color=""
                order="disorderly"
            />
            <QuizCard 
                to="/quiz"
                data="quiz_04.json"
                title="Reconocimiento Peces lvl 4"
                text="Practice finding the names of the fish in order."
                difficulty="easy"
                color="#94C788"
                order="ordered"
            />
            <QuizCard 
                to="/random-quiz"
                data="quiz_04.json"
                title="Reconocimiento Peces lvl 4"
                text="Practice finding the names of the fish in random order."
                difficulty="medium"
                color="#C7BD88"
                order="disorderly"
            />
            <QuizCard 
                to="/random-quiz"
                data="quiz_04bis.json"
                title="Reconocimiento Peces lvl 4"
                text="Practice finding the names of the fish from all the previous levels"
                difficulty="hard"
                color=""
                order="disorderly"
            />
            <QuizCard 
                to="/quiz"
                data="quiz_05.json"
                title="Reconocimiento Peces lvl 5"
                text="Practice finding the names of the fish in order."
                difficulty="easy"
                color="#94C788"
                order="ordered"
            />
            <QuizCard 
                to="/random-quiz"
                data="quiz_05.json"
                title="Reconocimiento Peces lvl 5"
                text="Practice finding the names of the fish in random order."
                difficulty="medium"
                color="#C7BD88"
                order="disorderly"
            />
            <QuizCard 
                to="/random-quiz"
                data="quiz_05bis.json"
                title="Reconocimiento Peces lvl 5"
                text="Practice finding the names of the fish from all the previous levels"
                difficulty="hard"
                color=""
                order="disorderly"
            />
            <QuizCard 
                to="/quiz"
                data="quiz_06.json"
                title="Reconocimiento Peces lvl 6"
                text="Practice finding the names of the fish in order."
                difficulty="easy"
                color="#94C788"
                order="ordered"
            />
            <QuizCard 
                to="/random-quiz"
                data="quiz_06.json"
                title="Reconocimiento Peces lvl 6"
                text="Practice finding the names of the fish in random order."
                difficulty="medium"
                color="#C7BD88"
                order="disorderly"
            />
            <QuizCard   
                to="/random-quiz"
                data="quiz_06bis.json"
                title="Reconocimiento Peces lvl 6"
                text="Practice finding the names of the fish from all the previous levels"
                difficulty="hard" 
                color=""
                order="disorderly"
            />
            <QuizCard   
                to="/ten-random-quiz"
                data="quiz_06bis.json"
                title="Reconocimiento Peces lvl 7"
                text="Practice finding the names of 10 fishes from all the previous levels"
                difficulty="hard" 
                color=""
                order="disorderly"
            />
        </section>
    )
}

export default BodyHomePage