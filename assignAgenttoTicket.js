
import makeZendeskRequest from './makeZendeskRequest.js';

const assignAgenttoTicket = async (ticketId, agentId) => {

    const payload = {

        ticket: {
            assignee_id: agentId
        }
    }
    await makeZendeskRequest('/api/v2/tickets/' + ticketId, 'PUT', payload);
}

export default assignAgenttoTicket;
