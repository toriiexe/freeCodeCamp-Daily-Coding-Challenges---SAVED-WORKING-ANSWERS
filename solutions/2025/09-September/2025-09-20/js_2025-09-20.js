// JavaScript solution for 2025-09-20
// File Storage
function numberOfFiles(fileSize, fileUnit, driveSizeGb) {
    const conversion = {
        B: 1,
        KB: 1000,
        MB: 1000000,
        GB: 1000000000
    };

    return Math.floor((driveSizeGb * conversion.GB) / (fileSize * conversion[fileUnit]));
}