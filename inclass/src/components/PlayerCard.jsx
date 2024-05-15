    import React from 'react'
import { useState } from 'react';
    import {Card} from 'react-bootstrap';
    
    const PlayerCard = ({img,name,statistics}) => {
        const [showImage,setShowImage] = useState(true)

      return (
        <div>
             <Card className="rounded-2 m-auto  player-card " role="button" onClick={()=>setShowImage(!showImage)}>{/*buradaki show image her tıkladığımda tersini alıyor ve geri çeviriyor */}
            {  showImage ? //burada  show image tru ise logoyu değilse detayları göstermek için bir props aldın bir üst componentten
             (  <Card.Img variant="top" src={img} className="player-logo"/>):(
                <ul className="m-auto">
                    {statistics.map((item,i)=>(
                        <li className="list-unstyled h5 text-start " key={i}>
                        {" "}
                        🏀 {item}
                        </li>
                    ))}
                </ul>)}
             <Card.Footer>
                <Card.Title>{name}</Card.Title>
               
             </Card.Footer>
           </Card>
        </div>
      )
    }
    
    export default PlayerCard