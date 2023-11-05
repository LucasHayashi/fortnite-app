export interface Shop {
    hash:            string;
    date:            string;
    vbuckIcon:       string;
    featured:        Featured;
    daily:           null;
    specialFeatured: null;
    specialDaily:    null;
    votes:           null;
    voteWinners:     null;
}

export interface Featured {
    name:    string;
    entries: Entry[];
}

export interface Entry {
    regularPrice:        number;
    finalPrice:          number;
    bundle:              Bundle | null;
    banner:              Banner | null;
    giftable:            boolean;
    refundable:          boolean;
    sortPriority:        number;
    categories:          null;
    sectionId:           string;
    section:             null;
    devName:             string;
    offerId:             string;
    displayAssetPath:    string;
    tileSize:            string;
    newDisplayAssetPath: string;
    newDisplayAsset:     NewDisplayAsset;
    items:               Item[];
}

export interface Banner {
    value:        string;
    intensity:    string;
    backendValue: string;
}

export interface Bundle {
    name:  string;
    info:  string;
    image: string;
}

export interface Item {
    id:                   string;
    name:                 string;
    description:          string;
    type:                 Rarity;
    rarity:               Rarity;
    series:               null;
    set:                  Set | null;
    introduction:         Introduction;
    images:               ItemImages;
    variants:             Variant[] | null;
    searchTags:           null;
    gameplayTags:         string[];
    metaTags:             null;
    showcaseVideo:        null | string;
    dynamicPakId:         null;
    displayAssetPath:     null | string;
    definitionPath:       null | string;
    path:                 string;
    added:                string;
    shopHistory:          string[];
    itemPreviewHeroPath?: string;
}

export interface ItemImages {
    smallIcon: string;
    icon:      string;
    featured:  null | string;
    other:     null;
}

export interface Introduction {
    chapter:      string;
    season:       string;
    text:         string;
    backendValue: number;
}

export interface Rarity {
    value:        string;
    displayValue: string;
    backendValue: string;
}

export interface Set {
    value:        string;
    text:         string;
    backendValue: string;
}

export interface Variant {
    channel: string;
    type:    string;
    options: Option[];
}

export interface Option {
    tag:   string;
    name:  string;
    image: string;
}

export interface NewDisplayAsset {
    id:                string;
    cosmeticId:        null | string;
    materialInstances: MaterialInstance[];
}

export interface MaterialInstance {
    id:       string;
    images:   MaterialInstanceImages;
    colors:   Colors;
    scalings: { [key: string]: number };
    flags:    null;
}

export interface Colors {
    Background_Color_A:            string;
    Background_Color_B:            string;
    FallOff_Color?:                string;
    "Rarity [set to 0 for color]": string;
}

export interface MaterialInstanceImages {
    OfferImage: string;
    Background: string;
}