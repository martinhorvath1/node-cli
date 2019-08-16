const commander = require('commander');
const program = new commander.Command();

program.version('0.0.1');

program
    .option('test', 'Just to make sure it is working')
    .option('sync-db <env>')
    .parse(process.argv);

if (program.syncDb) {
    console.log('env: ', `'${program.syncDb}'`)
}

if (program.test) {
    const test = require('./commands/test.js');
    test();
}
