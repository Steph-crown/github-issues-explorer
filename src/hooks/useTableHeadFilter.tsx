import { useState } from "react";
import { DEFAULT_FILTERS } from "../constants";

const useTableHeadFilter = () => {
  const [filters, setFilters] = useState(DEFAULT_FILTERS);

  const setFilterFieldvalue = (field: string, val: boolean) => {
    setFilters((prev) => ({ ...prev, [field]: val }));
  };

  return { filters, setFilterFieldvalue };
};

export default useTableHeadFilter;
