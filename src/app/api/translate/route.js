import { NextResponse } from 'next/server';
import { toWords } from 'number-to-words';

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
const toTitleCase = (str) => str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
const toSentenceCase = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

export async function POST(request) {
    try {
        const body = await request.json();
        const { number, to, letterCase } = body;

        if (number !== undefined) {
            let result;

            if (to == '1') { // Convertir a palabras
                result = toWords(number);
            } else if (to == '2') { // Convertir a formato de moneda
                const numberInWords = toWords(number);
                result = `${numberInWords} ${number === '1' ? 'dollar' : 'dollars'}`;
            }

            switch (letterCase) {
                case '1':
                    result = result.toLowerCase();
                    break;
                case '2':
                    result = result.toUpperCase();
                    break;
                case '3':
                    result = toTitleCase(result);
                    break;
                case '4':
                    result = toSentenceCase(result);
                    break;
                default:
                    break;
            }

            return NextResponse.json({ words: result });
        } else {
            return NextResponse.json({ error: 'No number provided' }, { status: 400 });
        }
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
