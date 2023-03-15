export interface MessageOfTheDay {
    id: string,
    title: string,
    tabTitle: string,
    body: string,
    image: string,
    tileImage: string,
    sortingPriority: number,
    hidden: boolean,
    videoString?: string,
    videoId?: string
}