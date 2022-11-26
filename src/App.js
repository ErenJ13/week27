import React, {useState} from 'react';
import './App.css';
import Card from './components/Card';


const cards = [
  {
id: "1",
  name: "Безлимитный 300",
  price: "300",
  scor: "до 10 Мбит/сек",
  info: "Объем включенного трафика неограничен",
  color: "rgb(99, 209, 245)",
},
{
  id: "2",
  name: "Безлимитный 450",
  price: "450",
  scor: "до 50 Мбит/сек",
  info: "Объем включенного трафика неограничен",
  color: "rgb(53, 172, 152)"
}, 
{
  id: "3",
  name: "Безлимитный 550",
  price: "550",
  scor: "до 100 Мбит/сек",
  info: "Объем включенного трафика неограничен",
 
  color: "rgb(219, 102, 78)",
},
{
  id: "4",
  name: "Безлимитный 1000",
  price: "1000/",
  scor: "до 200 Мбит/сек",
  info: "Объем включенного трафика неограничен",
  color: "rgb(68, 63, 63)",
}
]
export default function App() {
  const [currentData, setCurrentData] = useState(cards);

const handleClick = (id) => {
  setCurrentData(prevState => prevState.map(card => card.id === id ? ({ ...card, isChecked: true }) : ({ ...card, isChecked: false })))
};


     return ( 
      <div className = "App">
        <div className="cardsFlex">
            {
            currentData.map(card =>
                <Card {...card} key = {card.id} onClick={handleClick}></Card>
            )
          }
        </div>
      </div>
    );
  }