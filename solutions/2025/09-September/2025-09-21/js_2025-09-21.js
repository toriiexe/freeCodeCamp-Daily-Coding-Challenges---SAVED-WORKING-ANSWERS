// JavaScript solution for 2025-09-21
// Video Storage
function numberOfVideos(videoSize, videoUnit, driveSize, driveUnit) {
    const conversions = {
        B: 1,
        KB: 1000,
        MB: 1000000,
        GB: 1000000000,
        TB: 1000000000000
    };

    const videoUnits = ['B', 'KB', 'MB', 'GB'];
    const driveUnits = ['GB', 'TB'];

    if (!videoUnits.includes(videoUnit)) {
        return 'Invalid video unit';
    }

    if (!driveUnits.includes(driveUnit)) {
        return 'Invalid drive unit';
    }

    return Math.floor((driveSize * conversions[driveUnit]) / (videoSize * conversions[videoUnit]));
}