import { transformText } from "./transformText";

export const handleCardName = (cardName) => {
    const cardNameGettedFromTransformedText = transformText(cardName);

    switch (cardNameGettedFromTransformedText) {
        case 'nubank':
            return cardNameGettedFromTransformedText;
            break;

        case 'mastercard':
            return cardNameGettedFromTransformedText;
            break;

        case 'itaú' || 'itau':
            return cardNameGettedFromTransformedText;
            break;

        case 'hipercard':
            return cardNameGettedFromTransformedText;
            break;

        case 'picpay':
            return cardNameGettedFromTransformedText;
            break;

        default: false
            break;
    }
}