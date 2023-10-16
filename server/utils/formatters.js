export function encodeToSlug(inputString) {
  return inputString
    .toLowerCase()                     // Convertit en minuscules
    .trim()                           // Supprime les espaces au début et à la fin
    .replace(/\s+/g, '-')              // Remplace les espaces par des tirets
    .replace(/[^a-z0-9-]/g, '')        // Supprime les caractères spéciaux et chiffres
    .replace(/-+/g, '-');             // Remplace plusieurs tirets consécutifs par un seul tiret
}