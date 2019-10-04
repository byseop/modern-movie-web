export type AsyncState<T, E = any> = {
  data: T | null;
  loading: boolean;
  error: E | null;
};

export const asyncState = {
  initial: <T, E = any>(initialData?: T): AsyncState<T, E> => ({
    data: initialData || null,
    loading: false,
    error: null
  }),
  load: <T, E = any>(data?: T): AsyncState<T, E> => ({
    data: data || null,
    loading: true,
    error: null
  }),
  success: <T, E = any>(data: T): AsyncState<T, E> => ({
    data,
    loading: false,
    error: null
  }),
  error: <T, E = any>(error: E): AsyncState<T, E> => ({
    data: null,
    loading: false,
    error: error
  })
};
