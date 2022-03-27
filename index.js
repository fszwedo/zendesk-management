import assignAgenttoTicketPart2 from './assignAgenttoTicketPart2.js';

const sleep = ms => new Promise(r => setTimeout(r, ms));

const app2 = async () => {


    let agentLastName = '';

    while (1 == 1) {

        agentLastName = await assignAgenttoTicketPart2(agentLastName);
        console.log(agentLastName);
        await sleep(1000);
    }

}

app2();
