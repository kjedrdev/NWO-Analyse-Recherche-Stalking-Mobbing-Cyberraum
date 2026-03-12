const fs = require('fs');

// Create final professional German government letter PDF
function createFinalBehoerdenPDF() {
    const content = fs.readFileSync('NWO-Untersuchungsbericht-Behoerden-Final.txt', 'utf8');
    
    // Write to final file
    fs.writeFileSync('NWO-Untersuchungsbericht-Behoerden-Abschluss.txt', content);
    console.log('Final government letter created: NWO-Untersuchungsbericht-Behoerden-Abschluss.txt');
    console.log('Including HRV informant geschleust seit 11.03.');
}

createFinalBehoerdenPDF();
