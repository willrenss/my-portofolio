export const getFirstNonSpaceCharacter = (inputString: string) => {
    const trimmedString = inputString.trim();
    if (trimmedString.length === 0) {
        return null;
    }
    return trimmedString[0];
}

export const isFavorite = (char: string) => {
    const favRegex = /^0@/
    return favRegex.test(char)
}

export const favFix = (char: string) => {
    const favRegex = /^0@/;
    if (isFavorite(char))
        return char.replace(favRegex, "");
    else
        return char
}