interface IPaginatedResponse<T> {
  total_count: number;
  incomplete_results: boolean;
  items: T;
}

export default IPaginatedResponse;
