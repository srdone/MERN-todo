import { sortTodos } from '../utilities/todoUtils';

describe('sortTodos', () => {

  var todo1, todo2, todo3, todo4;

  beforeEach(() => {
    todo1 = {dueDate: new Date('12-Dec-2014'), completed: false};
    todo2 = {dueDate: new Date('12-Jan-2015'), completed: false};
    todo3 = {dueDate: new Date('12-Dec-2014'), completed: true};
    todo4 = {dueDate: new Date('12-Jan-2015'), completed: true};
  });

  it('should be defined', () => {
    expect(sortTodos).toBeDefined();
  });

  it('should sort by dueDate, oldest to newest', () => {
    var todos = [todo2, todo1];

    var sortedTodos = sortTodos(todos);

    expect(sortedTodos.length).toBe(2);
    expect(sortedTodos[0]).toBe(todo1);
    expect(sortedTodos[1]).toBe(todo2);
  });

  it('should sort by completed, not completed first', () => {
    var todos = [todo3, todo2];

    var sortedTodos = sortTodos(todos);

    expect(sortedTodos.length).toBe(2);
    expect(sortedTodos[0]).toBe(todo2);
    expect(sortedTodos[1]).toBe(todo3);
  });

  it('should sort by completed, then by dueDate', () => {
    var todos = [todo4, todo2, todo1, todo3];

    var sortedTodos = sortTodos(todos);

    expect(sortedTodos.length).toBe(4);
    expect(sortedTodos[0]).toBe(todo1);
    expect(sortedTodos[1]).toBe(todo2);
    expect(sortedTodos[2]).toBe(todo3);
    expect(sortedTodos[3]).toBe(todo4);
  });

  it('should sort by completed, then by dueDate, then by title', () => {
    //TODO: implement sort by title
  });

});