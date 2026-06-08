import fs from 'fs';
import path from 'path';
import React from 'react';
import { renderToFile } from '@react-pdf/renderer';
import { CVPDF } from '../src/components/pdf/CVPDF';

async function generateCV(locale: string) {
  const messagesPath = path.join(process.cwd(), 'src/messages', `${locale}.json`);
  if (!fs.existsSync(messagesPath)) {
    throw new Error(`Fichier introuvable : ${messagesPath}`);
  }
  const messages = JSON.parse(fs.readFileSync(messagesPath, 'utf8'));

  const outputDir = path.join(process.cwd(), 'public/cv');
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });
  const outputPath = path.join(outputDir, `cv-${locale}.pdf`);

  // Créer l'élément React
  const element = React.createElement(CVPDF, { messages });
  // Cast temporaire pour contourner la vérification de TypeScript
  await renderToFile(element as React.ReactElement<any>, outputPath);
  console.log(`✅ Généré : ${outputPath}`);
}

async function main() {
  await generateCV('fr');
  await generateCV('en');
}

main().catch(console.error);