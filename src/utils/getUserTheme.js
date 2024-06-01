export function getBrightness(rgb) {
    if(rgb){
    const color = rgb.match(/\d+/g).map(Number);
    return (color[0] * 299 + color[1] * 587 + color[2] * 114) / 1000;
    }
}

export function getBackgroundColor(element) {
    if (!element) return null;

    const computedStyle = window.getComputedStyle(element);
    let bgColor = computedStyle.backgroundColor;

    if (bgColor === 'rgba(0, 0, 0, 0)' || bgColor === 'transparent') {
        return getBackgroundColor(element.parentElement);
    }

    return bgColor;
}