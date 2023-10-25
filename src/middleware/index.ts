import { sequence } from 'astro:middleware';
import minifier from './minifier';
import stores from './stores';

export const onRequest = sequence(stores(), minifier());
