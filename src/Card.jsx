function Card({name,content,className}){
    // console.log(props);
    
    return(
        <div className={`card featured-card ${className || ''}`} >
            <div className="card-icon">⚡</div>
            <h3>{name}</h3>
            <p>
              {content}
            </p>
            <a href="#">Learn More →</a>
          </div>
    )
}
// function Card1(){
//     return(
//         <div className="card featured-card">
//             <div className="card-icon">⚡</div>
//             <h3>AI and ML</h3>
//             <p>
//               Build powerful and interactive user interfaces
//               with React and modern JavaScript.
//             </p>
//             <a href="#">Learn More →</a>
//           </div>
//     )
// }
// function Card2(){
//     return(
//         <div className="card featured-card">
//             <div className="card-icon">⚡</div>
//             <h3>Mongo Db</h3>
//             <p>
//               Build powerful and interactive user interfaces
//               with React and modern JavaScript.
//             </p>
//             <a href="#">Learn More →</a>
//           </div>
//     )
// }
export {Card} ;