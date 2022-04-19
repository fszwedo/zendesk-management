import assignAgenttoTicket from './assignAgenttoTicket.js';
import getAgents from './getAgents.js';
import getTicketsByStatus from './getTicketsByStatus.js';
import makeZendeskRequest from './makeZendeskRequest.js';

const assignAgenttoTicketPart2 = async (agentLastName) => {

  if (agentLastName == undefined) {
    agentLastName = '';
  }

  let agentFirst = 0;

  let agents = await getAgents();
  console.log(agents);

  if (agentLastName = '') { agentFirst = 0; }
  else {
    for (let i = 0; i < agents.length; i++) {

      if (agents[i] == agentLastName) {
        if (i + 1 == agents.length) agentFirst = 0;
        else agentFirst = i + 1;
      }
    }
  }

  let agents2 = await makeZendeskRequest('/api/v2//users.json?role[]=agent', 'GET');
  let tickets = await getTicketsByStatus('new');


  let agentId = agentFirst;

  for (let i = 0; i < tickets.length; i++) {
    let name = agents[agentId];
    let agentId2 = -1;
    for (let g = 0; g < agents2.users.length; g++) {
    
      if (agents2.users[g].name == name) {
        agentId2 = agents2.users[g].id;
        if (agentId2 >= 0) {
          agentLastName = agents2.users[g].name;
        }
        break;
      }
    }
    if (agentId2 >= 0) {
      assignAgenttoTicket(tickets[i].id, agentId2);
    }
    agentId += 1;
    if (agentId == agents.length) agentId = 0;
  }

  return agentLastName;
}

export default assignAgenttoTicketPart2;