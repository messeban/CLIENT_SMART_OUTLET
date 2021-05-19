import React from 'react'
import { Button } from '../Button/Button';
import './Hero.css'

import {
    Link, useHistory
} from "react-router-dom";


function Hero() {

    let history = useHistory();

    return (
        <>
            <div className="hero-container">
                <div className="intro">
                    <h1 className="introText">Het idee van het PWO</h1>
<p>Dit PWO voorstel ontstond uit de vraag “Hoe kunnen we een reeds bestaande elektrische verbruiker slim en energiezuiniger kan maken”?
          Denk maar aan uw televisie of microgolf. Het ontwerpen van een gebruiksvriendelijke “Artificieel Intelligentie plug-in stopcontact”
          om zo sluimerverbruik tegen te gaan. Want onze maatschappij wordt steeds meer gedomineerd door elektronische apparaten. Die toestellen
          laat de consument meestal in “stand-by modus” staan, waardoor je al snel enkele euro’s per dag verspilt aan het sluimerverbruik.</p>                </div>
            </div>
            <div className="hero-container">
                <div>
                <h5 className="center">Het idee van het PWO</h5>
                <p>
                    Dit PWO voorstel ontstond uit de vraag “Hoe kunnen we een reeds bestaande elektrische verbruiker slim en energiezuiniger kan maken”?
                    Denk maar aan uw televisie of microgolf. Het ontwerpen van een gebruiksvriendelijke “Artificieel Intelligentie plug-in stopcontact”
                    om zo sluimerverbruik tegen te gaan. Want onze maatschappij wordt steeds meer gedomineerd door elektronische apparaten. Die toestellen
                    laat de consument meestal in “stand-by modus” staan, waardoor je al snel enkele euro’s per dag verspilt aan het sluimerverbruik.
        </p>

        <h5 className="center">De aanpak van de studenten</h5>
      <p>
        De studenten van het tweede jaar Elektronica/ICT en Elektrotechnieken kregen deze opdracht meegegeven van het vives. Hierbij zijn ze beginnen
        brainstormen hoe ze dit zouden kunnen realizeren. De studenten hebben verschillende schema's gemaakt om het idee van het PWO te realizeren. Ze 
        zijn eerst begonnen met het realizeren van het stopcontact zelf. Door op zoek te gaan naar welke componenten die er hier het best zouden voor werken
        en ook het minst verbruik zouden hebben. Want ons Intilligent stopcontact zou natuurlijk ook niet meer verbruik mogen hebben dan wat we nu al zouden
        hebben aan sluimerverbruik.
      </p>

        <p>
          Het principe van dit stopcontact werkt op basis van historische data, dat we via AI automatisch laten bepalen wanneer een toestel in
          stand-by volledig mag afgesloten worden van het net. Bijvoorbeeld als er op een werkdag in een gezinsomgeving tussen 9u en 16u nooit 
          televisie gekeken wordt, dan kan via analyse van de verbruiksinfo automatisch overgegaan worden tot uitschakelen van de stroomtoevoer. 
          Het sluimerverbruik van toestellen in stand-by kan zo gereduceerd worden. Bijkomend verminder je ook het risico op oververhitting van je 
          toestellen met bijhorend brandgevaar. In dit project zal een samenwerking opgezet worden tussen de IWT-opleidingen EL-IC, ET 
          en de HWB-opleiding Toegepaste Informatica (afstudeerrichting AI).
        </p>
        </div>
            </div>
        </>
    )
}

export default Hero
