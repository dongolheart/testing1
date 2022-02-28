import React from 'react'
import './AboutUs.css'
import { Map, GoogleApiWrapper } from 'google-maps-react';


const AboutUs = () => {
    return (
        <div className='Main'>
            {/* left start */}
            <div className='left'>
        <div className="History">
         
         <table class="table table-borderless">
  <thead>
    <tr>
      
      <th scope="col">Name</th>
      <th scope="col">StudyJapanSupportCenter</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td>Managing director</td>
      <td>Shyam Lama
      
      </td>
      <img src="img/shyam.jpg" width="80px"/>
      
      
    </tr>
    <tr>
      
      <td>Japan Partnership</td>
      <td>Hasta Lama</td>
      <img src="img/Hasta.jpg" width="90px"/>
     
    </tr>

    <tr>
      
      <td>Telephone number(whatsApp/viber)</td>
      <td>9843930248</td>
     
    </tr>
    

    <tr>
      
      <td>Number</td>
      <td>4</td>
     
    </tr>
    <tr>
      
      <td>Map</td>
      <td>Bag Bazar Sadak, Kathmandu 44600</td>
     
    </tr>
    <tr>
      
      <td>URL</td>
      <td></td>
     
    </tr>
    
  </tbody>
</table>
<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FStudy-Japan-Support-Center-118353246228302%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="500" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
</div> 
{/* left end */}


         </div>   
</div>
    )
}

export default AboutUs
