import type { NextRequest } from 'next/server';
import next from 'next/types';

export async function middleware(req: NextRequest) {
    const { nextUrl } = req;

    if (!nextUrl.pathname.includes('/_next/static/')) {
        console.log(`nextUrl.locale: ${nextUrl.locale}, nextUrl.pathname: ${nextUrl.pathname});`); 
    }
}