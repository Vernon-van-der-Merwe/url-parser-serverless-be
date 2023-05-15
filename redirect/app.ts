import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { UrlParserCtx as ctx } from './core/urlProjectCtx'
import * as service from './services/redirectService'

export const lambdaHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    let response: APIGatewayProxyResult

    try {
        const id = event.queryStringParameters?.id

        if (!id) {
            throw new Error('id is required')
        }

        const url = await service.handle(ctx, id)

        response = {
            statusCode: 301,
            headers: { Location: url.url },
            body: "null",
        }
    } catch (err) {
        let message = 'Some error occurred'
        if (err instanceof Error) {
            message = err.message
        }
        response = {
            statusCode: 301,
            // headers: { Location: `https://url-shortner-79aa8.web.app/error?err=${message}` },
            headers: { Location: `http://localhost:3000/error?err=${message}` },
            body: JSON.stringify({
                err
            }),
        }
    }

    return response
}
