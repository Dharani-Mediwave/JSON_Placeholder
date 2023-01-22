import api from './axios-api';
import { baseEnv } from '../environments/base';
// import PostsReqsponse from '../types/posts';
// console.log('url :>>', baseEnv.api.getPosts);

export const getPostsRequest = (): Promise<any> => api.get(baseEnv.api.getPosts);

// export const createPost = (data: any): Promise<any> => api.post(baseEnv.api.getPosts, data);
// export const updatePost = (id: string, data: any): Promise<any> => api.put(baseEnv.api.getPosts, data);
