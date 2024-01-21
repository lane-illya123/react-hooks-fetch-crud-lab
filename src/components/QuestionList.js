import React, {useEffect, useState} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  
  const [items, setItems] = useState([])

  function handleItemAdd(newItem){
    console.log("new Question:" , newItem)
  }

  function onDeleteItem(deletedItem) {
    const updatedItems = items.filter((item) => item.id !== deletedItem.id);
  setItems(updatedItems);
  }
  
  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((r) => r.json())
      .then((items) => setItems(items));
  }, []);

  const question = items.map((item) => (
    <QuestionItem question={item} onDeletedItem={onDeleteItem}/>
  ));

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{question}</ul>
    </section>
  );
}

export default QuestionList;
