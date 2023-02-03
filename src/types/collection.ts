// export type TCollection = {
//   id: number;
//   name: string;
//   name_eng: string;
//   description: string;
//   description_eng: string;
//   seo: string;
//   seodescription: string;
//   seokeyword: string;
//   link: string;
//   banner_url: string;
//   brand_id: number;
//   type: CollectionTypeEnum;
//   position: number;
// };

export type TCollection = {
  id: string;
  name: string;
  code: string;
  status: CollectionStatus;
  picUrl: string;
  description: string;
};
export enum CollectionStatus {
  ACTIVE = 'Active',
  DEACTIVE = 'Deactive'
}

export enum CollectionTypeEnum {
  MenuCollection = 0,
  GroupCollection = 1
}
