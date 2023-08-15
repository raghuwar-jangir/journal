import React, { useEffect, useState } from "react";

function Quote() {
  console.count('rendered :  ');
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);

  useEffect(() => {
   const fx = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      if(response.ok) {
        const data  = await response.json();
        setTimeout(() => {
          setQuote(data.content);
          setAuthor(data.author);
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
   }
   fx();
  }, [])
  return (
    <section className="quote-container">
      <h2 className="quote-title">Quote</h2>
      {author && quote ? (<p className="quote-text">
        "{quote}" - {author}
      </p>): (<p>Loading...</p>)}
      
    </section>
  );
}

export default Quote;
