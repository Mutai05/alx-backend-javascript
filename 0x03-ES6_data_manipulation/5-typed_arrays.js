/**
 * Creates a new ArrayBuffer with an Int8 value at a specific position.
 * @param {Number} length - The length of the new ArrayBuffer.
 * @param {Number} position - The position to add the value.
 * @param {Number} value - The value to add.
 * @returns {DataView} - The new ArrayBuffer.
 * @throws {Error} - If the position is outside the range.
 */
export default function createInt8TypedArray(length, position, value) {
  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  view.setInt8(position, value);
  
  return view;
}
