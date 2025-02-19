import axios from 'axios'
import { useRuntimeConfig } from "nuxt/app";

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()
    const instance = axios.create({
        baseURL: config.public.endpoint,
        timeout: 10000,
        headers: {
            'Content-Type': 'application/json',
        }
    })

    // Request Interceptor
    instance.interceptors.request.use(
        (config) => {
            return config
        },
        (error) => {
            return Promise.reject(error)
        }
    )

    // Response Interceptor
    instance.interceptors.response.use(
        (response) => {
            console.log('Response received:', response)
            return response
        },
        (error) => {
            console.error('Response error:', error)
            return Promise.reject(error)
        }
    )

    nuxtApp.provide('axios', instance)
});