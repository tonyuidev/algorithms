class RansomNote {
    constructor() {}
  
    public canSpell(magazine: Array<string>, note: string) {
      let letters: Object = {};
      for (let l in magazine) {
        let key = magazine[l];
        if (key in letters) {
          letters[key] += 1;
        } else {
          letters[key] = 1;
        }
      }
  
      let noteLetters = note.split("");
      for (let l in noteLetters) {
        let key = noteLetters[l];
        if (letters[key] <= 0 || typeof letters[key] == "undefined") {
          return false;
        }
        if (letters.hasOwnProperty(key)) {
          letters[key] -= 1;
        } else {
          letters[key] = 0;
        }
      }
      return true;
    }
  }
  
  let true_note = new RansomNote().canSpell(
    ["a", "b", "t", "s", "b", "e", "z", "f"],
    "safe"
  ); // true
  let false_note = new RansomNote().canSpell(
    ["a", "b", "t", "s", "b", "z", "f"],
    "safe"
  ); // false
  