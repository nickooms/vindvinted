import { Photo } from './Photo';

export interface User {
  id: number;
  login: string;
  photo: Photo;
  profile_url: string;
  business: boolean;
}
