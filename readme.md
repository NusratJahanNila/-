1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer:

The getElementById() method returns an element with a specified value.
The getElementsByClassName() method returns a collection of elements with a specified class name(s).
The querySelector() method returns the first element that matches a CSS selector.
The querySelectorAll() method returns all elements that match a CSS selector(s).



2.How do you create and insert a new element into the DOM?

Answer:

The createElement() function is used to create elements within the DOM.
To add a new element to the HTML DOM,we need to append it to an existing element using appendChild() function.


3.What is Event Bubbling and how does it work?

Answer:

Event bubbling is a type of DOM event propagation where the event first triggers on the innermost target element, and then successively triggers on the ancestors or parents of the target element in the same nesting hierarchy till it reaches the outermost DOM element or document object.

The event starts to bubble up through the DOM hierarchy after it has been processed at the target element. The event then travels from the target element to the root of the document. It passes through all ancestor elements according to how they are nested in the bubbling phase.

4.What is Event Delegation in JavaScript? Why is it useful?

Answer:

Event delegation refers to the practice of adding a single event listener to a parent element instead of adding multiple listeners to individual child elements.

Instead of attaching multiple event listeners, which can consume memory and processing time, we can attach a single listener to the parent. This is especially useful when dealing with a large number of elements or when dynamically adding/removing elements.



5.What is the difference between preventDefault() and stopPropagation() methods?

Answer:

stopPropagation() prevents further propagation of the current event in the capturing and bubbling phases.
preventDefault() prevents the default action the browser makes on that event.