import React from 'react';

function HomeDescriptionBox() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', height: '50vh' }}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="https://images.dog.ceo/breeds/terrier-patterdale/Patterdale.jpg" alt="" style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </div>
        <div style={{ flex: 1, color: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
            <p style={{ padding: '1rem', borderRadius: '5px', fontSize: '1.5rem' }}>
            Looking for a new furry friend to join your family? Look no further than Pet Finder! 
            Our comprehensive search tools make it easy to find the perfect dog for you.
            Whether you're looking for a playful pup to keep up with your active lifestyle, or a
            cuddly companion to snuggle up with on the couch, we've got you covered. With thousands of dogs
            available for adoption from shelters and rescue organizations across the country, you're sure to
            find the one that's just right for you. Start your search today and find your next pet with Pet Finder!
            </p>
        </div>
      </div>
      <div style={{ backgroundColor: '#8B4513', height: '80px', display: 'flex', alignItems: 'center',
                     justifyContent: 'center', fontSize: '2rem', fontWeight: 'bold', color: 'white' }}>
        Find your next pet
      </div>
    </div>
  );
}

export default HomeDescriptionBox;
