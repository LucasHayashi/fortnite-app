import { Rarity, Series, Introduction, Images, Variant } from "../interfaces/cosmetic";

export class FortniteItem {
    id: string;
    name: string;
    description?: string;
    type?: Rarity;
    rarity?: Rarity;
    series?: Series;
    introduction?: Introduction;
    images?: Images;
    added?: Date;
    variants?: Variant[];
    constructor(item) {
        this.id = item.id;
        this.name = item.name;
        this.description = item?.description;
        this.type = item?.type;
        this.rarity = item?.rarity;
        this.series = item?.series;
        this.introduction = item?.introduction;
        this.images = item?.images;
        this.variants = item.variants;
        this.added = item?.added;
    }
}