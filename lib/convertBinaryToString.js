/**
 * Convert any given binary to string
 * @param {binary} binary Binary value as string
 * @return returned string
 */

function convertBinaryToString(binary) {
  if (typeof binary !== "string") return;

  const trimmedBinary = binary.replace(/\s+/g, "").match(/\d{1,8}/g).join` `;
  const splitBinary = trimmedBinary.split` `;

  return splitBinary.map((b) => String.fromCharCode(parseInt(b, 2))).join``;
}

module.exports = convertBinaryToString;
