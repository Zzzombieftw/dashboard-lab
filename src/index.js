import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Dash from './Dash'
import Reviews from './Reviews'
import Rating from './AvergRating'
import A from './SentAna'
import Vists from './Vist'

const website ={
  reviews: 1 ,
  rating: 5.3,
  sentiment: [ <ul>
    960, 122, 321
  </ul>],
  visiters: 590,

  


}

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Dash />
    <Reviews reviews={website}/>
    <Rating rating={website}/>
    <A diffReviews={website}/>
    <Vists vist ={website}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
