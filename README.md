# google-sheet-app-script-notes

## Reference a fixed cell
```
$k:$1
```

## Creating and calling appscript
In Sheet, go to `Tools > Script Editor`

## Google Scripts

### Create a GS script
Inputs and outputs of the JS functions are either a single cell (one value) or 2D array
```
function doStockCalculation(data, stockPrice){
}
```

### Embed an external library
```
eval(
  UrlFetchApp.fetch(
    "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js"
  ).getContentText()
);
```

### To do logging
Then view logs at `View > Logs`
```
Logger.log("Stock price: ", stockPrice);
```

### Fetch data from external sources
https://developers.google.com/apps-script/reference/url-fetch/url-fetch-app

```
// Make a POST request with a JSON payload.
var data = {
  'name': 'Bob Smith',
  'age': 35,
  'pets': ['fido', 'fluffy']
};
var options = {
  'method' : 'post',
  'contentType': 'application/json',
  // Convert the JavaScript object to a JSON string.
  'payload' : JSON.stringify(data)
};
UrlFetchApp.fetch('https://httpbin.org/post', options);
```


### Store Secrets

https://developers.google.com/apps-script/reference/properties/properties-service

```
// Sets three properties of different types.
var documentProperties = PropertiesService.getDocumentProperties();
var scriptProperties = PropertiesService.getScriptProperties();
var userProperties = PropertiesService.getUserProperties();

documentProperties.setProperty('DAYS_TO_FETCH', '5');
scriptProperties.setProperty('SERVER_URL', 'http://www.example.com/MyWeatherService/');
userProperties.setProperty('DISPLAY_UNITS', 'metric');
```
