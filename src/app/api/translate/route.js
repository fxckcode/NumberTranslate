import { NextResponse } from 'next/server';
import { toWords } from 'number-to-words';

export async function POST(request) {
    try {
        const body = await request.json();

        if (body.number !== undefined) {
            const words = toWords(parseInt(body.number, 10));
            return NextResponse.json({ words });
        } else {
            return NextResponse.json({ error: 'No number provided' }, { status: 400 });
        }
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
