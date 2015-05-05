//Copied from https://github.com/kastork/react-karma-rewire-webpack/blob/master/test/rewireModule.js
//TODO: implement rewire properly - right now I'm having trouble importing it
export default rewireModule = function rewireModule (rewiredModule, varValues) {

  var rewiredReverts = [];

  beforeEach(() => {
    var key, value, revert;
    for (key in varValues) {
      if (varValues.hasOwnProperty(key)) {
        value = varValues[key];
        revert = rewiredModule.__set__(key, value);
        rewiredReverts.push(revert);
      }
    }
  });

  afterEach(() => {
    rewiredReverts.forEach((revert) => {
      revert();
    });
  });

  return rewiredModule;

};