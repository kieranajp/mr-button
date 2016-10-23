import Foursquare from 'node-foursquare';

export default ({ clientId, clientSecret, token }, venue) => {
    const foursquare = Foursquare({ secrets: { clientId, clientSecret, redirectUrl: "blah" } });

    foursquare.Checkins.addCheckin(venue, { shout: 'Mr Button checking in' }, token, (err, res) => {
        console.log(res);
    });
};
