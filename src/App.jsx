import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaChevronRight, FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [people, setPeople] = useState(data);
  const [value, setValue] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setValue(value + 1);
    }, 3000);
  }, [value]);
  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>
          Reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, index) => {
          const { id, image, name, title, quote } = person;
          const classs = "active";

          return (
            <article key={id} className={classs}>
              <img src={image} alt="name" className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}

        <button
          className="prev"
          onClick={() =>
            setValue((prev) => {
              return prev - 1;
            })
          }
        >
          <FiChevronLeft />
        </button>
        <button
          className="next"
          onClick={() =>
            setValue((prev) => {
              console.log(prev);
              return prev + 1;
            })
          }
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
