const os = require("os");


// 5. Print out the user information of the os

const userInformation = os.userInfo();
console.log({ userInformation });


// 6. Print out the platform of an operating system

const osPlatform = os.platform();
console.log({ osPlatform });