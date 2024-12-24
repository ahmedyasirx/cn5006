const os = require("os"); // Built-in OS module for system info
const util = require("util"); // Utility module to make stuff look clean

console.log("Temporary directory: " + os.tmpdir()); // Temp folder
console.log("Hostname: " + os.hostname()); // Your system's name
console.log("OS: " + os.platform() + " Release: " + os.release()); // OS info
console.log("Uptime: " + (os.uptime() / 3600).toFixed(2) + " hours"); // How long your system's been on
console.log("User Info: " + util.inspect(os.userInfo())); // Your user details
console.log("Memory: " + (os.totalmem() / 1e9).toFixed(2) + " GB"); // Total RAM
console.log("Free Memory: " + (os.freemem() / 1e9).toFixed(2) + " GB"); // Free RAM
console.log("CPU Details: " + util.inspect(os.cpus())); // Your processor info
console.log("Network Interfaces: " + util.inspect(os.networkInterfaces())); // Network details
console.log("Program ended"); // Done ✅
