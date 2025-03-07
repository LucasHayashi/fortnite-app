export interface IShop {
  status: number;
  data: IDataShop;
}
export interface IDataShop {
  hash: string;
  date: string;
  vbuckIcon: string;
  categories?: IDataShopCategory[];
}

export interface IDataShopCategory {
  name: string;
  index: number;
  items?: IEntriesEntity[] | null;
  sub_category?: IDataShopCategory[];
  total_items: number;
}

export interface IEntriesEntity {
  regularPrice: number;
  finalPrice: number;
  devName: string;
  offerId: string;
  inDate: string;
  outDate: string;
  offerTag?: IOfferTag | null;
  giftable: boolean;
  refundable: boolean;
  sortPriority: number;
  layoutId: string;
  layout: ILayout;
  tileSize: string;
  newDisplayAssetPath?: string | null;
  tracks?: ITracksEntity[] | null;
  colors?: IColors | null;
  displayAssetPath?: string | null;
  newDisplayAsset?: INewDisplayAsset | null;
  brItems?: IBrItemsEntity[] | null;
  bundle?: IBundle | null;
  instruments?: IInstrumentsEntity[] | null;
  cars?: ICarsEntity[] | null;
  banner?: IBanner | null;
}
export interface IOfferTag {
  id: string;
  text: string;
}
export interface ILayout {
  id: string;
  name: string;
  category?: string | null;
  index: number;
  rank: number;
  showIneligibleOffers: string;
  useWidePreview: boolean;
  displayType: string;
  textureMetadata?:
    | ITextureMetadataEntityOrStringMetadataEntityOrTextMetadataEntity[]
    | null;
  stringMetadata?:
    | ITextureMetadataEntityOrStringMetadataEntityOrTextMetadataEntity[]
    | null;
  textMetadata?:
    | ITextureMetadataEntityOrStringMetadataEntityOrTextMetadataEntity[]
    | null;
}
export interface ITextureMetadataEntityOrStringMetadataEntityOrTextMetadataEntity {
  key: string;
  value: string;
}
export interface ITracksEntity {
  id: string;
  devName: string;
  title: string;
  artist: string;
  album?: string | null;
  releaseYear: number;
  bpm: number;
  duration: number;
  difficulty: IDifficulty;
  genres?: string[] | null;
  albumArt: string;
  added: string;
}
export interface IDifficulty {
  vocals: number;
  guitar: number;
  bass: number;
  plasticBass: number;
  drums: number;
  plasticDrums: number;
}
export interface IColors {
  color1: string;
  color2?: string | null;
  color3: string;
  textBackgroundColor: string;
}
export interface INewDisplayAsset {
  id: string;
  cosmeticId?: string | null;
  materialInstances?: null[] | null;
  renderImages?: IRenderImagesEntity[] | null;
}
export interface IRenderImagesEntity {
  productTag: string;
  fileName: string;
  image: string;
}
export interface IBrItemsEntity {
  id: string;
  name: string;
  description: string;
  type: ITypeOrRarity;
  rarity: ITypeOrRarity;
  set?: ISet | null;
  introduction?: IIntroduction | null;
  images: IImages;
  variants?: IVariantsEntity[] | null;
  showcaseVideo?: string | null;
  added: string;
  series?: ISeries | null;
  dynamicPakId?: string | null;
  metaTags?: string[] | null;
}
export interface ITypeOrRarity {
  value: string;
  displayValue: string;
  backendValue: string;
}
export interface ISet {
  value: string;
  text: string;
  backendValue: string;
}
export interface IIntroduction {
  chapter: string;
  season: string;
  text: string;
  backendValue: number;
}
export interface IImages {
  smallIcon: string;
  icon?: string | null;
  featured?: string | null;
  lego?: ILegoOrBeanOrImages | null;
  bean?: ILegoOrBeanOrImages1 | null;
  other?: IOther | null;
}
export interface ILegoOrBeanOrImages {
  small: string;
  large: string;
}
export interface ILegoOrBeanOrImages1 {
  small: string;
  large: string;
}
export interface IOther {
  decal: string;
}
export interface IVariantsEntity {
  channel: string;
  type: string;
  options?: IOptionsEntity[] | null;
}
export interface IOptionsEntity {
  tag: string;
  name?: string | null;
  image: string;
}
export interface ISeries {
  value: string;
  colors?: string[] | null;
  backendValue: string;
  image?: string | null;
}
export interface IBundle {
  name: string;
  info: string;
  image: string;
}
export interface IInstrumentsEntity {
  id: string;
  name: string;
  description: string;
  type: ITypeOrRarity;
  rarity: ITypeOrRarity;
  images: ILegoOrBeanOrImages2;
  added: string;
  series?: ISeries1 | null;
}
export interface ILegoOrBeanOrImages2 {
  small: string;
  large: string;
}
export interface ISeries1 {
  value: string;
  colors?: string[] | null;
  backendValue: string;
  image?: string | null;
}
export interface ICarsEntity {
  id: string;
  vehicleId: string;
  name: string;
  description: string;
  type: ITypeOrRarity;
  rarity: ITypeOrRarity;
  images: ILegoOrBeanOrImages2;
  series?: ISeries2 | null;
  added: string;
}
export interface ISeries2 {
  value: string;
  colors?: string[] | null;
  backendValue: string;
}
export interface IBanner {
  value: string;
  intensity: string;
  backendValue: string;
}
