import {ShakeHands, EyeScreened} from "@navikt/ds-icons";
import './About.css'

function About() {
    return (
        <>
            {/*<p className="a11y-lineheight">Medhjelp gir deg umiddelbar tilbakemelding på søknadsteksten din.</p>*/}
            <ul className="ListRemoveStyling mt-8 mb-6">
                <li><ShakeHands className="inline" title="Håndtrykk"/> Opplysningene du fyller inn vil ikke bli lagret.</li>
                {/*<li><EyeScreened className="inline" title="Personvern"/> Ikke legg inn personopplysninger.</li>*/}
            </ul>
        </>
    );
}

export default About;