const A = (props) => {
    return ( 
    <div className="sentA">
        <h1>Sentiment Analysis</h1>
        <p>{props.diffReviews.sentiment}</p>
    </div> 
    );
}
 
export default A;