export interface HttpClient {
    post(body: any): Promise<any>
    put(body: any): Promise<any>
    get(params: any): Promise<any>
    delete(params: any): Promise<any>
}