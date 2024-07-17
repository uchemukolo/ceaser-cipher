import { caesarCipherUtil, CaesarCipherParams } from './caesarCipher';

describe('caesarCipherUtil', () => {
  const testCases: {
    description: string;
    params: CaesarCipherParams;
    expectedOutput: string;
  }[] = [
    {
      description: 'encrypts text with forward shift',
      params: { inputStr: 'HELLO', shift: 3, forward: true },
      expectedOutput: 'KHOOR',
    },
    {
      description: 'decrypts text with backward shift',
      params: { inputStr: 'KHOOR', shift: 3, forward: false },
      expectedOutput: 'HELLO',
    },
    {
      description: 'handles lowercase letters correctly',
      params: { inputStr: 'hello', shift: 3, forward: true },
      expectedOutput: 'khoor',
    },
    {
      description: 'ignores non-alphabetic characters',
      params: { inputStr: 'hello, world!', shift: 3, forward: true },
      expectedOutput: 'khoor, zruog!',
    },
    {
      description: 'wraps around the alphabet',
      params: { inputStr: 'xyz', shift: 3, forward: true },
      expectedOutput: 'abc',
    },
    {
      description: 'handles large shift values',
      params: { inputStr: 'abc', shift: 29, forward: true },
      expectedOutput: 'def',
    },
    {
      description: 'handles negative shifts correctly',
      params: { inputStr: 'HELLO', shift: -3, forward: true },
      expectedOutput: 'EBIIL',
    },
    {
      description: 'handles shift values greater than 26',
      params: { inputStr: 'HELLO', shift: 30, forward: true },
      expectedOutput: 'LIPPS',
    },
    {
      description: 'handles shift values equal to 26',
      params: { inputStr: 'HELLO', shift: 26, forward: true },
      expectedOutput: 'HELLO',
    },
    {
      description: 'returns the same text if shift is 0',
      params: { inputStr: 'HELLO', shift: 0, forward: true },
      expectedOutput: 'HELLO',
    },
    {
      description: 'handles mixed case input',
      params: { inputStr: 'HeLlO WoRlD', shift: 3, forward: true },
      expectedOutput: 'KhOoR ZrUoG',
    },
    {
      description: 'handles empty inputString input',
      params: { inputStr: '', shift: 3, forward: true },
      expectedOutput: '',
    },
    {
      description: 'handles non-alphabetic characters correctly',
      params: { inputStr: '123!@#', shift: 3, forward: true },
      expectedOutput: '123!@#',
    },
    {
      description: 'handles spaces correctly',
      params: { inputStr: 'HELLO WORLD', shift: 3, forward: true },
      expectedOutput: 'KHOOR ZRUOG',
    },
    {
      description: 'handles all uppercase letters',
      params: { inputStr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', shift: 3, forward: true },
      expectedOutput: 'DEFGHIJKLMNOPQRSTUVWXYZABC',
    },
    {
      description: 'handles all lowercase letters',
      params: { inputStr: 'abcdefghijklmnopqrstuvwxyz', shift: 3, forward: true },
      expectedOutput: 'defghijklmnopqrstuvwxyzabc',
    },
    {
      description: 'decrypts text with large backward shift',
      params: { inputStr: 'KHOOR', shift: 29, forward: false },
      expectedOutput: 'HELLO',
    },
  ];

  testCases.forEach(({ description, params, expectedOutput }) => {
    it(description, () => {
      expect(caesarCipherUtil(params)).toBe(expectedOutput);
    });
  });
});
