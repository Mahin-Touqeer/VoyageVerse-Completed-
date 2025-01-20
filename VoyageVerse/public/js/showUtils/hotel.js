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







async function getNearbyHotels(latitude, longitude) {
    try {
        const token = await getAccessToken();
        const options = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const response = await fetch(`https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-geocode?latitude=${latitude}&longitude=${longitude}&radius=5&radiusUnit=KM`, options);

        if (!response.ok) {
            throw new Error('Failed to fetch hotel data');
        }

        const data = await response.json();

        if (data.data && data.data.length > 0) {
            return data.data
        } else {
            console.log('No hotels found nearby.');
        }

    } catch (error) {
        console.error('Error:', error.message);
    }
}
export default getNearbyHotels;
