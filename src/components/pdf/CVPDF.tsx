// src/components/pdf/CVPDF.tsx
import React from 'react';
import { Document, Page, Text, View, StyleSheet, Link, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontFamily: 'Helvetica',
    backgroundColor: '#ffffff',
    color: '#1a1a1a',
  },
  row: {
    flexDirection: 'row',
    marginTop: 6,
  },
  leftColumn: {
    width: '28%',
    paddingRight: 8,
    backgroundColor: '#f7f9fc',
    padding: 8,
  },
  rightColumn: {
    width: '72%',
    paddingLeft: 8,
  },
  header: {
    marginBottom: 6,
    borderBottom: '1.5 solid #2c3e50',
    paddingBottom: 4,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  role: {
    fontSize: 11,
    fontWeight: 'semibold',
    color: '#34495e',
    marginTop: 1,
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 2,
  },
  contactItem: {
    fontSize: 8,
    color: '#2c3e50',
    marginRight: 8,
  },
  linksRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 2,
    marginBottom: 1,
  },
  linkItem: {
    fontSize: 8,
    color: '#2980b9',
    marginRight: 8,
  },
  section: {
    marginBottom: 5,
  },
  sectionTitle: {
    fontSize: 10.5,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 2,
    borderBottom: '1 solid #bdc3c7',
    paddingBottom: 1,
  },
  profileText: {
    fontSize: 8.5,
    lineHeight: 1.4,
    textAlign: 'justify',
  },
  item: {
    marginBottom: 3,
  },
  itemTitle: {
    fontSize: 9.5,
    fontWeight: 'bold',
  },
  itemSubtitle: {
    fontSize: 8.5,
    fontWeight: 'semibold',
    color: '#2c3e50',
  },
  itemMeta: {
    fontSize: 8,
    color: '#7f8c8d',
    marginBottom: 0.5,
  },
  description: {
    fontSize: 8,
    marginTop: 0.5,
    lineHeight: 1.3,
  },
  techList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 1,
    rowGap: 2, // ← INTERLIGNE entre les lignes
  },
  techItem: {
    fontSize: 6,
    backgroundColor: '#ecf0f1',
    padding: '1 4',
    marginRight: 3,
    marginBottom: 1,
    borderRadius: 2,
    color: '#2c3e50',
  },
  skillGroup: {
    marginTop: 2,      // ← ajouté
    marginBottom: 4,   // ← augmenté
  },
  skillGroupName: {
    fontSize: 8,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 0.5,
  },
  skillItems: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillChip: {
    fontSize: 7,
    marginRight: 4,
    marginBottom: 0.5,
  },
  projectItem: {
    marginBottom: 4,
  },
  projectName: {
    fontSize: 9,
    fontWeight: 'bold',
  },
  projectTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 0.5,
  },
  projectTag: {
    fontSize: 6,
    backgroundColor: '#ecf0f1',
    padding: '1 3',
    marginRight: 3,
    borderRadius: 2,
    color: '#2c3e50',
  },
  sidebarSection: {
    marginBottom: 10,  // ← augmenté
  },
  sidebarTitle: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
    borderBottom: '1 solid #bdc3c7',
    paddingBottom: 1,
  },
  sidebarItem: {
    fontSize: 8,
    marginBottom: 0.5,
  },
  photo: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    marginBottom: 6,
    alignSelf: 'center',
  },
  softRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 2,
    marginBottom: 4,
    rowGap: 3, // ← INTERLIGNE entre les lignes 
  },
  softCol: {
    width: '50%',
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

export const CVPDF = ({ messages, photoUrl }: { messages: any; photoUrl?: string }) => {
  const cv = messages.CvContent || {};
  const profile = cv.Profile || {};
  const contact = cv.ContactInfo || {};
  const expData = cv.experience || {};
  const eduData = cv.etude || {};
  const compData = cv.competence || {};
  const skillsData = cv.Skills || {};
  const projectsData = cv.Projets || {};

  const titleProfil = profile.profilTitle || 'Profil';
  const titleExperience = expData.experienceTitle || 'Professional Experience';
  const titleEducation = eduData.etudeTitle || 'Education';
  const titleCompetence = skillsData.competenceTitle || 'Technical Skills';
  const titleProjects = projectsData.projectTitle || 'Projects';
  const softSkillTitle = compData.softSkillTitle || 'Soft skills';
  const methodTitle = compData.methologieTitle || 'Methodologies';

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

  // Fusion des soft skills et méthodologies dans une seule liste
  const softSkills = [
    compData.lead, compData.com, compData.curiosity,
    compData.team, compData.adapte,
  ].filter(Boolean);
  const methodologies = [
    compData.agile, compData.cicd, compData.tdd,
    compData.clean, compData.pair,
  ].filter(Boolean);
  const softAndMethod = [
    ...softSkills.map(s => ({ label: s })),
    ...methodologies.map(m => ({ label: m }))
  ];

  const educationItems = eduData.items || [];
  const projectItems = projectsData.items || [];
  const skillsGroups = skillsData.groups || [];

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{profile.name || 'Nom'}</Text>
          <Text style={styles.role}>{profile.role || 'Titre'}</Text>
          <View style={styles.linksRow}>
            {profile.portfolio && <Link src={profile.portfolio} style={styles.linkItem}>• Portfolio</Link>}
            {profile.github && <Link src={profile.github} style={styles.linkItem}>• GitHub</Link>}
            {profile.linkedin && <Link src={profile.linkedin} style={styles.linkItem}>• LinkedIn</Link>}
          </View>
          <View style={styles.contactRow}>
            {contact.email && <Text style={styles.contactItem}>• {contact.email}</Text>}
            {contact.phone && <Text style={styles.contactItem}>• {contact.phone}</Text>}
            {contact.address && <Text style={styles.contactItem}>• {contact.address}</Text>}
          </View>
        </View>

        <View style={styles.row}>
          {/* Colonne gauche */}
          <View style={styles.leftColumn}>
            {photoUrl && <Image src={photoUrl} style={styles.photo} />} 

            {skillsGroups.length > 0 && (
              <View style={styles.sidebarSection}>
                <Text style={styles.sidebarTitle}>{titleCompetence}</Text>
                {skillsGroups.map((group: any, idx: number) => (
                  <View key={idx} style={styles.skillGroup}>
                    <Text style={styles.skillGroupName}>{group.name}</Text>
                    <View style={styles.skillItems}>
                      {group.items.map((item: string, i: number) => (
                        <Text key={i} style={styles.skillChip}>• {item}</Text>
                      ))}
                    </View>
                  </View>
                ))}
              </View>
            )}

            {softAndMethod.length > 0 && (
              <View style={styles.sidebarSection}>
                <Text style={styles.sidebarTitle}>{softSkillTitle} & {methodTitle}</Text>
                <View style={styles.softRow}>
                  {softAndMethod.map((item, idx) => (
                    <View key={idx} style={styles.softCol}>
                      <Text style={styles.sidebarItem}>• {item.label}</Text>
                    </View>
                  ))}
                </View>
              </View>
            )}
          </View>

          {/* Colonne droite */}
          <View style={styles.rightColumn}>
            {profile.bio && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>{titleProfil}</Text>
                <Text style={styles.profileText}>{profile.bio}</Text>
              </View>
            )}

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

            {projectItems.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>{titleProjects}</Text>
                {projectItems.map((project: any, idx: number) => (
                  <View key={idx} style={styles.projectItem}>
                    <Text style={styles.projectName}>{project.name}</Text>
                    <Text style={styles.description}>
                      {project.desc} <Link src={project.link} style={styles.linkItem}>• Demo</Link>
                    </Text>                    
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