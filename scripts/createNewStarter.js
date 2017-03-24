// TODO: Remove 'createNewStarter.js' from newly generated project
// TODO: In 'package.json' change "name" value to project title entered

import {exec} from 'child_process';


const path = process.argv.length > 2 ? process.argv[2] : "your-node-docker-webpack-starter";


const cmd = `rsync -av --exclude=node_modules --exclude=.idea --exclude=.git --exclude=.DS_Store --exclude=npm-debug.log . ${path}`;

exec(cmd, function(error, stdout, stderr) {
    if (error || stderr) {
        console.log(`error: ${error}`);
        console.log(`stderr: ${stderr}`);
    }
    else {
        console.log(`stdout: ${stdout}`);
    }
});