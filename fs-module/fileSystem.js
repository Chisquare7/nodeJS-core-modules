const fs = require("fs");
const path = require("path");

// 1. Create directory/folder named: “Students”

const studentsDirectoryPath = path.join(__dirname, "Students");
fs.mkdir(studentsDirectoryPath, (err) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log("Students folder created successfuly");
});


// 2. In the Students directory, create a file named user.js

const userFilePath = path.join(__dirname, "Students/user.js");
fs.writeFile(userFilePath, "", (err) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log("user.js file created successfully");
});


// 3. Update the Students directory to “Names”

const namesDirectoryPath = path.join(__dirname, "Names");
fs.rename(studentsDirectoryPath, namesDirectoryPath, (err) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log("Students Folder updated to Names folder successfully");
});


// 4. Add your name as content to the file user.js

const newUserFilePath = path.join(namesDirectoryPath, "user.js");
const myName = `myName = "Chibuike Chijioke"`;
fs.appendFile(newUserFilePath, myName, (err) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log("My name added as content to user.js successfully");
});


// 5. Update the file and add your age, sex, nationality, phone number and any other information about yourself

const moreInfo = `\nmyAge = 30\nmySex = "Male"\nNationality = "Nigerian"\nphoneNumber = +2348131461662\naboutMe = "A Software Engineer and currently learning NodeJS backend at Altschool"`;
fs.appendFile(newUserFilePath, moreInfo, (err) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log("More information added as content to user.js successfully");
});


// 6. Update the file user.js to {your_name}.js eg daniel_adesoji.js

const nameFilePath = path.join(namesDirectoryPath, "chibuike_chijioke.js");
fs.rename(newUserFilePath, nameFilePath, (err) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log("user.js updated to chibuike_chijioke.js successfully");
});


// 7. Read the contents from {your_name}.js. User fs.open or fs.readFile

fs.open(nameFilePath, 'r', (err, fd) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Targeted file opened successfully");

    fs.readFile(fd, "utf8", (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("Targeted file read successfully");
        console.log(data);
    })
});


// 8. Delete the file {your_name}.js

fs.rm(nameFilePath, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Targeted file deleted successfully")
})


// 9. Delete the directory “Names”

fs.rmdir(namesDirectoryPath, (err) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log("Targeted folder deleted successfully");
});