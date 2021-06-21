const launchOutput = require('../launchCodeRocks.js');
const assert = require('assert');

describe("launchOutput", function(){

  it("checks if number is ONLY divisible by 2", function(){
      assert.strictEqual(launchOutput(2), 'Launch!');
  });

    it("checks if number is ONLY divisible by 3", function(){
      assert.strictEqual(launchOutput(9), 'Code!');
  });

  it("checks if number is ONLY divisible by 5", function(){
      assert.strictEqual(launchOutput(25), 'Rocks!');
  });

  it("checks if number is divisible by 2 & 3", function(){
      assert.strictEqual(launchOutput(6), 'LaunchCode!');
  });

  it("checks if number is divisible by 3 & 5", function(){
      assert.strictEqual(launchOutput(15), 'Code Rocks!');
  });

  it("checks if number is divisible by 2 & 5", function(){
      assert.strictEqual(launchOutput(10), 'Launch Rocks! (CRASH!!!!)');
  });

  it("checks if number is not divisible by 2, 3, or 5", function(){
      assert.strictEqual(launchOutput(1), 'Rutabagas! That does not work.');
  });
});
