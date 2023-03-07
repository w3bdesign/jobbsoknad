import './Språkhjelp.css'
import {Accordion, Alert} from "@navikt/ds-react";
import {
    LongParagraphs,
    LongSentences,
    LongWords,
    DublicateWords,
    KansellistenDictionary,
    NrkDictionaries,
    AvløserordDictionary,
    CommaCheck,
    PersonalData,
    WordCount,
    WordFrequency,
    Tools
} from "./analysis/index"

// @ts-ignore
function Resultbox(props) {
    let value = props.content;
    return (
        <>
            {value.length == 0 ? (
                    <>{/*<Alert variant="info">Sett inn tekst for å få språkhjelp.</Alert>*/}</>) :
                (
                    <>
                        <Accordion className="språkhjelp-navds-accordion">
                            <LongParagraphs content={value}/>
                            <LongSentences content={value}/>
                            {/*<LongWords content={value}/>*/}
                            <DublicateWords content={value}/>
                            <KansellistenDictionary content={value}/>
                            <NrkDictionaries content={value}/>
                            {/*<AvløserordDictionary content={value}/>*/}
                            <CommaCheck content={value}/>
                            {/*<PersonalData content={value}/>*/}
{/*                            {value.length >= 200 && (
                                <WordFrequency content={value}/>
                            )}*/}
                            {/*<WordCount content={value}/>*/}
                        </Accordion>
                    </>
                )}
        </>
    );
}

export default Resultbox;