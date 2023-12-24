import { init } from "@amplitude/analytics-browser";

export const initAmplitude = () => {
    if (window.location.hostname === 'localhost') {
        return;
    }

    init("22c445c9be44f0221bf97a4bbb1c3bce", undefined, {
        serverUrl: "https://amplitude.nav.no/collect",
        serverZone: "EU",
        defaultTracking: {
            pageViews: true,
            sessions: true,
        },
    });
};

export default initAmplitude;