// type definntion the structure of the parameters 
export type CaesarCipherParams = {
    inputStr: string;
    shift: number;
    forward: boolean;
  };

  // utility function to encrypt or decrypt based on the provided parameters
export const caesarCipherUtil = ({ inputStr, shift, forward }: CaesarCipherParams): string => {
    const appliedShift = forward ? shift : -shift;
    return inputStr.split('').reduce((acc, char) => {
      const charCode = char.charCodeAt(0);
      if (charCode >= 65 && charCode <= 90) {
        acc += String.fromCharCode(((charCode - 65 + appliedShift) % 26 + 26) % 26 + 65);
      } else if (charCode >= 97 && charCode <= 122) {
        acc += String.fromCharCode(((charCode - 97 + appliedShift) % 26 + 26) % 26 + 97);
      } else {
        acc += char;
      }
      return acc;
    }, '');
  };
