import React from 'react';

import Circle from './Circle';
import HomeDescriptionBox from './HomeDescriptionBox';
import NavBar from './NavBar';

async function Home() {
  let dogs =
      await fetch('127.0.0.1:3001/pets').then((response) => response.text());
  console.log(dogs);

    return (
        <div>
            <NavBar customText='Home' />
            <HomeDescriptionBox />
            <div style={{
    display: 'flex', justifyContent: 'center' }}>
            {dogs.map((dog) => (
                <Circle key={dog.id} url={dog.url} id={
      dog.id} />
            ))}
            </div>
        </div>
    );
}

export default Home;
