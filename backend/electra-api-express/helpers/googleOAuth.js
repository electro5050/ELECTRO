const fs = require('fs');
const { google } = require('google-auth-library');
const SCOPES = ['https://www.googleapis.com/auth/gmail.send'];

async function getTokens() {
    let auth;
    const pathToCredentials = '../../credentials.json';
    const credentials = JSON.parse(fs.readFileSync(pathToCredentials, 'utf8'));
    const { client_secret, client_id, redirect_uris } = credentials.installed;
    auth = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

    // Load client token from a file
    try {
        const token = fs.readFileSync('token.json', 'utf8');
        auth.setCredentials(JSON.parse(token));
    } catch (error) {
        // If there's an error, probably the token is not available yet.
        // Obtain new token from the CLI.
        const authUrl = auth.generateAuthUrl({
            access_type: 'offline',
            scope: SCOPES,
        });
        console.log('Authorize this app by visiting this url:', authUrl);
        throw new Error("Token not available. Check the console for the authorization URL.");
    }
    return auth;
}

module.exports = getTokens; // exporting the function
