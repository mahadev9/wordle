
export function clearMethod(word: string[], setMethod: (arg0: any[]) => void) {
  let tempFirstWord = [...word];
  let found = false;
  for (let i = word.length - 1; i >= 0; i--) {
    if (!found && tempFirstWord[i] != '') {
      tempFirstWord[i] = '';
      found = true;
    }
  }
  setMethod(tempFirstWord);
}
