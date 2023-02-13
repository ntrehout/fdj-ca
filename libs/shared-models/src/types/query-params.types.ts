export type GetAllQueryParams<T> = {
  page?: number;
  limit?: number;
  sort?: 'asc' | 'desc';
} & Partial<{
  [Key in keyof T]: string;
}>;
