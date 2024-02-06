import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import database from "./firebase";
import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Richard Hendricks",
      url: "https://d1qxviojg2h5lt.cloudfront.net/images/01DVE8XQTBZY43FEMZQ3Q97XGT/middleditch.valley570.webp",
    },
    {
      name: "Mark Zuckerberg",
      url: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcS2ajWBAMLqptY72y6lkG__9AyFvazHB9_y1ehP-_xM8tUbwuL0SzSTVokPBrmfh4lkpDy15--faH8nbd4",
    },
    {
      name: "Steve Jobs",
      url: "https://hips.hearstapps.com/hmg-prod/images/apple-ceo-steve-jobs-speaks-during-an-apple-special-event-news-photo-1683661736.jpg?crop=0.800xw:0.563xh;0.0657xw,0.0147xh&resize=1200:*",
    },
  ]);

  //piece of code which runs based on a condition
  useEffect(() => {
    //this is where the code runs

    //this will run ONCE when the component loads, and never again
    const unsubscribe = database
      .collection("people")
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );

    return () => {
      //this is the cleanup
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
