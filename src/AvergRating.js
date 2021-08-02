const Rating = (props) => {
    return ( 
        <div className="averg">
           <h1> Averge Rating</h1> 
           <p>{props.rating.rating}</p>
        </div>
     );
}
 
export default Rating;