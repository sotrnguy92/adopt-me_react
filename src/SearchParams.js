import { useState } from "react";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

export const SearchParams = () => {
  const [location, setLocation] = useState("Seatle, WA");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const breeds = [];

  return (
    <div className="search-params">
      <form action="">
        <label htmlFor="location">
          Location
          <input
            id="location"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          Animal 
          <select 
            id="animal"
            value={animal}
            onChange = {(e) => setAnimal(e.target.value)}
            onBlur = {(e) => setAnimal(e.target.value)}
          >
            <option/>
            {
              ANIMALS.map(animal => (
                <option value={animal} key={animal}>
                  {animal}
                </option>
              ))
            }
          </select>          
        </label>
         <label htmlFor="breed">
          Breed 
          <select 
            id="breed"
            value={breed}
            onChange = {(e) => setBreed(e.target.value)}
            onBlur = {(e) => setBreed(e.target.value)}
          >
            <option/>
            {
              breeds.map(breed => (
                <option value={breed} key={breed}>
                  {breed}
                </option>
              ))
            }
          </select>          
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};
