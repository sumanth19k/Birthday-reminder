import React, { useState } from "react";
import data from "./data";
// import List from "./List";
function App() {
  const [people, setPeople] = useState(data);
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        {/* <List people={people} /> */}
        {people.map((person) => {
          const { id, name, age, image } = person;
          return (
            <article key={id} className="person">
              <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <p>{age} years old</p>
              </div>
              <button className="btn" onClick={() => removeItem(id)}>
                Wished them!
              </button>
            </article>
          );
        })}
        <button className="button1" onClick={() => setPeople([])}>
          Clear all
        </button>
      </section>
    </main>
  );
}

export default App;
