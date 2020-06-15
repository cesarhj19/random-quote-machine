import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [index, setIndex] = useState(0);
  const tweets = [
    {
      tweet: 'Tilda Swinton is what happens when a lamp from IKEA becomes self aware.',
      author: 'sammyrhodes'
    },
    {
      tweet: 'Idea: A non-violent stun gun that yells "Cuba Gooding, Jr. has an Oscar!',
      author: 'badbanana'
    },
    {
      tweet: 'Dear High School Reunions, You are now obsolete. Please contact facebook with any questions.',
      author: 'capricecrane'
    },
    {
      tweet: "I'm not saying you're fat, but you should consider having CPR instructions tattooed on your chest.",
      author: 'rickyzicky'
    }
  ];


  const randomNumber = () => {
    return Math.floor(Math.random() * 4);
  }

  const handleClick = () => {
    setIndex(randomNumber());
  }

  useEffect(() => {
    setIndex(randomNumber());
  }, [])

  return (
    <div className="App">
      <div id='quote-box'>
        <h1 id='text'>{tweets[index].tweet}</h1>
        <h2 id='author'>{tweets[index].author}</h2>
        <button onClick={handleClick} id='new-quote'>new quote</button>
        <a id='tweet-quote' href='twitter.com/intent/tweet'>tweet</a>
      </div>
    </div>
  );
}

export default App;
