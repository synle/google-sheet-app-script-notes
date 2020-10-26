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
