import '../styles/homepage.css'
import QuizCard from './QuizCard'

function BodyHomePage() {
    return (
        <section className="body_homepage_section">
            <article className='body_homepage_article_header'>Quiz Management</article>
            <QuizCard
                title="Reconocimiento Peces lvl 1"
                text="Practice finding the names of the fish in order."
                difficulty="easy"
                color="#94C788"
                order="ordered"
            />
            <QuizCard 
                title="Reconocimiento Peces lvl 1"
                text="Practice finding the names of the fish in random order."
                difficulty="medium"
                color="#C7BD88"
                order="disorderly"
            />
            <QuizCard 
                title="Reconocimiento Peces lvl 2"
                text="Practice finding the names of the fish in order."
                difficulty="easy"
                color="#94C788"
                order="ordered"
            />
            <QuizCard 
                title="Reconocimiento Peces lvl 2"
                text="Practice finding the names of the fish in random order."
                difficulty="medium"
                color="#C7BD88"
                order="disorderly"
            />
            <QuizCard 
                title="Reconocimiento Peces lvl 2"
                text="Practice finding the names of the fish from all the previous levels"
                difficulty="hard"
                color=""
                order="ordered"
            />
            <QuizCard 
                title="Reconocimiento Peces lvl 3"
                text="Practice finding the names of the fish in order."
                difficulty="easy"
                color="#94C788"
                order="ordered"
            />
            <QuizCard 
                title="Reconocimiento Peces lvl 3"
                text="Practice finding the names of the fish in random order."
                difficulty="medium"
                color="#C7BD88"
                order="disorderly"
            />
            <QuizCard 
                title="Reconocimiento Peces lvl 3"
                text="Practice finding the names of the fish from all the previous levels."
                difficulty="hard"
                color=""
                order="ordered"
            />
            <QuizCard 
                title="Reconocimiento Peces lvl 4"
                text="Practice finding the names of the fish in order."
                difficulty="easy"
                color="#94C788"
                order="ordered"
            />
            <QuizCard 
                title="Reconocimiento Peces lvl 4"
                text="Practice finding the names of the fish in random order."
                difficulty="medium"
                color="#C7BD88"
                order="disorderly"
            />
            <QuizCard 
                title="Reconocimiento Peces lvl 4"
                text="Practice finding the names of the fish from all the previous levels"
                difficulty="hard"
                color=""
                order="ordered"
            />
            <QuizCard 
                title="Reconocimiento Peces lvl 5"
                text="Practice finding the names of the fish in order."
                difficulty="easy"
                color="#94C788"
                order="ordered"
            />
            <QuizCard 
                title="Reconocimiento Peces lvl 5"
                text="Practice finding the names of the fish in random order."
                difficulty="medium"
                color="#C7BD88"
                order="disorderly"
            />
            <QuizCard 
                title="Reconocimiento Peces lvl 5"
                text="Practice finding the names of the fish from all the previous levels"
                difficulty="hard"
                color=""
                order="ordered"
            />
            <QuizCard 
                title="Reconocimiento Peces lvl 6"
                text="Practice finding the names of the fish in order."
                difficulty="easy"
                color="#94C788"
                order="ordered"
            />
            <QuizCard 
                title="Reconocimiento Peces lvl 6"
                text="Practice finding the names of the fish in random order."
                difficulty="medium"
                color="#C7BD88"
                order="disorderly"
            />
            <QuizCard   
                title="Reconocimiento Peces lvl 6"
                text="Practice finding the names of the fish from all the previous levels"
                difficulty="hard" 
                color=""
                order="ordered"
            />
        </section>
    )
}

export default BodyHomePage