import {Card} from './Card.jsx'
import './Header.css'
// import {Card1} from './Card.jsx'
// import {Card2} from './Card.jsx'
function Header(){
    return(
      <div >
        <section className="cards-section" id="services">
        <div className="section-heading">
          {/* <p>WHAT WE OFFER</p> */}
          <h2>Explore Our Services</h2>
        </div>
        </section>

        <footer class ="footer-content">
        <Card className="card1" name="React Devlopment" content=" react Build powerful and interactive user interfaces with React and modern JavaScript."/>
        <Card className="card2" name="Next Devlopment" content=" ai Build powerful and interactive user interfaces with React and modern ai."/>
        <Card name="ML Devlopment" content="Node Build powerful and interactive user interfaces with React and modern JavaScript ml."/>
        {/* <Card1/>
        <Card2/> */}
        </footer>
        </div>
    )
}
export default Header ;