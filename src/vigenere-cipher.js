const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  isLowercase(c) {
    return 97 <= c && c <= 122;  // 97 is character code for 'a'. 122 is 'z'.
  }

  isUppercase(c) {
    return 65 <= c && c <= 90;  // 65 is character code for 'A'. 90 is 'Z'.
  }

  isLetter(c) {
    return this.isUppercase(c) || this.isLowercase(c);
  }

  filterKey(key) {
    const result = [];
    for (let i = 0; i < key.length; i++) {
      let c = key.charCodeAt(i);
      if (this.isLetter(c))
        result.push((c - 65) % 32);
    }
    return result;
  }

  crypt(input, key) {
    let output = '';
    for (let i = 0, j = 0; i < input.length; i++) {
      let c = input.charCodeAt(i);
      if (this.isUppercase(c)) {
        output += String.fromCharCode((c - 65 + key[j % key.length]) % 26 + 65);
        j++;
      } else if (this.isLowercase(c)) {
        output += String.fromCharCode((c - 97 + key[j % key.length]) % 26 + 97);
        j++;
      } else {
        output += input.charAt(i);
      }
    }
    return output.toUpperCase();
  }

  encrypt(word, keyword) {
    return this.crypt(word, this.filterKey(keyword))
  }    

  decrypt(word, keyword) {
    let filtredKey = this.filterKey(keyword)

    for (let i = 0; i < filtredKey.length; i++) filtredKey[i] = (26 - filtredKey[i]) % 26;
    
    return this.crypt(word, filtredKey)
  }
}

module.exports = VigenereCipheringMachine;
