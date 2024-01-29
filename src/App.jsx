/* 
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
      const response = await axios.post('http://localhost:3000/kreiraj', formData);

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

export default App; */

import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [formData, setFormData] = useState({
    ime: '',
    prezime: '',
    sifra: ''
  });

  const [provjeraPodaci, setProvjeraPodaci] = useState({
    provjeraIme: '',
    provjeraPrezime: ''
  });

  const [provjeraRezultat, setProvjeraRezultat] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleProvjeraChange = (e) => {
    setProvjeraPodaci({ ...provjeraPodaci, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Slanje podataka na server pomoću Axios-a za kreiranje korisnika
      const response = await axios.post('http://localhost:3000/kreiraj', formData);

      // Obrada odgovora od servera (ako je potrebno)
      console.log('Odgovor od servera za kreiranje:', response.data);

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

  const handleProvjera = async () => {
    try {
      // Slanje podataka na server pomoću Axios-a za provjeru korisnika
      const response = await axios.post('http://localhost:3000/provjeri', provjeraPodaci);

      // Obrada odgovora od servera za provjeru
      console.log('Odgovor od servera za provjeru:', response.data);

      // Postavljanje rezultata provjere u stanje
      setProvjeraRezultat(response.data);
    } catch (error) {
      // Obrada greške (ako je potrebno)
      console.error('Greška prilikom provjere korisnika:', error);
    }
  };

  return (
    <div>
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

      <br />

      <div>
        <label>
          Provjera imena:
          <input type="text" name="provjeraIme" value={provjeraPodaci.provjeraIme} onChange={handleProvjeraChange} />
        </label>
        <br />
        <label>
          Provjera prezimena:
          <input type="text" name="provjeraPrezime" value={provjeraPodaci.provjeraPrezime} onChange={handleProvjeraChange} />
        </label>
        <br />
        <button onClick={handleProvjera}>Provjera</button>
        {provjeraRezultat && (
          <div>
            <p>{provjeraRezultat.poruka}</p>
            {provjeraRezultat.korisnik && (
              <p>
                Pronađeni korisnik: {provjeraRezultat.korisnik.ime} {provjeraRezultat.korisnik.prezime}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;




/* 
// Uvozimo React i useEffect hook za asinhroni poziv API-ju
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Definišemo komponentu
const ApiComponent = () => {
  // Stanje za čuvanje podataka iz API-ja
  const [data, setData] = useState([]);



  // useEffect hook za izvršavanje koda nakon što se komponenta montira
  useEffect(() => {
    // Funkcija za dohvaćanje podataka iz API-ja
    const fetchData = async () => {
      try {
        // Dohvaćamo podatke iz API-ja
        const response = await axios.get('https://apipravi.onrender.com/vans');

        // Postavljamo podatke u stanje
        console.log(response)
        setData(response.data);
      } catch (error) {
        console.error('Greška pri dohvaćanju podataka:', error);
      }
    };

    // Pozivamo funkciju za dohvaćanje podataka
    fetchData();
  }, []); // Pratimo prazan niz zavisnosti kako bismo izbegli beskonačne petlje



  // Prikazujemo podatke u JSX-u
  return (
   

      <div>
       <h1>Podaci iz API-ja:</h1>
       {data ? (
         <pre>{JSON.stringify(data, null, 2)}</pre>
 
       ) : (
         <p>Dohvaćanje podataka...</p>
       )}
 
     </div> 
  );
};

// Izvozimo komponentu
export default ApiComponent;
 */