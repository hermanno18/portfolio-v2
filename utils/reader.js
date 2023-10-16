// Dans le fichier utils/jsonReader.js

import fs from 'fs';
import path from 'path';

export function readJsonFilesInDirectory(directoryPath) {
  if (process.server) {
    const files = fs.readdirSync(directoryPath);
    console.log('les fichiers', files)
    const jsonFiles = files.filter(file => file.endsWith('.json'));

    const jsonData = jsonFiles.map(file => {
      const filePath = path.join(directoryPath, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(fileContent);
    });

    return jsonData;
  } else {
    // Gérer le cas où le code s'exécute côté client
    return [];
  }
}

