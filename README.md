##MERN Todo App

#Advantages and disadvantages of current structure
- Separate data server
    - Have to configure separately, and make sure the scripts point to the right location
    - It is easy to know where to go
    - Probably won't separate it next time
    - Can we do server side React rendering?
- Table Handling
    - Current table accepts rows as children of the table, but header and caption are generated automatically
    - There are a lot of different ways we could do this:
        - create very simple components that you have to include all of them to create a table (each using this.props.children)
        - Write a data table component that accepts components for the cell values, but has built in sorting, etc.
    - The current method of having a custom row component works pretty well
    - It really depends on how reusable we want it to be.
    - Using the Flux architecture and building custom components to be passed in as each cell might be the best way to go
        - That way we only have to handle the change notification and the rerender happens, so we don't have to include custom update logic in each piece.
- Sorting functions separated in their own module
    - Keeps the sort logic able to be used in multiple places in the app
- Using es6 modules and web pack really helps make the app modular and maintainable.
- React Router
    - Probably overkill for this size of project, but good to know some basics

Future Plans
- Add Flux architecture (in process)
- Further refine proptypes
- Practice testing - try out TDD/BDD (framework in place now)
    - Now that test framework works, additional items should be built using BDD
- Use immutable.js for a more robust application design