//Route Code: 6 chars
//Origin ID: 11 chars
//Photo ID: 11 chars

import * as Generate from "./modules/gen_ultils.js";
import * as XLSX from "xlsx/xlsx.mjs";
import * as fs from "fs";
import { Readable } from "stream";
import * as cpexcel from "xlsx/dist/cpexcel.full.mjs";

XLSX.set_fs(fs);
XLSX.stream.set_readable(Readable);
XLSX.set_cptable(cpexcel);

const jsonData = [
  {
    S_TR_ID: Generate.generateRandomNumber(6),
    S_ORIGIN_ID: Generate.generateRandomNumber(11),
    S_SHIPTO_ID: Generate.generateRandomNumber(11),
    Origin_Name: Generate.generateRandomName(),
    Destination_Name: Generate.generateRandomName(),
  },
];

var ws_name = "SheetJS";
/* Create workbook */
var wb = XLSX.utils.book_new();

/* Create worksheet */
// var ws_data = [
//   ["S", "h", "e", "e", "t", "J", "S"],
//   [1, 2, 3, 4, 5],
// ];
// var ws = XLSX.utils.aoa_to_sheet(ws_data);
var ws = XLSX.utils.json_to_sheet(jsonData);

/* Add the worksheet to the workbook */
var time = Date.now();
XLSX.utils.book_append_sheet(wb, ws, ws_name);
XLSX.writeFile(wb, `./temp/Report-${time}.xlsx`);
