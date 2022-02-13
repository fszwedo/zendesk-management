import { readFile } from './readFile.js';
import { choiceAgents } from './choiceAgents.js';
const getDayHour = () => {
  const d = new Date();
  let day1 = d.toISOString().slice(0, 10);
  let hourCurrent = d.getHours();
  let result = { day: day1, hour: hourCurrent, err: null };

  if (d.getDay() == 6 || d.getDay() == 0) {
     result.err = 'Weekend - no assignments';
  }
  return result;
}

function printAgents(agentsList) {
  console.log(agentsList);
}

const app = async () => {
  let getDate = getDayHour();
  if (getDate.err) {
    console.log(getDate.err);
    return;
  }
  await readFile('agents2.csv', getDate.day, getDate.hour).then(choiceAgents).then(printAgents);
}

app();


