const fs = require('fs');

// Create final professional German government letter PDF
function createFinalBehoerdenPDF() {
    const content = fs.readFileSync('NWO-Untersuchungsbericht-Behoerden-mit-Quellen.txt', 'utf8');
    
    // Write the final version
    fs.writeFileSync('NWO-Untersuchungsbericht-Behoerden-Final.txt', content);
    console.log('Final government letter created: NWO-Untersuchungsbericht-Behoerden-Final.txt');
    console.log('Including Celle as city at the Fuhse river');
}

createFinalBehoerdenPDF();
