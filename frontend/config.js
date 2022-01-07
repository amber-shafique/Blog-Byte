import getConfig from "next/config"
const {publicRuntimeConfig}=getConfig()

export const API=publicRuntimeConfig.PRODUCTION ? 'https://blog-byte.com':'http://localhost:8000';
export const APP_NAME=publicRuntimeConfig.APP_NAME;
