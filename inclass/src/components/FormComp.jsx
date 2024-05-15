// import React from 'react'
// import  { useState } from 'react'
// import { Form ,Col} from 'react-bootstrap'
// import { data } from '../helpers/data'
// import PlayerCard from './PlayerCard';




// const FormComp = () => {

//     const [search,setSearch]=useState(" ")
//     const filteredData=data.filter(item=>item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) )//includes(search)  item içerisinde yazılan name kontrol eder ve var mı yok mu ona bakar varsa true dönenleri filtered dataya atar

//   return (
//     <div>

// <Form.Control 
//     placeholder= "search a player"
//     className="w-50 m-auto " 
    
//     onChange={(e)=>setSearch(e.target.value)}/> 



// {filteredData.map((player,i,showImage)=>(
//             <Col key={i} xl={3} lg={4} md={6}>
//             <PlayerCard {...player} showImage={showImage}/>burada 3 nokta player "playere aç ve içindeki tüm bilgileri props olarak gönder demek "
//            </Col>
//         ))} 
//     </div>
//   )
// }

// export default FormComp