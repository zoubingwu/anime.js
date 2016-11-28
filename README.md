# anime.js
for basic javascript animation

## about

Anime.js is a light JavaScript library like jQuery animate method, it makes js animation much more simple and you don't have to import all the jquery libraray.

## using

**Syntax:**

`anime(element, prop, duration, callback);`

**Parameter:**

- ***element:***

  dom element

- ***prop:***

  ​the css properties, support json type data just like jQuery animate() method

- ***duration:***

  mileseconds


- ***callback:*** (optional)

  callback function

### example

```javascript
var div = document.getElementById("test");

anime(div, {
  left: "300px",
  opacity: "0",
}, 200, function(){
  alert("finished!");
})
```

