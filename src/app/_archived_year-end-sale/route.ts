import { NextResponse } from 'next/server';

// Redirect year-end-sale to new-year-sale
export async function GET(request: Request) {
    const url = new URL(request.url);
    const baseUrl = `${url.protocol}//${url.host}`;
    return NextResponse.redirect(new URL('/new-year-sale', baseUrl));
}

