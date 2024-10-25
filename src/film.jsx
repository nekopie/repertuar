import './film.css';

function Pozycja(props){return(<div className='kontener'>
    <img src={props.wypis.zdj}/>
    <div className='tekst'>
    <b>{props.wypis.tytul}</b> &nbsp; <br/>
    <i><b>{props.wypis.opis}</b></i> &nbsp;
    </div>
        <div className='pos'>   

            <div className='godzina'>{props.wypis.godz1}</div> &nbsp;
            <div className='godzina'>{props.wypis.godz2}</div> <br/>
        </div>
</div>);}

export default Pozycja;