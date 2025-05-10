const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'docs/components/sass');
const importStatement = "@use '../abstracts/variables' as *;\n\n";

// Function to find all SASS files
function findSassFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      findSassFiles(filePath, fileList);
    } else if (file.endsWith('.scss') && !file.includes('_variables.scss') && !file.includes('main.scss')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Function to add import to a file if it doesn't already have it
function addImportToFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (!content.includes("@use '../abstracts/variables")) {
    // Get relative path to variables based on file location
    const relDir = path.relative(path.dirname(filePath), path.join(baseDir, 'abstracts'));
    const relativePath = relDir.replace(/\\/g, '/');
    const adjustedImport = `@use '${relativePath}/variables' as *;\n\n`;
    
    content = adjustedImport + content;
    fs.writeFileSync(filePath, content);
    console.log(`Added import to ${filePath}`);
  } else {
    console.log(`Import already exists in ${filePath}`);
  }
}

// Find all SASS files
const sassFiles = findSassFiles(baseDir);

// Add import to each file
sassFiles.forEach(addImportToFile);

console.log(`Updated ${sassFiles.length} files`); 