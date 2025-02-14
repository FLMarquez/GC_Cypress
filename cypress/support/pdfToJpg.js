const path = require('path');
const pdfPoppler = require('pdf-poppler');

const convertPdfToJpg = async (pdfPath, outputDir) => {
    let opts = {
        format: 'jpeg',
        out_dir: outputDir,
        out_prefix: path.basename(pdfPath, path.extname(pdfPath)),
        page: null // Convierte todas las páginas
    };
    
    try {
        await pdfPoppler.convert(pdfPath, opts);
        console.log('Conversión exitosa!');
        return true;
    } catch (err) {
        console.error('Error en la conversión:', err);
        return false;
    }
};

module.exports = { convertPdfToJpg };
