const num = {
  addCommas: (val: number): string => {
    return val ? val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "";
  },
};

export default num;
