import { User } from '../models/user.model';

interface UserResponse {
  ok: boolean;
}

export interface GetUsersResponse extends UserResponse {
  users: User[];
}
