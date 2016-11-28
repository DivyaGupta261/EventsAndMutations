# EventsAndMutations
Creates a report of events and mutations happening in any page in run time.

Most of the times, there are many events happening in the application, done by the user. Documenting these events helps in analyzing which area of the application is used more and which is used less.

##Application

These data can be retrieved by using this piece of code.

1. Which element of the document is used more.
2. What kind of events (keyevents, mouseevents etc) is widely used in a element.


##To run

Copy the code in index.js and run it in the console of any webpage.

The events taking place are printed in the console.


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

![alt text](https://raw.githubusercontent.com/DivyaGupta261/EventsAndMutations/master/img/1.png)

Just Print 'data' in console to see all the events and elements

![alt text](https://raw.githubusercontent.com/DivyaGupta261/EventsAndMutations/master/img/2.png)

![alt text](https://raw.githubusercontent.com/DivyaGupta261/EventsAndMutations/master/img/3.png)

![alt text](https://raw.githubusercontent.com/DivyaGupta261/EventsAndMutations/master/img/4.png)

#Supported Events

As there are many events happening in a single a mouse move ( mousemove, mouseenter, mouseleave, mouseover etc.)

A array of supportedEvents is maintained, which contains list of events that has to be documented.

If you want all the events to be documented, simply, empty the array.

```javascript
supportedEvents = []
```

All the events will be documented in 'data'
