// import { sequence } from 'astro:middleware';
// import stores from './stores';
import errorPages from './error-pages';

// export const onRequest = sequence(errorPages(), stores());

export const onRequest = errorPages();
