//main file for our application
import 'dotenv/config';
import controller from "./src/controllers/sampleController.js";
import makeZendeskRequest from './src/services/authenticationService.js';

const app = async () => {
    console.log('I\'m the app');
    console.log(await makeZendeskRequest('nic', 'GET'));
}

app();