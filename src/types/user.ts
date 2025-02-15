import { IImage } from "./image";

export interface IUser {
  account_owner: boolean;
  bio: string;
  email: string;
  first_name: string;
  homepage: string;
  image: IImage;
  last_name: string;
  name: string;
}
