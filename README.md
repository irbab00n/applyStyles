# applyStyles
This package allows for the creation of extended CSS-in-JS style objects to be used in React to style elements.

- Version 2.0.0

New approach to the thinking of the purpose of this package.  I just want a global function that I can import and call without having to type Object.assign.

As it turns out, Object.assign will filter out any false values that you can throw at it.  This is helpful in the sense that I don't have to run a linear operation everytime repeating the call of the function itself.  It just seemed a little redundant.

- Version 3.0.0

After doing some more testing, I realized that because the arguments variable available inside the body of the function is an array-like object, it is enumerable in the eyes of the spread operator.  Therefore, I don't need to hard convert the type to an array-literal, and could save a linear operation in this case.  Huge win for me!