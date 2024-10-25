import './App.css';
import Pozycja from './film.jsx';
import klekszdj from './kleks.jpg';
import aquazdj from './aquaman.jpg';
import ferzdj from './ferrari.jpg';
import fukszdj from './fuks.jpg';
import matkazdj from './matka.jpg';
import mickzdj from './mick.jpg';
import wyfruzdj from './wyfru.jpg'
const tablica = [{zdj:klekszdj, tytul:"AKADEMIA PANA KLEKSA", opis:"familijny/przygodowy/fantasy", godz1:"15:30", godz2:"18:15" },
  {zdj:aquazdj, tytul:"AQUAMAN I ZAGINIONE KRÓLESTWO/dubbing", opis:"science-fiction/akcja/przygodowy", godz1:"17:00" },
  {zdj:aquazdj, tytul:"AQUAMAN I ZAGINIONE KRÓLESTWO/napisy", opis:"science-fiction/akcja/przygodowy", godz1:"19:30"},
  {zdj:ferzdj, tytul:"FERRARI/napisy", opis:"biograficzny/dramat", godz1:"17:00", godz2:"19:45" },
  {zdj:fukszdj, tytul:"FUKS 2", opis:"komedia/sensacyjny", godz1:"20:45"},
  {zdj:matkazdj, tytul:"MATKA SIEDZI Z TYŁU/napisy", opis:"komedia/dramat", godz1:"19:00"},
  {zdj:mickzdj, tytul:"PIEP*ZYĆ MICKIEWICZA", opis:"obyczajowy", godz1:"20:00"},
  {zdj:wyfruzdj, tytul:"WYFRUNIĘCI/dubbing", opis:"animowany/przygodowy", godz1:"16:00", godz2:"18:00" }
]
function App() {
  return (
    <div>
    <div>
      <Pozycja wypis={tablica[0]}/>  
      <hr/>
      <Pozycja wypis={tablica[1]}/>
      <hr/>
      <Pozycja wypis={tablica[2]}/>
      <hr/>
      <Pozycja wypis={tablica[3]}/>
      <hr/>
      <Pozycja wypis={tablica[4]}/>
      <hr/>
      <Pozycja wypis={tablica[5]}/>
      <hr/>
      <Pozycja wypis={tablica[6]}/>
      <hr/>
      <Pozycja wypis={tablica[7]}/>
    </div>
    <hr/>
    </div>  
  );
}

export default App;
