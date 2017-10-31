/**
 *  Decodes a String encrypted with the ceasar chiper, and returns it
 *  https://en.wikipedia.org/wiki/Caesar_cipher
 *  "Vrph udqgrp vwulqj" => "Some random string"
 */

const caesarDecode = msg => (
  msg.replace(/[A-Z]/g, c => String.fromCharCode((c.charCodeAt(0) - 65 + 23) % 26 + 65))
    .replace(/[a-z]/g, c => c.charAt(0) == "a" ? "x" : String.fromCharCode((c.charCodeAt(0) - 3))));

module.exports = caesarDecode;
