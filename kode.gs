function doGet(e) {
  var htmlOutput =  HtmlService.createTemplateFromFile('index');
  htmlOutput.search='';
 return htmlOutput.evaluate();
}

function doPost(e) {
  var search =e.parameter.search;
  var htmlOutput =  HtmlService.createTemplateFromFile('index');
  htmlOutput.search= search;
  return htmlOutput.evaluate();
}

function getSheetData()  { 
  var ss= SpreadsheetApp.getActiveSpreadsheet();
  var dataSheet = ss.getSheetByName('Student'); 
 var dataRange = dataSheet.getDataRange();
 var dataValues = dataRange.getDisplayValues();  
  return dataValues;
}

function getUrl(){
  var url =ScriptApp.getService().getUrl();
  return url;
   Logger.log(url)
}
