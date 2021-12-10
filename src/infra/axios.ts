import { HttpClient } from "../data/contracts/http-client";
import { api } from "../main/config/axios";

export class Axios implements HttpClient {

    constructor(private readonly route: string) { }
    async post(body: any): Promise<any> {
        try {
            const response = await api.post(this.route, body)
            return response.data
        } catch (error: any) {
            return new Error(error.response.data.message)
        }
    }

    async put(body: any): Promise<any> {
        try {
            const response = await api.put(this.route, body)
            return response.data
        } catch (error: any) {
            return new Error(error.response.data.message)
        }
    }

    async get(params: any): Promise<any> {
        try {
            const response = await api.get(this.route, {
                params
            })
            return response.data
        } catch (error: any) {
            return new Error(error.response.data.message)
        }
    }

    async delete(params: any): Promise<any> {
        try {
            const response = await api.get(this.route, {
                params
            })
            return response.data
        } catch (error: any) {
            return new Error(error.response.data.message)
        }
    }
}