const os = require('os');

//platform; shows the operating system you're on
console.log(os.platform());

//CPU architecture
console.log(os.arch());

//CPU core info
console.log(os.cpus());

//free memory
console.log(os.freemem());

//total memory
console.log(os.totalmem());

//home directory
console.log(os.homedir());

//uptime
console.log(os.uptime());