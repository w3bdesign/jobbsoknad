import {ContentContainer, Heading, Link} from "@navikt/ds-react";
import './Header.css'

function Header() {
    return (
        <nav>
            <header id="språkhjelp-header">
                <ContentContainer id="språkhjelp-headerContainer">
                    <Heading size="medium" level="1">
                        <Link id="språkhjelp-headingLink" href=".">
                            Medhjelp
                        </Link>
                    </Heading>
                </ContentContainer>
            </header>
        </nav>
    );
}

export default Header;