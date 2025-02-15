import { IImage } from "./image";

export interface IMedia {
  alt: string;
  id: number;
  media_type: string;
  position: number;
  preview_image: IImage;
}
