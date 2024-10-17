const fs = require('node:fs');
const path = require('path');
const convertCsvToXlsx = require('csvtoxlsxconverter');
const header = null;

let files = [];
fs.readdir('./ORIGINAL',(err, result) => {
	if(err) {
		console.error(err);
		throw Error(err);
	}
	files = result;
	try {
		console.log(files);
		for(var a = 1; a < files.length; a++) {
			let source = './ORIGINAL/' + files[a];
			let destination = './COPIA/' + files[a] + '.xlsx';
			console.log(destination);
			convertCsvToXlsx(source, destination);
		}
	} catch (e) {
	  console.error(e.toString());
	}
}); 
