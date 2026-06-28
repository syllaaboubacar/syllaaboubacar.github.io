// scripts/generateCV.ts
import fs from 'fs';
import path from 'path';
import React from 'react';
import { renderToFile } from '@react-pdf/renderer';
import { CVPDF } from '../src/components/pdf/CVPDF';

async function generateCV(locale: string, photoUrl?: string) {
  const messagesPath = path.join(process.cwd(), 'src/messages', `${locale}.json`);
  if (!fs.existsSync(messagesPath)) {
    throw new Error(`Fichier introuvable : ${messagesPath}`);
  }
  const messages = JSON.parse(fs.readFileSync(messagesPath, 'utf8'));

  const outputDir = path.join(process.cwd(), 'public/cv');
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });
  const outputPath = path.join(outputDir, `cv-${locale}.pdf`);

  // Créer l'élément React avec la photo
  const element = React.createElement(CVPDF, { messages, photoUrl });
  await renderToFile(element as React.ReactElement<any>, outputPath);
  console.log(`✅ Généré : ${outputPath}`);
}

async function main() {
  // Chemin absolu vers la photo
  const photoPath = path.join(process.cwd(), 'public/avatars/aboubacar_photo.JPG');
  // Vérifier que le fichier existe
  if (!fs.existsSync(photoPath)) {
    console.warn(`⚠️ Photo non trouvée : ${photoPath}`);
  }

  await generateCV('fr', photoPath);
  await generateCV('en', photoPath);
}

main().catch(console.error);