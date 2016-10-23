require('dotenv').config();

const foursquareConfig = {
    clientId: process.env.FOURSQUARE_CLIENT_ID,
    clientSecret: process.env.FOURSQUARE_CLIENT_SECRET,
    token: process.env.FOURSQUARE_ACCESS_TOKEN
};

import handleFoursquare from './handlers/foursquare';

export const handler = (event, context, callback) => {
    switch (event.clickType) {
        case 'LONG':
            return handleFoursquare(foursquareConfig, process.env.FOURSQUARE_VENUE_ID);
        case 'DOUBLE':
            return;
        default:
            return;
    }
};

handler({ clickType: 'LONG' });
