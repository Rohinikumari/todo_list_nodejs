const fs = require('fs');

//sync - blocking in nature
// let read = fs.readFileSync('readme.txt','utf8');
// fs.writeFileSync('writeme.txt',read);
// console.log(read);


//aysnc - non blocking in nature
// fs.readFile('readme.txt','utf8',(err,data) => {
// fs.writeFile('writeMe.txt',data,(err,data)=>{
//     console.log(data);
// });
// });

//create and delete directory
//fs.rmdirSync('Files') // sync
//async
// fs.mkdir('files',()=>{
//    fs.readFile('readme.txt',(err,data)=>{
//        fs.writeFile('./files/writeme.txt',data,(err,data)=>{
//            console.log('done!!');
//        })
//    }) 
// })

//remove file and then delete the directory
fs.unlink('./files/writeme.txt',()=>{
    fs.rmdir('files',()=>{
        console.log('done!!');
    })
})

