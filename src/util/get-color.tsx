export function getPrimaryColor(values: any[]): any {
    const getPrimaryNameType = values.find((v) => v.slot === 1)?.type.name;

    return getPrimaryNameType;
}
export function getColorCategory(value: any): any {
    value = value.toLowerCase()
    if (value === 'hp') {
        return 'green';
    } else if (value.includes('attack') || value.includes("power")) {
        return 'attack';
    } else if (value === 'support' || value === 'defense' || value === 'cooldown') {
        return 'defense';
    } else if (value.includes('food')) {
        return 'food';
    } else {
        return 'rare';
    }
}
export function getItemColorbyCategory(value: any): any {
    value = value.toLowerCase()
    if (value.includes('armor')) {
        return 'fire';
    } else if (value.includes('schematic')) {
        return 'dark';
    } else if (value.includes('ingredient')) {
        return 'ice';
    } else if (value.includes('material')) {
        return 'grass';
    } else if (value.includes('ammo')) {
        return 'fire';
    } else if (value.includes('consumable')) {
        return 'water';
    } else if (value.includes('weapon')) {
        return 'fire';
    } else if (value.includes('sphere')) {
        return 'grass';
    } else if (value.includes('pal')) {
        return 'electric';
    } else if (value.includes('glider')) {
        return 'dragon';
    } else {
        return 'neutral';
    }
}
