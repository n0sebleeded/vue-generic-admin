export interface PaginatedList {
  currentPage: number;
  hasMore: boolean;
  pageSize: number;
  totalCount: number;
}
