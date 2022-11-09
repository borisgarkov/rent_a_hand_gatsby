const backEndServer = 'http://localhost:3000';

const serverData = async (endPoint = 'users') => {
    const serverResponse = await fetch(`${backEndServer}/${endPoint}`);
    return serverResponse.json();
};

export default serverData;