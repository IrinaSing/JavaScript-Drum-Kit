# Notes

We can find the keyCode of each key on the site keycode.info

What <_kbd_> does  
The HTML Keyboard Input Element <_kbd_> represents user input and produces an inline element displayed in the browser's default monospace font.

HTML `data-*` attributes: Introduced in HTML5, `data-*` attributes (where \* can be anything you want) allow us to store custom data on any HTML element. Each `div.key` (`<div class="key" data-key="...">`) and audio element in the provided HTML file has a data-key attribute which corresponds with a keyboard button.

CSS playing class & pre-defined style: The provided CSS file already has a playing class defined with some rules in it. We will apply this class to the correct element, depending on the key pressed by the user, and remove it once animation is finished.

https://github.com/nitishdayal/JavaScript30/tree/master/exercises/01%20-%20JavaScript%20Drum%20Kit

The `transitionend` event is fired when a CSS transition has completed.
The `Element.classList` is a read-only property that returns a live DOMTokenList collection of the class attributes of the element. This can then be used to manipulate the class list.

`NodeList` objects are collections of nodes, usually returned by properties such as Node.childNodes and methods such as document.querySelectorAll(). Although NodeList is not an Array, it is possible to iterate over it with forEach(). It can also be converted to a real Array using Array.from().
https://developer.mozilla.org/en-US/docs/Web/API/NodeList
