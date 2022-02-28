import React from 'react'
import '../pages/book.css'

const book = () => {
    return (
        <>
           <section>
               <div className="container">
                   <div className="card">
                       <div className="img-box">
                           <img src="./img/minano.jpg" width="100%"/>
                       </div>
                       <div className="details">
                           <h1>Mr</h1>
                           <p>this is paragraph note</p>
                       </div>

                       
                   </div>
                   
                   <div className="card">
                       <div className="img-box">
                           <img src="./img/minano1.jpg" width="100%"/>
                       </div>
                       <div className="details">
                            <h1>Hiragana</h1>
                           <img src="./img/hiragana.gif" width="100%" height="350px"/>
                           <button on onClick/>
                           
                       </div>

                       
                   </div>
                   <div className="card">
                       <div className="img-box">
                           <img src="./img/minano2.jpg" width="100%"/>
                       </div>
                       <div className="details">
                           <h1>Mr</h1>
                           <p>this is paragraph note</p>
                       </div>

                       
                   </div>
                   
               </div>
               </section> 
        </>
    )
}

export default book
