Ground Storage
==============

This package is a way to store data in local storage available.

##Features:
* Ligth footprint
* Async storage
* Broad browser support Chrome, Safari, Firefox and Internet Explorer 9
* Support for Chrome Packaged Apps
* Uses `EJSON.minify` and `EJSON.maxify` to compress data in localstorage etc.

##Concept
Store objects into the ground storage, the data is compressed to use the limited storage better.

##API
```js
// Options:
// storageType: 'localstorage' // force localstorage
// expires: 100; // ms - how long time the data should live
// quotaBytes: int; // num of bytes to allow in store - measured by the JSON stringification of every value plus every key's length
// quotaStrategy: newAndUsedData // strategy if quota exeeded - 
// what data should go?

GroundStorage.getBytesInUse(); // In total

var myStore = new GroundStorage('list', [options]);
myStore.get([string or array of keys], callback(obj));
myStore.getBytesInUse();
myStore.set(itemsObject, callback);
myStore.remove(string or array of string keys, callback);
myStore.clear();

myStore.addListener('changed', function(changes) {
  for (key in changes) {
    var storageChange = changes[key];
    console.log('Old value was "%s", new value is "%s".',
                key,
                storageChange.oldValue,
                storageChange.newValue);
  }
});
```



##Contributions
Feel free to send issues, pull requests all is wellcome

Kind regards Morten