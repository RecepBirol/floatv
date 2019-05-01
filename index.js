const MULTIPLIER_OF_FRACTION = 0.000000119; // 2^-23
const FRACTION_MASK = 0x007fffff;
const EXPONENT_MASK_32 = 0x7f800000;
const EXPONENT_MASK_16 = 0x7800;
const MANTISSA_MASK = 0x07ff;
const BIAS = 127;

/* ieee754
 * @ value
 *   encoded float 4 byte float value
 * @ return
 *   decoded float value
 */
exports.binary32ToFloat = function (value) {
  if (value === 0)
    return 0.00;

  const sign = (value >> 31) === 0 ? 1 : -1;
  const fraction = (value & FRACTION_MASK) * MULTIPLIER_OF_FRACTION;
  const power = ((value & EXPONENT_MASK_32) >> 23) - BIAS;

  return sign * ((1 + fraction) * Math.pow(2, power));
};

/* two's complement notation
 * @ value
 *   encoded float 2 byte float value
 * @ return
 *   decoded float value
 */
exports.binary16ToFloat = function (value) {
  if (value === 0)
    return 0.00;



  const sign = (value >> 15) === 0 ? 0 : ~MANTISSA_MASK;
  const mantissa = (value & MANTISSA_MASK) + sign;
  const exponent = (value & EXPONENT_MASK_16) >> 11;

  return (0.01 * mantissa) * Math.pow(2, exponent);
};
