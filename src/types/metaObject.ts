export interface IMetaobject {
  system: {
    handle: string;
    id: number;
    type: string;
    url: string;
  };
  [field: string]: any;
}
