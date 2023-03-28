export const formatStringtoArray = (str) => {
  if (str) {
    const tempStr = str.replace(/[\r\n]/g, " ").trim();
    const wordArray = tempStr.split(" ").filter((w) => w !== "");
    return wordArray;
  } else {
    return [];
  }
};
