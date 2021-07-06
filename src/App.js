import './App.css';
import {useEffect,useState} from 'react'
import src from './Assets/ahmed-zayan-ABUWC-0a7_A-unsplash.jpg'

function App() {
  // const data=[
  //   "age",
  //   "alone",
  //   "amazing",
  //   "anger",
  //   "anniversary",
  //   "architecture",
  //   "art",
  //   "attitude",
  //   "beauty",
  //   "best",
  //   "birthday",
  //   "business",
  //   "car",
  //   "change",
  //   "communication",
  //   "computers",
  //   "cool",
  //   "courage",
  //   "dad",
  //   "dating",
  //   "death",
  //   "design",
  //   "diet",
  //   "dreams",
  //   "education",
  //   "environmental",
  //   "equality",
  //   "experience",
  //   "failure",
  //   "faith",
  //   "family",
  //   "famous",
  //   "fear",
  //   "finance",
  //   "fitness",
  //   "food",
  //   "forgiveness",
  //   "freedom",
  //   "friendship",
  //   "funny",
  //   "future",
  //   "gardening",
  //   "god",
  //   "good",
  //   "government",
  //   "graduation",
  //   "great",
  //   "happiness",
  //   "health",
  //   "history",
  //   "home",
  //   "hope",
  //   "humor",
  //   "imagination",
  //   "inspirational",
  //   "intelligence",
  //   "jealousy",
  //   "knowledge",
  //   "leadership",
  //   "learning",
  //   "legal",
  //   "life",
  //   "love",
  //   "marriage",
  //   "medical",
  //   "men",
  //   "mom",
  //   "money",
  //   "morning",
  //   "motivational",
  //   "movies",
  //   "movingon",
  //   "music",
  //   "nature",
  //   "parenting",
  //   "patience",
  //   "patriotism",
  //   "peace",
  //   "pet",
  //   "poetry",
  //   "politics",
  //   "positive",
  //   "power",
  //   "relationship",
  //   "religion",
  //   "respect",
  //   "romantic",
  //   "sad",
  //   "science",
  //   "smile",
  //   "society",
  //   "sports",
  //   "strength",
  //   "success",
  //   "sympathy",
  //   "teacher",
  //   "technology",
  //   "teen",
  //   "thankful",
  //   "time",
  //   "travel",
  //   "trust",
  //   "truth",
  //   "war",
  //   "wedding"
  // ];


  // useEffect(()=>{
  //   fetch("https://api.unsplash.com/photos/random?count=1&client_id=ul0jACoDefnN_tKa6ysL3UkBaN_DrYi0ODgX5uNXbJc")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data[0].urls.regular)
  //     return setPhotos(data)});
  // },[])

  const [quote,setQuote]=useState({})

  const getQuote=()=>{
    fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
    .then((response) => response.json())
    .then((data)=>{
      let quote=data.data[0].quoteText;
      let author=data.data[0].quoteAuthor;
      setQuote({msg:quote,author:author})
    })
  }
  useEffect(()=>{
    getQuote();
  },[])


  const Background="./Assets/ahmed-zayan-ABUWC-0a7_A-unsplash.jpg"

  return (
    <div className="App" style={{backgroundImage: `url(${src})`}} >
      <div className="container card">
        <p className="quote">{quote.msg}</p>
        <p className="author">{quote.author}</p>
      </div>

      <button className="container g-b" onClick={getQuote}>Generate <i className="fas fa-sync"></i></button>
    </div>
  );
}

export default App;
