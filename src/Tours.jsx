import './tours.css'
function Tours() {
   
   return(
   <div className='tours' >
      <div className="single-tour">
         <img src="" alt="" />
         <div className="tour-info">
            <span className="tour-price">19.90</span>
            <h4>başlık</h4>
            <p>bilgi
            <button className='readMore'>Read More</button>
            </p>
            <button className="delete-btn">not interested</button>
         </div>
      </div>
   </div>
   )
}
export default Tours;