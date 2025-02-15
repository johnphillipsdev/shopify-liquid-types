import { IImage } from "./image";

export interface IGenericFile {
  alt: string;
  id: number;
  media_type: string;
  position: number;
  preview_image: IImage;
  url: string;
}
