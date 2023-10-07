import { sequence } from 'astro:middleware';
import errorPage from './error-page';

export const onRequest = sequence(errorPage());
