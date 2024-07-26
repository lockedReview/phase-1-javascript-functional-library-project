function isArray(collection) {

    console.log('Checking if collection is an array:', collection);
    return Array.isArray(collection);

}
  
function myEach(collection, callback) {

    console.log('Processing collection with myEach:', collection);
  
    if (Array.isArray(collection)) {

      for (let i = 0; i < collection.length; i++) {

        console.log('Array element:', collection[i]);

        callback(collection[i]);
      }
    } else if (typeof collection === 'object' && collection !== null) {

      for (let key in collection) {

        if (collection.hasOwnProperty(key)) {

          console.log('Object property:', key, 'Value:', collection[key]);
          callback(collection[key]);
        }
      }
    }
  
    console.log('Collection processed:', collection);
    return collection;
}
  
function myMap(collection, callback) {
    console.log(collection);
  
    const result = [];
  
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {


        console.log(collection[i]);

        result.push(callback(collection[i], i, collection));

        console.log('Result array:', result);
      }
    } else if (typeof collection === 'object' && collection !== null) {

      for (let key in collection) {

        if (collection.hasOwnProperty(key)) {

          console.log('Object before callback:', key, 'Value:', collection[key]);
          result.push(callback(collection[key], key, collection));
          console.log('Result array:', result);

        }
      }
    }
  
    console.log('Final mapped result:', result);
    return result;
}
  
function getInitialValue(collection, acc, hasInitialValue) {

    console.log('Getting initial value:', collection, acc, hasInitialValue);
  
    if (!hasInitialValue) {

      if (isArray(collection)) {

        return collection.length > 0 ? collection[0] : undefined;

      } else if (typeof collection === 'object' && collection !== null) {

        const keys = Object.keys(collection);
        console.log(keys)
        return keys.length > 0 ? collection[keys[0]] : undefined;
      }
    }
  
    console.log('Initial value determined:', acc);
    return acc;
}
  
function reduceArray(array, callback, acc) {
    console.log('Reducing array:', array);
  
    for (let i = (acc === array[0] ? 1 : 0); i < array.length; i++) {

      console.log('Current accumulator:', acc, 'Current element:', array[i]);
      acc = callback(acc, array[i], array);
      console.log('Updated accumulator:', acc);

    }
  
    console.log('Reduced result for array:', acc);
    return acc;
}
  
function reduceObject(obj, callback, acc) {
    console.log('Reducing object:', obj);
  
    const keys = Object.keys(obj);
  
    for (let i = (acc === obj[keys[0]] ? 1 : 0); i < keys.length; i++) {

      const key = keys[i];
      console.log('Current accumulator:', acc, 'Current key:', key, 'Current value:', obj[key]);
      acc = callback(acc, obj[key], obj);
      console.log('Updated accumulator:', acc);

    }
  
    console.log('Reduced result for object:', acc);
    return acc;
}
  
function myReduce(collection, callback, acc) {
    console.log('Reducing collection with myReduce:', collection);
  
    const hasInitialValue = arguments.length >= 3;  
    acc = getInitialValue(collection, acc, hasInitialValue);
  
    if (acc === undefined) {

      console.log('Collection is empty and no initial value is provided');
      return undefined;
    }
  
    if (isArray(collection)) {

      return reduceArray(collection, callback, acc);

    } else if (typeof collection === 'object' && collection !== null) {

      return reduceObject(collection, callback, acc);
    }
  
    
}
  
function isArray(collection) {

  return Array.isArray(collection);
}

function myFind(collection, predicate) {

  if (isArray(collection)) {

    for (let i = 0; i < collection.length; i++) {

      if (predicate(collection[i])) {

        return collection[i];
      }
    }
  } else if (typeof collection === 'object' && collection !== null) {

    for (let key in collection) {

      if (collection.hasOwnProperty(key)) {

        if (predicate(collection[key])) {
            
          return collection[key];
        }
      }
    }
  }

  return undefined;
}
  
function firstInArray(array) {
    
    return array.length > 0 ? array[0] : undefined;
}
  
function firstInObject(obj) {
    
    const keys = Object.keys(obj);
    return keys.length > 0 ? obj[keys[0]] : undefined;
}
  
function myFilter(collection, predicate) {
    console.log('Filter collection:', collection);
  
    if (isArray(collection)) {
      return filterArray(collection, predicate);

    } else if (typeof collection === 'object' && collection !== null) {

      return filterObject(collection, predicate);
    }
  
    console.log('Unsupported collection type');
    return [];
}
  
function filterArray(array, predicate) {
    console.log( array);
  
    const result = [];
  
    for (let i = 0; i < array.length; i++) {

      console.log('Array element:', array[i]);

      if (predicate(array[i])) {

        result.push(array[i]);
        console.log('Element added to result:', array[i]);

      }
    }
  
    console.log('Filtered result for array:', result);
    return result;
}
  
  function filterObject(obj, predicate) {
    console.log('Filtering object:', obj);
  
    const result = [];
    const keys = Object.keys(obj);
  
    for (let i = 0; i < keys.length; i++) {

      const key = keys[i];

      console.log('Object property:', key, 'Value:', obj[key]);

      if (predicate(obj[key])) {

        result.push(obj[key]);
        console.log(obj[key]);
      }
    }
  
    console.log( result);

    return result;
}
  
function mySize(collection) {

    console.log( collection);
  
    if (isArray(collection)) {

      return sizeOfArray(collection);

    } else if (typeof collection === 'object' && collection !== null) {

      return sizeOfObject(collection);
    }
  
    
    return 0;
}
  
function sizeOfArray(array) {

    
    return array.length;
}
  
function sizeOfObject(obj) {
    
    return Object.keys(obj).length;
}
  
function myFirst(array, n) {
    
  
    if (typeof n === 'number') {

      if (n < 0) {

        console.log('Invalid count, returning empty array');
        return [];
      }
      return array.slice(0, n);
    }
  
    return array[0];
}
  
function myLast(array, n) {
    console.log(n);
  
    if (typeof n === 'number') {
      if (n < 0) {

        console.log('Invalid count, returning empty array');
        return [];
      }
      return array.slice(-n);
    }
  
    return array[array.length - 1];
}
  
function myKeys(obj) {
    console.log( obj);
  
    if (typeof obj === 'object' && obj !== null) {
      return Object.keys(obj);
    }
  
    console.log('Input is not a valid object');
    return [];
}
  
function myValues(obj) {
    console.log( obj);
  
    if (typeof obj === 'object' && obj !== null) {
      return Object.values(obj);
    }
  
    console.log('Input is not a valid object');
    return [];
}