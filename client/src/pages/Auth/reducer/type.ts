export type User = {
  id: number;
  login: string;
  password: string;
};

export type StateAuth = {
  user: User | undefined;
};
