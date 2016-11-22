# anime.js
for javascript animation

## about

Anime.js is a light JavaScript library like jQuery animate method but it supports non-digit values like rotate() or translate(), it makes CSS3 backed animation much more simple and elegant.

## using

**Syntax:**

`anime(element, prop, duration, callback);`

**Parameter:**

- ***element:***

​	javascript dom element

- ***prop:***

​	the css properties, support json type data just like jQuery animate() method

- ***duration:***

  mileseconds


- ***callback:***

  callback function

### example

```javascript
var div = document.getElementById("test");

anime(div, {
  left: "300px",
  opacity: "0",
  transform: "rotate(180deg)"
}, 200, function(){
  alert("finished!");
})
```

