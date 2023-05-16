import { ShortenedUrl } from '../models/ShortenedUrlModel'

const COLLECTION_NAME = 'shortenedUrl'

export async function get(ctx: any, id: string): Promise<ShortenedUrl | null> {
    const snapshot = await ctx.db.collection(COLLECTION_NAME).doc(id).get()

    if (snapshot.data() == undefined) {
        return null
    }

    return snapshot.data()
}

export async function addClick (ctx: any, id: string, numberOfClicks: number, object: ShortenedUrl): Promise<void> {
    await ctx.db.collection(COLLECTION_NAME).doc(id).set({numberOfClicks, ...object})
};
