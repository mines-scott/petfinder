import React from 'react';
import HomeDescriptionBox from './HomeDescriptionBox';
import NavBar from './NavBar';
import Circle from './Circle';

function Home() {
    const dogs = [
        { id: 1, url: 'https://images.dog.ceo/breeds/cattledog-australian/IMG_5481.jpg' },
        { id: 2, url: 'https://images.dog.ceo/breeds/mastiff-bull/n02108422_2052.jpg' },
        { id: 3, url: 'https://images.dog.ceo/breeds/doberman/n02107142_21.jpg' },
        { id: 4, url: 'https://images.dog.ceo/breeds/retriever-curly/n02099429_120.jpg' },
    ];
    return (
        <div>
            <NavBar customText="Home" />
            <HomeDescriptionBox />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
            {dogs.map((dog) => (
                <Circle key={dog.id} url={dog.url} id={dog.id} />
            ))}
            </div>
        </div>
    );
}

export default Home;
