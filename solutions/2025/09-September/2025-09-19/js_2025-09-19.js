// JavaScript solution for 2025-09-19
// Photo Storage
function numberOfPhotos(photoSizeMb, hardDriveSizeGb) {
  return Math.floor(hardDriveSizeGb * 1000 / photoSizeMb);
}