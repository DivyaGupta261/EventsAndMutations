# EventsAndMutations
Creates a report of events and mutations happening in any page in run time.

##To run

Copy the code in index.js and run it in the console of any webpage.

The events data is printed in the console.


##How to read data

The happenings are also stored in a Map called 'data'.

To see if any event occured in a element.

```javascript
var element = document.getElementsByTagName('a')[0];
data.has(element)
```

To view events that occurred in a element

```javascript
data.get(element)
```
#Examples :

Get Events for a particular element

![alt text](https://github.com/DivyaGupta261/EventsAndMutations/img/1.png "Example 1")

Just Print 'data' in console to see all the events and elements

![alt text](https://github.com/DivyaGupta261/EventsAndMutations/img/2.png "Example 1")

![alt text](https://github.com/DivyaGupta261/EventsAndMutations/img/3.png "Example 1")

![alt text](https://github.com/DivyaGupta261/EventsAndMutations/img/4.png "Example 1")

#Supported Events

As there are many events happening in a single a mouse move ( mousemove, mouseenter, mouseleave, mouseover etc.)

A array of supportedEvents is maintained, which contains list of events that has to be documented.

If you want all the events to be documented, simply, empty the array.

```javascript
supportedEvents = []
```

All the events will be documented in 'data'
