// Importing necessary hooks and components
import React, { useState } from "react";

// The main App component
function App() {
  // Using the useState hook to create state variables for the current character and search term
  // The currentCharacter is initially set to the first character in the characters array
  // The searchTerm is initially set to an empty string
  const [currentCharacter, setCurrentCharacter] = useState(characters[0]);
  const [searchTerm, setSearchTerm] = useState('');

  // This function updates the currentCharacter state variable when a character is selected
  const handleCharacterSelect = (character) => {
    setCurrentCharacter(character);
  };

  // This creates a new array of characters that includes only those whose full name includes the search term
  // The search is case-insensitive
  const filteredCharacters = characters.filter(character =>
    character.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // The component returns a JSX element
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rick and Morty Character Viewer</h1>
        <input
          type="text"
          placeholder="Search characters..."
          value={searchTerm}
          // When the input changes, the searchTerm state variable is updated
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="character-selector">
          {/* For each character in the filteredCharacters array, a button is created */}
          {/* When a button is clicked, the handleCharacterSelect function is called with the character as an argument */}
          {filteredCharacters.map((character, index) => (
            <button key={index} onClick={() => handleCharacterSelect(character)}>
              {character.fullName}
            </button>
          ))}
        </div>
        <div className="character-display">
          {/* The current character's information is displayed */}
          <h2>{currentCharacter.fullName}</h2>
          <p>Character Trait: {currentCharacter.characterTrait}</p>
          <p>Status: {currentCharacter.status}</p>
          <p>Species: {currentCharacter.species}</p>
          <p>Origin: {currentCharacter.origin}</p>
          <p>Current Location: {currentCharacter.currentLocation}</p>
          <p>Favorite Catchphrase: {currentCharacter.favoriteCatchphrase}</p>
        </div>
      </header>
    </div>
  );
}

// The App component is exported so it can be used in other parts of the application
export default App;