const CHANNEL_ID = '7otXfC9ey2uwYrSY';
const drone = new ScaleDrone(CHANNEL_ID, {
    data: {
        name: getRandomName(),
        color: getRandomColor()
    }
});
