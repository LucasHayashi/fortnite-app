export interface Banners {
    id: string,
    devName: string,
    name: string,
    description: string,
    category: string,
    fullUsageRights: boolean,
    images: {
        smallIcon: string,
        icon: string
    }
}