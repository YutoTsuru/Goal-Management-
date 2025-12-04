import axios from 'axios';
import { Post, Comment } from '../types';

const API_URL = 'https://api.example.com/social'; // Replace with your actual API URL

export const fetchPosts = async (): Promise<Post[]> => {
    const response = await axios.get<Post[]>(`${API_URL}/posts`);
    return response.data;
};

export const createPost = async (post: Post): Promise<Post> => {
    const response = await axios.post<Post>(`${API_URL}/posts`, post);
    return response.data;
};

export const fetchComments = async (postId: string): Promise<Comment[]> => {
    const response = await axios.get<Comment[]>(`${API_URL}/posts/${postId}/comments`);
    return response.data;
};

export const addComment = async (postId: string, comment: Comment): Promise<Comment> => {
    const response = await axios.post<Comment>(`${API_URL}/posts/${postId}/comments`, comment);
    return response.data;
};

export const likePost = async (postId: string): Promise<void> => {
    await axios.post(`${API_URL}/posts/${postId}/like`);
};