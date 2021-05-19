import React from 'react';
import outlet from './images/outlet.jpg';
import drawImage from './images/DrawnOutlet.png';
import plan from './images/idea.png';
import './Home.css';
function Home() {
    return (
        <div className="container">
                            <h1>Smart Outlet</h1>

            <div className="container text">
                <h2>Het idee van het PWO</h2>
                <p>
                    Dit PWO voorstel ontstond uit de vraag “Hoe kunnen we een reeds bestaande elektrische verbruiker slim en energiezuiniger kan maken”?
                    Denk maar aan uw televisie of microgolf. Het ontwerpen van een gebruiksvriendelijke “Artificieel Intelligentie plug-in stopcontact”
                    om zo sluimerverbruik tegen te gaan. Want onze maatschappij wordt steeds meer gedomineerd door elektronische apparaten. Die toestellen
                    laat de consument meestal in “stand-by modus” staan, waardoor je al snel enkele euro’s per dag verspilt aan het sluimerverbruik.
        </p>
        <img id='outlet' src={outlet} width="300" height="223" />

                <p>
                    Het principe van dit stopcontact werkt op basis van historische data, dat we via AI automatisch laten bepalen wanneer een toestel in
                    stand-by volledig mag afgesloten worden van het net. Bijvoorbeeld als er op een werkdag in een gezinsomgeving tussen 9u en 16u nooit
                    televisie gekeken wordt, dan kan via analyse van de verbruiksinfo automatisch overgegaan worden tot uitschakelen van de stroomtoevoer.
                    Het sluimerverbruik van toestellen in stand-by kan zo gereduceerd worden. Bijkomend verminder je ook het risico op oververhitting van je
                    toestellen met bijhorend brandgevaar. In dit project zal een samenwerking opgezet worden tussen de IWT-opleidingen EL-IC, ET
                    en de HWB-opleiding Toegepaste Informatica (afstudeerrichting AI).
        </p>
                <h2>De aanpak van de studenten</h2>
                <p>
                    De studenten van het tweede jaar Elektronica/ICT en Elektrotechnieken kregen deze opdracht meegegeven van het vives. Hierbij zijn ze beginnen
                    brainstormen hoe ze dit zouden kunnen realizeren. De studenten hebben verschillende schema's gemaakt om het idee van het PWO te realizeren. Ze
                    zijn eerst begonnen met het realizeren van het stopcontact zelf. Door op zoek te gaan naar welke componenten die er hier het best zouden voor werken
                    en ook het minst verbruik zouden hebben. Want ons Intilligent stopcontact zou natuurlijk ook niet meer verbruik mogen hebben dan wat we nu al zouden
                    hebben aan sluimerverbruik.
      </p>
      <img id='draw' src={drawImage} width="779" height="445" />
                <p>
                    Eens ze het idee hadden opgemaakt van hoe ze het stopcontact zouden maken begonnen ze verder te brainstormen hoe ze al de data die ze zouden meten ook
                    aan de gebruiker of klant zouden kunnen tonen. Hieraan dachten ze dus eerst om een API te maken die verbinding maakt met het Intilligent stopcontact en de
                    data dan op de API op te slaan. Dit opslaan was nog niet zo vanzelfsprekend omdat ze de opdracht ook wel grootschalig zagen waardoor ze er aan dachten om
                    ervoor te zorgen dat ze ook van meerdere Intilligente stopcontact data zouden kunnen krijgen en dit dan ook te tonen. Ze hadden er ook aan gedacht dat er
                    meerder gerbuikers kunnen zijn die stopcontacten zouden hebben hier moesten ze ook aan denken. Ze hebben daarvoor gewerkt met een login zo dat iedere
                    gebruiker andere data zou zien en enkel die van hun stopcontact. De volgende opdracht was dan ook een manier maken zodat de gebruiker zelf een nieuw stopcontact
                    kan toevoegen aan de database die hij later heeft aangekocht. Hiervoor hebben ze een paar vragen gemaakt die ingevuld moeten geraken zodat de API weet waar het
                    stopcontact zich bevindt en ook weet welk stopcontact het is dat de data zal naartoe moeten worden gestuurd.
      </p>
      <img id='plan' src={plan} width="651" height="274" />
            </div>
            </div>
    )
}

export default Home
