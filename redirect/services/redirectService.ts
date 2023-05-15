import * as helper from './helper'

export const handle = async (ctx: any, id: string) => {
    const url = await helper.get(ctx, id)

    if (!url) {
        throw new Error('Url not found')
    }

    await helper.addClick(ctx, id, (url.clicks + 1))
    return url
}
