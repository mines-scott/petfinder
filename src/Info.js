import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from './NavBar';
import './App.css';

function Info() {
  const { id } = useParams();

  const dogs = {
    1: {
      url: 'https://images.dog.ceo/breeds/cattledog-australian/IMG_5481.jpg',
      name: 'Buddy',
      age: 2,
      breed: 'Labrador Retriever',
      location: 'San Francisco, CA',
      description: 'Buddy is a playful and energetic pup who loves long walks on the beach.',
    },
    2: {
      url: 'https://images.dog.ceo/breeds/mastiff-bull/n02108422_2052.jpg',
      name: 'Daisy',
      age: 3,
      breed: 'Golden Retriever',
      location: 'Los Angeles, CA',
      description: 'Daisy is a sweet and affectionate dog who enjoys cuddles and belly rubs.',
    },
    3: {
      url: 'https://images.dog.ceo/breeds/doberman/n02107142_21.jpg',
      name: 'Rocky',
      age: 4,
      breed: 'German Shepherd',
      location: 'New York, NY',
      description: 'Rocky is a loyal and protective dog who loves to play catch and go for hikes.',
    },
    4: {
      url: 'https://images.dog.ceo/breeds/retriever-curly/n02099429_120.jpg',
      name: 'Luna',
      age: 5,
      breed: 'Husky',
      location: 'Seattle, WA',
      description: 'Luna is a spirited and adventurous dog who loves to explore the outdoors.',
    },
  };

  const dog = dogs[id];

  return (
    <>
    <NavBar customText="Info" />
    <div className="info-container">
      <div className="dog-info">
        <div className="dog-image-container">
          <img src={dog.url} alt={dog.name} className="dog-image" />
        </div>
        <div className="dog-description">
          <h2>{dog.name}</h2>
          <p>Age: {dog.age}</p>
          <p>Breed: {dog.breed}</p>
          <p>Location: {dog.location}</p>
          <p className="description-text">Description: {dog.description}</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Info;
