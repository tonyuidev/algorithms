class ValidParentheses {
    isValid(s) {
      let parentheses = {
        "{": "}",
        "[": "]",
        "(": ")",
      };
  
      let inverse_parentheses = Object.keys(parentheses).reduce(
        (previous, current) => {
          previous[parentheses[current]] = current;
          return previous;
        },
        {}
      );
  
      let stack = [];
      for (let c in s) {
        if (s[c] in parentheses) {
          stack.push(s[c]);
        } else if (s[c] in inverse_parentheses) {
          if (stack.length == 0 || stack[-1] != inverse_parentheses[c]) {
            return false;
          } else {
            stack.pop();
          }
        }
      }
      return stack.length == 0;
    }
  }
  
  let vp = new ValidParentheses();
  let is_valid = vp.isValid("{{()}}"); // true
  let is_invalid = vp.isValid("{{()"); // false  