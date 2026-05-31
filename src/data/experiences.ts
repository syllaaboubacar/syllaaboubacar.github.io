/**
 * Ce fichier contient les données de mes expériences professionnelles.
 * Chaque expérience est représentée par un objet avec des propriétés telles que le titre, l'entreprise, les dates, etc.
 * Vous pouvez ajouter ou modifier les expériences selon vos besoins.
 */

/**
 * Interface représentant une expérience professionnelle.
 * - `id`: Un identifiant unique pour l'expérience (utilisé pour les références).
 * - `title`: Le titre du poste occupé.
 * - `company`: Le nom de l'entreprise ou de l'organisation.
 * - `startDate`: La date de début de l'expérience (format YYYY-MM).
 * - `endDate`: La date de fin de l'expérience (format YYYY-MM ou null si en cours).
 * - `description`: Une description détaillée des responsabilités et réalisations.
 * - `techIds`: (Optionnel) Un tableau d'identifiants de technologies associées à cette expérience.
 */
export interface Experience {
    id: string;
    title: string;
    company: string;
    startDate: string;
    endDate: string | null;
    description: string;
    techIds?: string[];
}

/**
 * Tableau d'expériences professionnelles.
 * Chaque objet dans ce tableau représente une expérience professionnelle avec les détails correspondants.
 * Vous pouvez ajouter de nouvelles expériences en suivant la structure définie par l'interface `Experience`.
 */
const myExperiences: Experience[] = [
    {
        id: "admin-bdd",
        title: "Administrateur BDD & Responsable scolarité",
        company: "Université Ahmadou Dieng (Conakry)",
        startDate: "2014-01",
        endDate: "2021-08",
        description:
            "Gestion et maintenance de la base de données institutionnelle. Automatisation des inscriptions et coordination avec la DSI.",
    },
    {
        id: "assistant-info",
        title: "Assistant informatique",
        company: "Université Ahmadou Dieng (Conakry)",
        startDate: "2012-01",
        endDate: "2013-12",
        description:
            "Maintenance du parc informatique et support technique aux utilisateurs.",
    },
];

/**
 * Exportation des expériences triées par date de début décroissante.
 * Cela permet d'afficher les expériences les plus récentes en premier.
 * La fonction de tri utilise `localeCompare` pour comparer les dates au format YYYY-MM.
 */
export const experiences = [...myExperiences].sort((a, b) => b.startDate.localeCompare(a.startDate));

