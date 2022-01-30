import fs from 'fs';
import csvparser from 'csv-parser';
 export async function readFile  (fileName,day,hour)  {
    let result={
      list: [],day: day,hour: hour
    };
   return new Promise((resolve,reject) => {
      fs.createReadStream(fileName)
      .pipe(csvparser())
      .on('data', function(data){
          // {
              //console.log('data');
              try {
                  
              if (data.date == day) {
  
                  result.list.push(data);
              }
  
              }
  
              catch(err) {
                  
                  console.log('Error: ' + err);
                  reject(err);
              }
          }) //on.data
          .on('end', () => {
              try {
              resolve(result);
              }
              catch (error) {
              console.error(error);
              }
      }); //end 
      
   }); // Promise
   }

   
   //module.exports = readFile;