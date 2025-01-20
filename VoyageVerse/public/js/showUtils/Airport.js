const API_KEY = 'WZIGBoWj9xLv6JGXdeAHqAbxDsGigyK7';
const API_SECRET = 'OxGW5AODuCiBYQse';

async function getAccessToken() {
    try {
        const response = await fetch('https://test.api.amadeus.com/v1/security/oauth2/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                grant_type: 'client_credentials',
                client_id: API_KEY,
                client_secret: API_SECRET
            })
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.error_description || 'Failed to get access token');
        }

        return data.access_token;
    } catch (error) {
        console.error('Error getting access token:', error.message);
    }
}
async function getNearestAirports(latitude, longitude) {
    try {

        const token = await getAccessToken();

        const response = await fetch(`https://test.api.amadeus.com/v1/reference-data/locations/airports?latitude=${latitude}&longitude=${longitude}&radius=50`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.error_description || 'Failed to fetch nearest airports');
        }
        return data.data

    } catch (error) {
        console.error('Error fetching nearest airports:', error.message);
    }
}



export { getAccessToken, getNearestAirports } 
