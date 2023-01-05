const XLSX = require("xlsx");

// Array to array data
const aoaData = [
  ["name", "code", "author"],
  ["Diary", "diary_code", "Pagorn"],
  ["Note", "note_code", "Pagorn"],
  ["Medium", "medium_code", "Pagorn"],
];

const workSheet = XLSX.utils.aoa_to_sheet(aoaData);
const workBook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(workBook, workSheet, "Sheet 1");
XLSX.writeFile(workBook, "./temp/sample.xlsx");

// Json Data
const jsonData = [
  { name: "Diary", code: "diary_code", author: "Pagorn" },
  { name: "Note", code: "note_code", author: "Pagorn" },
  { name: "Medium", code: "medium_code", author: "Pagorn" },
];

const workSheet2 = XLSX.utils.json_to_sheet(jsonData);
const workBook2 = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(workBook2, workSheet2, "Sheet 1");
XLSX.writeFile(workBook, "./temp/sample2.xlsx");
