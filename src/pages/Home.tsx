import {useState} from 'react';
import {useEditor, EditorContent} from '@tiptap/react'
import {Språkhjelp} from "../components/språkhjelp"
import {About, Luca} from "../components/theme"
import {
    Heading,
    Label,
    Button,
    GuidePanel,
    RadioGroup,
    Alert,
    Radio,
    Accordion,
    Switch
} from "@navikt/ds-react";
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import {htmlToText} from "html-to-text";
import "@navikt/ds-css";
import '../App.css'

function Home() {
    const [activeStep, setActiveStep] = useState(0)
    const [value, setValue] = useState("")
    const [mobilvisning, setMobilvisning] = useState(true)

    const [harSpørsmål, setHarSprørsmål] = useState(0)
    const [tips, setFikkTips] = useState(0)
    const [research, setGjordeResearch] = useState(0)

    const [grunnlag, setGrunnlag] = useState("")
    const [motivasjon, setMotivasjon] = useState("")
    const [bidrag, setBidrag] = useState("")

    const [arbeidsgiver, setArbeidsgiver] = useState("")
    const [stillingstittel, setStillingstittel] = useState("")
    const [kontaktperson, setKontaktperson] = useState("")

    function focusTiptap() {
        if (editor) {
            editor.commands.focus()
        }
    }

    // @ts-ignore
    const handleChange = (val: any[]) => setHarSprørsmål(val);

    // @ts-ignore
    const handleChangeResearch = (val: any[]) => setGjordeResearch(val);

    const editor = useEditor({
        extensions: [
            StarterKit,
            Link.configure({
                openOnClick: false,
            })
        ],
        editorProps: {
            attributes: {
                role: 'form',
            },
        },
        content: value,
        autofocus: true,
        onUpdate: ({editor}) => {
            const html = editor.getHTML()
            let text = htmlToText(html, {
                wordwrap: false,
                whitespaceCharacters: "",
            });
            text = text.replaceAll(/\[[^\]]*\]/g, "");
            setValue(text)
        },
    })
    return (
        <>
            <div className="mb-5 max-w-2xl">
                {activeStep != 0 && (
                    <p style={{fontWeight: "600", marginBottom: "35px"}}>
                        Steg {activeStep} av 7
                    </p>
                )}
                {activeStep == 0 && (
                    <>
                        <GuidePanel illustration={<Luca />} poster className="mt-0">
                            <Heading level="2" className="mt-1" size="medium">Hei!</Heading>
                            <p className="mt-4">
                                Jeg er her for å hjelpe deg med å skrive jobbsøknad. Målet med jobbsøknaden
                                er at du skal bli kalt inn til intervju.
                                <br/><br/>
                                Det du fyller inn i denne veilederen lagres ikke, og sendes ikke til noen.
                                Husk å kopiere det du har skrevet før du avslutter.
                            </p>
                        </GuidePanel>
                        <Accordion className="mt-6">
                            <Accordion.Item>
                                <Accordion.Header>
                                    Bruk av offentlig PC
                                </Accordion.Header>
                                <Accordion.Content>
                                    Hvis du fyller ut på en offentlig PC, for eksempel på et bibliotek, er
                                    det viktig at du lukker
                                    nettleseren når du er ferdig. Dette vil forhindre at uvedkommende får
                                    tak i opplysningene du har fylt inn.
                                </Accordion.Content>
                            </Accordion.Item>
                        </Accordion>
                    </>
                )}
                {activeStep == 1 && (
                    <>
                        <Heading className="aksel-blue-heading" spacing level="2"
                                 size="large">Forberedelser</Heading>
                        <GuidePanel illustration={<Luca />} className="mt-0">
                            <Heading level="3" className="mt-1" size="medium">Les stillingsannonsen
                                nøye</Heading>
                            <p className="mt-4">Tenk på hva som motiver for å søke på denne stillingen, og
                                det viktigste som du kan bidra med av erfaring og utdanning.</p>
                        </GuidePanel>

                        <RadioGroup className="mt-10"
                                    legend="Er noe uklart i stillingsannonsen? Noe du lurer på?"
                                    onChange={(val: any) => handleChange(val)}
                                    value={harSpørsmål}
                        >
                            <Radio value="10">Nei, jeg har ingen spørsmål</Radio>
                            <Radio value="20">Ja, jeg har spørsmål</Radio>
                        </RadioGroup>
                        {harSpørsmål == 20 && (
                            <Alert className="mt-4 mb-8" variant="info">
                                <Heading spacing size="small" level="3">
                                    Vårt tips til deg: Ring kontaktpersonen
                                </Heading>
                                <p>Du kan kontakte personen som er oppgitt I
                                    stillingsannonsen. Du viser at du er interessert i jobben, og får en
                                    mulighet til å gi et godt førsteinntrykk.</p>
                                <p className="mt-4">Ikke spør om ting du enkelt kan finne svar på selv. Ikke
                                    ring bare for å ringe.</p>
                            </Alert>
                        )}
                        <RadioGroup className="mt-8"
                                    legend="Har du søkt etter arbeidsgiveren på nettet?"
                                    onChange={(val: any) => handleChangeResearch(val)}
                                    value={research}
                        >
                            <Radio value="10">Ja, jeg har søkt etter dem</Radio>
                            <Radio value="20">Nei, jeg har ikke søkt etter dem</Radio>
                        </RadioGroup>
                        {research == 20 && (
                            <Alert className="mt-4 mb-8" variant="info">
                                <Heading spacing size="small" level="3">
                                    Vårt tips til deg: Les om arbeidsgiveren på nettet
                                </Heading>
                                <p>Er du og arbeidsgiveren en god match? Hvem er de, hva står de for? Får du
                                    lyst til å jobbe der? Er det noe du bør kjenne til før du søker? Vis i
                                    søknaden at du har gjort deg kjent med arbeidsgiveren.</p>
                            </Alert>
                        )}
                    </>
                )}
                {activeStep == 2 && (
                    <>
                        <Heading className="aksel-blue-heading" spacing level="2"
                                 size="large">Innledning</Heading>
                        <GuidePanel illustration={<Luca />} className="mt-0">
                            <Heading level="3" className="mt-1" size="medium">Skriv en kortfattet
                                innledning</Heading>
                            <p className="mt-4">Her kan du nevne arbeidsgiverens behov og fortell om</p>
                            <ul className="list-disc ml-10 list-outside">
                                {/*<li>hvor du fikk vite om stillingen (dersom du ble tipset om den)</li>*/}
                                <li>det som motiverer deg til å gjøre jobben</li>
                                <li>det viktigste du kan bidra med – erfaring og utdanning</li>
                            </ul>
                        </GuidePanel>


                    </>
                )}
                {activeStep == 3 && (
                    <>
                        <Heading className="aksel-blue-heading" spacing level="2" size="large">Midtdel
                        </Heading>
                        <GuidePanel illustration={<Luca />} className="mt-0">
                            <Heading level="3" className="mt-1" size="medium">Skriv en overbevisende
                                midtdel</Heading>
                            <p className="mt-4">Her kan du gå i dybden om hvordan erfaringen, motivajonen og egenskapene dine kan komme til nytte.</p>

                            <p className="mt-4">Husk:</p>
                            <ul className="list-disc ml-10 list-outside">
                                <li>Alt i søknaden skal være relevant for stillingen.</li>
                                <li>Fokusér på hva du kan og begrunn med eksempler.</li>
                            </ul>
                        </GuidePanel>
                    </>
                )}
                {activeStep == 4 && (
                    <>
                        <Heading className="aksel-blue-heading" spacing level="2"
                                 size="large">Avslutning</Heading>
                        <GuidePanel illustration={<Luca />} className="mt-0">
                            <Heading level="3" className="mt-1" size="medium">Skriv en kort
                                avslutning</Heading>
                            <p className="mt-4">Du kan for eksempel fortelle</p>
                            <ul className="list-disc ml-10 list-outside">
                                <li>at du gleder deg til å høre fra dem</li>
                                <li>når du kan starte i stillingen</li>
                                <li>hvordan det er lettest å nå deg</li>
                            </ul>
                        </GuidePanel>
                    </>
                )}
                {activeStep == 5 && (
                    <>
                        <Heading className="aksel-blue-heading" spacing level="2"
                                 size="large">Gjennomgang av innhold</Heading>
                        <GuidePanel illustration={<Luca />} className="mt-0">
                            <Heading level="3" className="mt-1" size="medium">Har du fått med deg det viktigste?</Heading>
                            {/*          <p className="mt-4">Svarer du på spørsmålene nedenfor, har du fått med deg det
                                            viktigste:</p>*/}
                            <p className="mt-4">Sjekk om du har svart på spørsmålene nedenfor:</p>
                            <ul className={"list-disc ml-10 list-outside"}>
                                <li>Hvorfor s&oslash;ker du denne jobben?</li>
                                <li>Hva er det mest relevante med din bakgrunn sammenlignet med det de søker
                                    etter?
                                </li>
                                <li>Hvorfor skal de velge nettopp deg?</li>
                            </ul>
                        </GuidePanel>
                    </>
                )}
                {activeStep == 6 && (
                    <>
                        <Heading className="aksel-blue-heading" spacing level="2"
                                 size="large">Gjennomgang av språk</Heading>
                        <GuidePanel illustration={<Luca />} className="mt-0">
                            <Heading level="3" className="mt-1" size="medium">Les søknadstekten
                                nøye</Heading>
                            <p className="mt-4">Har du luket ut alle skrivefeil?
                                Søknadsteksten bør være grammatisk riktig, uten
                                stavefeil og enkelt å lese. <br/><br/>Tips: Les opp teksten din
                                høyt og finpuss
                                språket underveis.</p>
                        </GuidePanel>
                    </>
                )}
                {activeStep == 7 && (
                    <>
                        <Heading className="aksel-blue-heading" spacing level="2"
                                 size="large">Oppsummering</Heading>
                        <GuidePanel illustration={<Luca />} poster className="mt-0">
                            <Heading level="3" className="mt-1" size="medium">Gratulerer – jobbsøknaden er
                                skrevet!</Heading>
                            <p className="mt-4">Er du usikker på om søknaden din er god nok? Spør noen du
                                kjenner om å gå gjennom søknaden før du sender den! </p>
                            <Heading level="3" className="mt-6" size="small">Husk å kopiere søknadsteksten</Heading>
                            <p className="mt-4">Når du lukker
                                nettleseren eller nettleserfanen vil all informasjon du har fylt inn forsvinne. Kopier og ta vare på søknadsteksten.</p>
                        </GuidePanel>
                    </>
                )}
            </div>

            {activeStep > 1 && (
                <div className="max-w-2xl">
                    <div className="mobilvisning-container">
                        {/* @ts-ignore */}
                        <Label htmlFor="tiptapeditor" onClick={() => focusTiptap()}
                               className="mobilvisning-label mt-10">Søknadstekst</Label>
                    </div>
                    <p className="mt-1">Her kan du skrive jobbsøknaden din</p>
                    <form className="mt-2">
                        <EditorContent aria-label="tekstboks" role="textbox" editor={editor}
                                       id="tiptapeditor" className="mb-6"/>
                    </form>
                    <div style={{display: "block", marginBottom: "55px"}}>
                        <div style={{marginTop: "-20px", float: "right"}}>
                            <Switch onChange={() => setMobilvisning(!mobilvisning)}
                                    checked={mobilvisning}>Språkhjelp</Switch>
                        </div>
                    </div>
                    <div style={{marginBottom: "30px", display: "block"}}>
                        {mobilvisning == true && (
                            <>
                                <Språkhjelp ClassName="mt-6" content={value}/>
                            </>)
                        }
                        <About />
                    </div>
                </div>
            )}

            {activeStep == 0 && (
                // @ts-ignore
                <Button variant="primary" onClick={() => (setActiveStep(activeStep + 1) & window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                }))} className="mt-10">Start veilederen</Button>
            )}
            {activeStep > 0 && activeStep < 7 && (
                // @ts-ignore
                <Button variant="primary" onClick={() => (setActiveStep(activeStep + 1) & window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                }))} className="block mt-12 w-40">Neste steg</Button>
            )}
            {activeStep > 1 && activeStep < 7 && (
                // @ts-ignore
                <Button variant="secondary" onClick={() => (setActiveStep(activeStep - 1) & window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                }))} className="block w-40 mt-4">Forrige steg</Button>
            )}
            {activeStep == 7 && (
                // @ts-ignore
                <Button variant="secondary" onClick={() => (setActiveStep(activeStep - 1) & window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                }))} className="block w-40 mt-10">Forrige steg</Button>
            )}
            {activeStep != 0 && (
                <Button variant="tertiary" onClick={() => (window.location.reload())}
                        className="mt-4 w-40">Avbryt</Button>
            )}
        </>
    );
}

export default Home;