import { IFocalPoint } from "./focalPoint";
import { IVariant } from "./variant";

export interface IImage {
  alt: string;
  aspect_ratio: number;
  attached_to_variant?: boolean;
  height: number;
  id: number;
  media_type: string;
  position: number;
  presentation: string;
  preview_image: IImage | null;
  product_id: number;
  src: string;
  variants: IVariant[];
  width: number;
}

export interface IImagePresentations {
  focal_point: IFocalPoint;
}
