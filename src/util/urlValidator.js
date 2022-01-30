const urlIsValid = (input) => {
    if (input === '' || input === null || input === undefined) return true
    try {
        new URL(input);
      } catch (e) {
        return false;
      }
      return true;
  };

export default urlIsValid