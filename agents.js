import {readFile} from './readFile.js';
import { choiceAgents } from './choiceAgents.js';
const getDayHour = () => {
    const d = new Date();
    let day1 = d.toISOString().slice(0, 10);
//    day1 = '2022-01-21';
  
   let  hourCurrent = d.getHours();
   let result={day: null,hour:null,err: null};
   result.day = day1;
   result.hour = hourCurrent;
   
   if (d.getDay() == 6 || d.getDay() == 0)  {
      result.err = 'Weekend - no assignments';
    }
    return result;
}

function printAgents(list1){
  console.log(list1);
}

const app = async () => {
    let getDate = getDayHour();
    if(getDate.err) {
      console.log(getDate.err);
      return;
    }
    
 //  console.log(getDate.day);
   await readFile('agents2.csv',getDate.day,getDate.hour).then(choiceAgents).then(printAgents);
   //console.log('a1');
}

app();


