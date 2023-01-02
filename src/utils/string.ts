// string manipulation util fns

const str = {
  getPartAfterSubstring: (str: string, substr: string) => {
    const indexOfLastItemOfSubstring = str.indexOf(substr) + substr.length;
    return str.slice(indexOfLastItemOfSubstring);
  },
};

export default str;
