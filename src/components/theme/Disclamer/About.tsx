import {ShakeHands, EyeScreened} from "@navikt/ds-icons";
import './About.css'

function About() {
    return (
        <>
            <ul className="ListRemoveStyling pb-1">
                <li><ShakeHands className="inline" title="Håndtrykk"/> Det du fyller inn lagres ikke, og sendes ikke til noen.</li>
                <li><EyeScreened className="inline" title="Personvern"/> Ikke legg inn personopplysninger som telefon og e-post i denne demoen. Du kan legge til dette når du sender søknaden.</li>
            </ul>
        </>
    );
}

export default About;