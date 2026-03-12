const fs = require('fs');
const path = require('path');

// Simple HTML to PDF conversion using Node.js
function createPDF() {
    const markdownContent = fs.readFileSync('README.md', 'utf8');
    
    // Convert markdown to HTML
    let htmlContent = markdownContent
        .replace(/^# (.*$)/gim, '<h1>$1</h1>')
        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
        .replace(/^### (.*$)/gim, '<h3>$1</h3>')
        .replace(/^#### (.*$)/gim, '<h4>$1</h4>')
        .replace(/^\*\*(.*)\*\*/gim, '<strong>$1</strong>')
        .replace(/^\* (.*)$/gim, '<li>$1</li>')
        .replace(/^- (.*)$/gim, '<li>$1</li>')
        .replace(/^\*\*(.*)\*\*:/gim, '<strong>$1</strong>:')
        .replace(/\*\*(.*)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*)\*/g, '<em>$1</em>')
        .replace(/^- (.*)$/gm, '<li>$1</li>')
        .replace(/^---$/gm, '<hr>')
        .replace(/\n\n/g, '</p><p>')
        .replace(/^(.*)$/gm, '<p>$1</p>')
        .replace(/<p><\/p>/g, '')
        .replace(/<p>(<h[1-6]>.*<\/h[1-6]>)<\/p>/g, '$1')
        .replace(/<p>(<li>.*<\/li>)<\/p>/g, '$1')
        .replace(/<p>(<hr>)<\/p>/g, '$1');
    
    // Add HTML structure
    const fullHTML = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>NWO Untersuchungsbericht</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
        h1 { color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px; }
        h2 { color: #34495e; border-bottom: 1px solid #bdc3c7; padding-bottom: 5px; }
        h3 { color: #7f8c8d; }
        h4 { color: #95a5a6; }
        strong { color: #2c3e50; }
        ul { margin: 10px 0; }
        li { margin: 5px 0; }
        hr { border: none; border-top: 1px solid #bdc3c7; margin: 20px 0; }
        .header { text-align: center; margin-bottom: 30px; }
        .footer { margin-top: 50px; font-size: 12px; color: #7f8c8d; }
    </style>
</head>
<body>
    <div class="header">
        <h1>NWO UNTERSUCHUNGSBERICHT</h1>
        <p>Gesamtdokumentation der forensischen Untersuchung</p>
        <p>Erstellt am 12. März 2026</p>
    </div>
    
    ${htmlContent}
    
    <div class="footer">
        <p>© 2026 NWO-Analyse-Recherche-Stalking-Mobbing-Cyberraum</p>
        <p>Forensische Untersuchung der russischen Beeinflussungskampagne</p>
    </div>
</body>
</html>`;
    
    // Write HTML file
    fs.writeFileSync('NWO-Untersuchungsbericht.html', fullHTML);
    console.log('HTML file created: NWO-Untersuchungsbericht.html');
    console.log('You can now open this file in a browser and print to PDF');
}

createPDF();
