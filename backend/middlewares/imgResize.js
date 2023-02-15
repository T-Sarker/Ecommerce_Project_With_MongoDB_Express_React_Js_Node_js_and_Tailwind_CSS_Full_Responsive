const sharp = require('sharp')
const path = require('path')
const fs = require('fs')

exports.imgResize = async (imgReqFile, folderName) => {
    const imgPath = 'public/uploads/'
    const { filename: image } = imgReqFile;

    if (!fs.existsSync(imgPath + folderName)) {
        fs.mkdirSync(imgPath + folderName, 0744);
    }
    await sharp(imgReqFile.path)
        .resize(200, 200)
        .jpeg({ quality: 90 })
        .toFile(
            path.resolve(imgReqFile.destination, folderName, image)
        )
    fs.unlink(imgPath + imgReqFile.filename, err => { console.log(err); })
}
