/* Binding Events */

MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(function(mutations, observer) {
    var event = {'type' : "Mutation_"+mutations[0].type , 'target' : mutations[0].target,'mutation' : mutations[0] }
    eventOccured(event);
});
observer.observe(document, {
    subtree: true,
    attributes: true,
    childList: true,
    characterData: true,
    attributeOldValue: true,
    characterDataOldValue: true
});
function getAllEvents(element) {
    var keys = [];
    for(var k in element) keys.push(k);
    return keys.filter(key => key.indexOf('on') === 0)
                .map(key => key.slice(2));
}
var element = document.getElementsByTagName('body')[0];
getAllEvents(element).forEach(e => element.addEventListener(e, eventOccured, false));

/* Storing Events data */

var data = new WeakMap();

// Only these events are documented. Change this array to document specific events.
// Empty this array to document all the events.
var supportedEvents = ["click", "keydown", "keyup", "mouseover"]; 

function eventOccured(event){
  if(isSupportedEvent(event.type)){
    printEventData(event.type,event.target);
    setDataInMap(event.target,event.type,event);
  }
}
function setDataInMap(target,eventType, event){
  if(data.has(target)){
    var eventObj = data.get(target);
    (eventType in eventObj) ? eventObj[eventType].push(event) : eventObj[eventType] = [event]
  }else {
    var eventObj = {};
    eventObj[eventType] = [event];
    data.set(target,eventObj);
  }
}
function printEventData(eventType, target) {
  console.log( eventType + " occured in ",target);
  console.count(target);
}

function isSupportedEvent(eventType){
  return supportedEvents.indexOf(eventType) >-1 || supportedEvents.length == 0;
}
