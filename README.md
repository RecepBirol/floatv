# floatv
float value encode/decode two's complement and single precision floating point format
# Test & Example
```js
const floatv = require("../index");

describe("binary32toFloat, ieee 754 floating point", function () {
    it("should return 23.29 if given 0x41ba6666", function () {
        assert.equal(floatv.binary32ToFloat(0x41ba6666).toFixed(2), 23.29);
    });

    it("should return -33.16 if given  0xc204a3d7", function () {
        assert.equal(floatv.binary32ToFloat(0xc204a3d7).toFixed(2), -33.16);
    });

    it("should return 0.00 if given 0", function () {
        assert.equal(floatv.binary32ToFloat(0), 0.00);
    })
});

describe("binary16toFloat, two's complement notation", function () {
    it("should return 0.00 if given 0", function () {
        assert.equal(floatv.binary16ToFloat(0), 0.00);
    });
})
```
