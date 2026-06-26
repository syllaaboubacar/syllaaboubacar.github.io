// src/components/pdf/CVPDF.tsx
import React from 'react';
import { Document, Page, Text, View, StyleSheet, Link } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
    backgroundColor: '#ffffff',
    color: '#1a1a1a',
  },
  row: {
    flexDirection: 'row',
    marginTop: 10,
  },
  leftColumn: {
    width: '30%',
    paddingRight: 15,
    backgroundColor: '#f7f9fc',
    padding: 10,
    borderRadius: 4,
  },
  rightColumn: {
    width: '70%',
    paddingLeft: 15,
  },
  header: {
    marginBottom: 12,
    borderBottom: '2 solid #2c3e50',
    paddingBottom: 8,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  role: {
    fontSize: 14,
    fontWeight: 'semibold',
    color: '#34495e',
    marginTop: 2,
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 4,
  },
  contactItem: {
    fontSize: 9,
    color: '#2c3e50',
    marginRight: 12,
  },
  // Ligne supplémentaire pour portfolio, github, linkedin
  linksRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 2,
    marginBottom: 4,
  },
  linkItem: {
    fontSize: 9,
    color: '#2980b9',
    marginRight: 12,
  },
  section: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 4,
    borderBottom: '1 solid #bdc3c7',
    paddingBottom: 2,
  },
  profileText: {
    fontSize: 10,
    lineHeight: 1.6,
    textAlign: 'justify',
  },
  item: {
    marginBottom: 6,
  },
  itemTitle: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  itemSubtitle: {
    fontSize: 10,
    fontWeight: 'semibold',
    color: '#2c3e50',
  },
  itemMeta: {
    fontSize: 9,
    color: '#7f8c8d',
    marginBottom: 2,
  },
  description: {
    fontSize: 9,
    marginTop: 2,
    lineHeight: 1.4,
  },
  techList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 3,
  },
  techItem: {
    fontSize: 7,
    backgroundColor: '#ecf0f1',
    padding: '1 6',
    marginRight: 4,
    marginBottom: 2,
    borderRadius: 2,
    color: '#2c3e50',
  },
  skillGroup: {
    marginBottom: 6,
  },
  skillGroupName: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 1,
  },
  skillItems: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillChip: {
    fontSize: 8,
    marginRight: 6,
    marginBottom: 1,
  },
  projectItem: {
    marginBottom: 8,
  },
  projectName: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  projectTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 1,
  },
  projectTag: {
    fontSize: 7,
    backgroundColor: '#ecf0f1',
    padding: '1 4',
    marginRight: 4,
    borderRadius: 2,
    color: '#2c3e50',
  },
  sidebarSection: {
    marginBottom: 10,
  },
  sidebarTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 3,
    borderBottom: '1 solid #bdc3c7',
    paddingBottom: 1,
  },
  sidebarItem: {
    fontSize: 9,
    marginBottom: 2,
  },
});

// Helpers
const formatDate = (dateStr?: string): string => {
  if (!dateStr) return '';
  const [year, month] = dateStr.split('-');
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return `${months[parseInt(month,10)-1] || ''} ${year}`;
};

const formatPeriod = (start?: string, end?: string): string => {
  const s = formatDate(start);
  const e = end === 'present' ? 'Present' : formatDate(end);
  return s && e ? `${s} — ${e}` : s || e || '';
};

export const CVPDF = ({ messages }: { messages: any }) => {
  // ---- Extraction depuis CvContent ----
  const cv = messages.CvContent || {};
  const profile = cv.Profile || {};
  const contact = cv.ContactInfo || {};
  const expData = cv.experience || {};
  const eduData = cv.etude || {};
  const compData = cv.competence || {};
  const skillsData = cv.Skills || {};
  const projectsData = cv.Projets || {};

  // Titres
  const titleProfil = profile.profilTitle || 'Profil';
  const titleExperience = expData.experienceTitle || 'Professional Experience';
  const titleEducation = eduData.etudeTitle || 'Education';
  const titleCompetence = skillsData.competenceTitle || 'Technical Skills';
  const titleProjects = projectsData.projectTitle || 'Projects';
  const softSkillTitle = compData.softSkillTitle || 'Soft skills';
  const methodTitle = compData.methologieTitle || 'Methodologies';

  // Expériences
  const jobKeys = ['bo', 'una', 'uad'] as const;
  const jobList = jobKeys.map(key => ({
    title: expData.jobs?.[`${key}Title`] || '',
    company: expData.jobs?.[`${key}Company`] || '',
    location: expData.jobs?.[`${key}Location`] || '',
    startDate: expData.jobs?.[`${key}StartDate`] || '',
    endDate: expData.jobs?.[`${key}EndDate`] || '',
    description: expData.jobs?.[`${key}Description`] || '',
    technologies: expData.jobs?.[`${key}Technologies`] || [],
  })).filter(job => job.title || job.company);

  // Soft skills & méthodologies
  const softSkills = [
    compData.lead, compData.com, compData.curiosity,
    compData.team, compData.adapte,
  ].filter(Boolean);
  const methodologies = [
    compData.agile, compData.cicd, compData.tdd,
    compData.clean, compData.pair,
  ].filter(Boolean);

  // Éducation, projets, compétences techniques
  const educationItems = eduData.items || [];
  const projectItems = projectsData.items || [];
  const skillsGroups = skillsData.groups || [];

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* En-tête */}
        <View style={styles.header}>
          <Text style={styles.name}>{profile.name || 'Nom'}</Text>
          <Text style={styles.role}>{profile.role || 'Titre'}</Text>

          {/* Ligne Portfolio / GitHub / LinkedIn */}
          <View style={styles.linksRow}>
            {profile.portfolio && (
              <Link src={profile.portfolio} style={styles.linkItem}>
                • {profile.portfolio}
              </Link>
            )}
            {profile.github && (
              <Link src={profile.github} style={styles.linkItem}>
                • {profile.github}
              </Link>
            )}
            {profile.linkedin && (
              <Link src={profile.linkedin} style={styles.linkItem}>
                • {profile.linkedin}
              </Link>
            )}
          </View>

          {/* Coordonnées classiques */}
          <View style={styles.contactRow}>
            {contact.email && <Text style={styles.contactItem}>• {contact.email}</Text>}
            {contact.phone && <Text style={styles.contactItem}>• {contact.phone}</Text>}
            {contact.address && <Text style={styles.contactItem}>• {contact.address}</Text>}
          </View>
        </View>

        {/* Deux colonnes */}
        <View style={styles.row}>
          {/* Colonne gauche */}
          <View style={styles.leftColumn}>
            {/* Compétences techniques */}
            {skillsGroups.length > 0 && (
              <View style={styles.sidebarSection}>
                <Text style={styles.sidebarTitle}>{titleCompetence}</Text>
                {skillsGroups.map((group: any, idx: number) => (
                  <View key={idx} style={{ marginBottom: 4 }}>
                    <Text style={[styles.skillGroupName, { fontSize: 8 }]}>{group.name}</Text>
                    <View style={styles.skillItems}>
                      {group.items.map((item: string, i: number) => (
                        <Text key={i} style={[styles.skillChip, { fontSize: 7 }]}>• {item}</Text>
                      ))}
                    </View>
                  </View>
                ))}
              </View>
            )}

            {/* Soft skills */}
            {softSkills.length > 0 && (
              <View style={styles.sidebarSection}>
                <Text style={styles.sidebarTitle}>{softSkillTitle}</Text>
                {softSkills.map((skill, i) => (
                  <Text key={i} style={styles.sidebarItem}>• {skill}</Text>
                ))}
              </View>
            )}

            {/* Méthodologies */}
            {methodologies.length > 0 && (
              <View style={styles.sidebarSection}>
                <Text style={styles.sidebarTitle}>{methodTitle}</Text>
                {methodologies.map((method, i) => (
                  <Text key={i} style={styles.sidebarItem}>• {method}</Text>
                ))}
              </View>
            )}
          </View>

          {/* Colonne droite */}
          <View style={styles.rightColumn}>
            {/* Profil */}
            {profile.bio && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>{titleProfil}</Text>
                <Text style={styles.profileText}>{profile.bio}</Text>
              </View>
            )}

            {/* Expériences */}
            {jobList.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>{titleExperience}</Text>
                {jobList.map((job, idx) => (
                  <View key={idx} style={styles.item}>
                    <Text style={styles.itemTitle}>{job.title}</Text>
                    <Text style={styles.itemSubtitle}>{job.company}</Text>
                    <Text style={styles.itemMeta}>
                      {job.location} · {formatPeriod(job.startDate, job.endDate)}
                    </Text>
                    <Text style={styles.description}>{job.description}</Text>
                    {job.technologies.length > 0 && (
                      <View style={styles.techList}>
                        {job.technologies.map((tech: string, i: number) => (
                          <Text key={i} style={styles.techItem}>{tech}</Text>
                        ))}
                      </View>
                    )}
                  </View>
                ))}
              </View>
            )}

            {/* Éducation */}
            {educationItems.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>{titleEducation}</Text>
                {educationItems.map((edu: any, idx: number) => (
                  <View key={idx} style={styles.item}>
                    <Text style={styles.itemTitle}>{edu.title}</Text>
                    <Text style={styles.itemMeta}>
                      {edu.school} · {edu.period}
                    </Text>
                  </View>
                ))}
              </View>
            )}

            {/* Projets */}
            {projectItems.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>{titleProjects}</Text>
                {projectItems.map((project: any, idx: number) => (
                  <View key={idx} style={styles.projectItem}>
                    <Text style={styles.projectName}>{project.name}</Text>
                    <Text style={styles.description}>{project.desc}</Text>
                    {project.tags && project.tags.length > 0 && (
                      <View style={styles.projectTags}>
                        {project.tags.map((tag: string, i: number) => (
                          <Text key={i} style={styles.projectTag}>{tag}</Text>
                        ))}
                      </View>
                    )}
                  </View>
                ))}
              </View>
            )}
          </View>
        </View>
      </Page>
    </Document>
  );
};