import './Card.scss'

const Card = () => {
  return (
    <div className="container-card">
        <img className="img" src="/assets/header.jpg" alt="image" />
        <div className="text">
            <p className="genre">Fantasy</p>
            <h3 className="title">Demon Slayer: Kimetsu no Yaiba</h3>
            <p className="description">Demon Slayer: Kimetsu no Yaiba is a Japanese manga series written and illustrated by Koyoharu Gotouge. It was serialized in Shueisha shōnen manga magazine Weekly Shōnen Jump from February 2016 to May 2020</p>
        </div>
        <div className="small__text">
            <span className="author">James Rogan</span>
            <span className="date">July 22, 2023</span>
        </div>
    </div>
  )
}

export default Card