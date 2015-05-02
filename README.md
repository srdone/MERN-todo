##MERN Todo App

Note: Rendering is currently odd because of how React renders components.
see: http://stackoverflow.com/questions/25147354/react-js-rendering-differences-with-bootstrap-3
We need to add intentional white space to make sure we don't lose spacing

#Things I'm learning as I go
- propTypes are important - so we can instantly see the API exposed by the component
- Make sure to import React in every component, or tests won't see React even if we import it in the test

#Advantages and disadvantages of current structure
- Separate data server
    - Have to configure separately, and make sure the scripts point to the right location
    - It is easy to know where to go
    - Probably won't separate it next time
    - Can we do server side React rendering?

Future Plans
- Add Flux architecture (in process)
- Further refine proptypes
- Practice testing - try out TDD/BDD (framework in place now)
    - Now that test framework works, additional items should be built using BDD