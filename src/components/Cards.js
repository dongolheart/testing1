import React from 'react'

import './Cards.css'


const Cards = () => {
    return (
        <>
        <center><h2>Our Service</h2></center>
         <div className='cards'>
             
             <div className='cards_container'>
                 <div className='cards_wrapper'>
                     <ul className='cards_items'>
                        



 {/* Three columns of text below the carousel  */}
<div class="row">
  <div class="col-lg-4">
    
      <img src="img/logo192.png"/>                   
    <h2>Career Counseling</h2>
    <p>It is always difficult for the students to select which career path they should follow. With the increasing number of career options today it has become far more complex a decision...</p>
    
   </div>{/* /.col-lg-4 --> */}
  <div class="col-lg-4">
    <img src="img/exam_coaching_1.png"/>

    <h2>Course Selection</h2>
    <p>We provide special attention to student course selection procedure with highlighting their past academic records to avoid error free application. We assist students in choosing the right course as it can change their whole life!</p>
   
   </div> {/*/.col-lg-4  */}
  <div class="col-lg-4">
    <img src="img/admission.png"/>

    <h2>Exam & Coaching</h2>
    
   </div>{/*/.col-lg-4 --> */}
   <div class="col-lg-4">
    
    <img src="img/scholarship.png"/>                   
  <h2>Scholarship Guidance</h2>
  <p>We understand the value of money spent and try our best to get students some form of financial aid in the form of tuition fee bursaries, scholarships, application fee waivers, etc...</p>
  
 </div> 
 <div class="col-lg-4">
    
      <img src="img/passport.png"/>                   
    <h2>Visa Assistance</h2>
    <p>As an International student it is very likely that you will require a valid visa before commencing study in most of the countries across the world...</p>
    
   </div> 
    
</div>

                         
                     </ul>
                 </div>
             </div>
             
             </div> 
             {/* <Contact/>  
             <Gallery/> */}
        </>
    );
}

export default Cards
