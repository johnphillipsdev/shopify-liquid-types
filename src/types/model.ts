import { IImage } from "./image";

export interface IModel {
  alt: string;
  id: number;
  media_type: string;
  position: number;
  preview_image: IImage;
  sources: IModelSource[];
}

export interface IModelSource {
  format: string;
  mime_type: string;
  url: string;
}
