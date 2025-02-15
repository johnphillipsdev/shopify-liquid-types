import { ILink } from "./link";

export interface ILinkList {
  handle: string;
  levels: number;
  links: ILink[];
  title: string;
}
