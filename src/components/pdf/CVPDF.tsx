// src/components/pdf/CVPDF.tsx
import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Styles
const styles = StyleSheet.create({
  page: { padding: 30, fontSize: 11, fontFamily: 'Helvetica' },
  section: { marginBottom: 15 },
  title: { fontSize: 16, marginBottom: 8, fontWeight: 'bold' },
  subtitle: { fontSize: 12, marginBottom: 4, fontWeight: 'semibold' },
  text: { marginBottom: 4, lineHeight: 1.4 },
  divider: { borderBottomWidth: 1, borderBottomColor: '#ccc', marginVertical: 8 },
});

// Le composant doit retourner un <Document>
export const CVPDF = ({ messages }: { messages: any }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Contenu */}
      <View style={styles.section}>
        <Text style={styles.title}>{messages.Profile.name}</Text>
        <Text style={styles.subtitle}>{messages.Profile.role}</Text>
        <Text style={styles.text}>{messages.Profile.bio}</Text>
      </View>
      {/* ... ajoutez toutes vos sections */}
    </Page>
  </Document>
);