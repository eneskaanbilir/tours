import { useState } from 'react';
import './tours.css'
function Tours({data,del,set}) {
   
  const [showMore, setShowMore] = useState(false);

  const shortText = data.info.split(" ").slice(0, 20).join(" ");


   return(
   <article  >
     <div className="single-tour">
      <img src={data.image} alt="" />
         <div className="tour-info">
            <span className="tour-price">$ {data.price}</span>
            <h4>{data.name}</h4>
            <p>{showMore ? data.info : shortText}</p>
      {showMore ? (
        <button onClick={() => setShowMore(false)}>Show Less</button>
      ) : (
        <button onClick={() => setShowMore(true)}>Read More</button>
      )}
            <button className="delete-btn" onClick={()=>del(data.id)} >not interested</button>
      </div>
   </div>
   </article>

   )
}
export default Tours;