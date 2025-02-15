import { IImage } from "./image";
import { IVideoSource } from "./videoSource";

export interface IVideo {
  alt: string;
  aspect_ratio: number;
  duration: number;
  id: number;
  media_type: string;
  position: number;
  preview_image: IImage;
  sources: IVideoSource[];
}
