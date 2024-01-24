/*
    Next.js downloads font files at build time and hosts them with your other static assets. 
    This means when a user visits your application, there are no additional network requests for fonts which would impact performance.
*/

//use this file to keep the fonts that will be used throughout your application

import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({subsets: ['latin']});

export const lusitana = Lusitana({  
    weight: ['400', '700'],
    subsets: ['latin']
});