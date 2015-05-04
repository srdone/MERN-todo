##MERN Todo App

#Advantages and disadvantages of current structure
- Separate data server
    - Have to configure separately, and make sure the scripts point to the right location
    - It is easy to know where to go
    - Probably won't separate it next time
    - Can we do server side React rendering?
- Table Handling
    - Current table accepts rows as children of the table, but header and caption are generated automatically
    - It may be better for all components of the table to accept children, and have to build a table from those components
    - We could also just pass in the objects through props, but I think it makes more sense to use a form of transclusion
    - Currently each row of the table has it's own logic handling
        - We could probably eliminate a lot of this by using Flux and then creating simple components for each cell
        - We would then just pass down the data through props, and a change would trigger a re-render in everything
        - The structure would be a lot simpler

Future Plans
- Add Flux architecture (in process)
- Further refine proptypes
- Practice testing - try out TDD/BDD (framework in place now)
    - Now that test framework works, additional items should be built using BDD
- Use immutable.js for a more robust application design