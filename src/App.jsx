/* import { useState } from 'react'


import './App.css'

function App() {
  

  return (
    <>
      
    </>
  )
}

export default App
 */
import React from 'react';

import { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [formData, setFormData] = useState({
    ime: '',
    prezime: '',
    sifra: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Slanje podataka na server pomoću Axios-a
      const response = await axios.post('https://ole99.onrender.com/api/v1/kreiraj', formData);

      // Obrada odgovora od servera (ako je potrebno)
      console.log('Odgovor od servera:', response.data);

      // Resetovanje forme nakon uspešne registracije
      setFormData({
        ime: '',
        prezime: '',
        sifra: ''
      });
    } catch (error) {
      // Obrada greške (ako je potrebno)
      console.error('Greška prilikom registracije:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Ime:
        <input type="text" name="ime" value={formData.ime} onChange={handleChange} />
      </label>
      <br />
      <label>
        Prezime:
        <input type="text" name="prezime" value={formData.prezime} onChange={handleChange} />
      </label>
      <br />
      <label>
        Šifra:
        <input type="password" name="sifra" value={formData.sifra} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Registracija</button>
    </form>
  );
};

export default App;
