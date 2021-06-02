'use strict';
const testLerna01 = require('@givencui/test-lerna01') 
const testLerna02 = require('@givencui/test-lerna02') 


function testMain() {
    testLerna01()
    testLerna02()
}

testMain()

module.exports = testMain;