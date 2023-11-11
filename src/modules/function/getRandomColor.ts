const stringToHue = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++)
        hash = str.charCodeAt(i) + ((hash << 5) - hash);

    const hue = (hash % 360) % 360; // Ensure hue is between 0 and 360 degrees
    return hue;
}

export const getColorFromName = (firstName: string, phone: string , lastName: string) => {
    const combinedName = `${firstName}${phone}${lastName}`
    const hue = stringToHue(combinedName)

    const color = `hsl(${hue}, 50%, 60%)`;
    return color;
}