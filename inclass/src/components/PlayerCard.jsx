    import React from 'react'
    import {Card} from 'react-bootstrap';
    
    const PlayerCard = ({img,name}) => {
      return (
        <div>
             <Card className="rounded-2 m-auto  player-card">
             <Card.Img variant="top" src={img} className="player-logo"/>
             <Card.Footer>
                <Card.Title>{name}</Card.Title>
               
             </Card.Footer>
           </Card>
        </div>
      )
    }
    
    export default PlayerCard