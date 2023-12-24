import {ShakeHands, EyeScreened} from "@navikt/ds-icons";
import './About.css'

function About() {
    return (
        <>
            <ul className="ListRemoveStyling pb-1">
                <li><ShakeHands className="inline" title="Håndtrykk"/> Teksten lagres ikke, og sendes ikke til noen.</li>
                <li><EyeScreened className="inline" title="Personvern"/> Ikke legg inn personopplysninger som navn, telefon og e-post i denne veilederen. Du kan legge til dette når du sender søknaden.</li>
            </ul>
        </>
    );
}

export default About;