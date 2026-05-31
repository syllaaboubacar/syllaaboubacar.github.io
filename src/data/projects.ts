/**
 * Ce fichier contient les données de mes projets personnels et d'équipe, avec des détails sur les technologies utilisées, les descriptions,
 * les liens vers les dépôts GitHub et les démonstrations. Les projets sont triés par date de réalisation, du plus récent au plus ancien.
 * Chaque projet est représenté par une interface `Project` qui définit les propriétés nécessaires pour décrire un projet de manière complète,
 * y compris les images, les membres de l'équipe et les types de projet (personnel ou en équipe).
 */

/**
 * Interface représentant un projet avec ses détails.
 * - `id`: Identifiant unique du projet.
 * - `title`: Titre du projet.
 * - `description`: Description détaillée du projet.
 * - `techIds`: Liste des identifiants des technologies utilisées dans le projet.
 * - `slug`: Slug pour l'URL du projet.
 * - `image`: Image principale du projet (optionnelle).
 * - `images`: Liste d'images supplémentaires du projet (optionnelle).
 * - `date`: Date de réalisation du projet au format "YYYY-MM".
 * - `repos`: Liste des liens vers les dépôts GitHub associés au projet (optionnelle).
 * - `demo`: Lien vers une démonstration du projet (optionnelle).
 * - `type`: Type de projet, soit "personal" pour un projet personnel, soit "team" pour un projet en équipe.
 * - `team`: Liste des membres de l'équipe impliqués dans le projet (optionnelle, uniquement pour les projets en équipe).
 */
export interface Project {
    id: string;
    title: string;
    description: string;
    details: ProjectDetails[];
    techIds: string[];
    slug: string;
    image?: string;
    images?: string[];
    date: string;
    repos?: string[];
    demo?: string;
    type: "personal" | "team";
    team?: string[];
}

interface ProjectDetails {
    id: string;
    title: string;
    items: string[];
}

/**
 * Liste de projets personnels et d'équipe avec leurs détails. Chaque projet est défini avec les propriétés de l'interface `Project`.
 * Les projets incluent des descriptions détaillées, les technologies utilisées, les liens vers les dépôts GitHub et les démonstrations, ainsi que les images associées.
 *
 */
const myProjects: Project[] = [
    {
        id: "bookexchange",
        title: "Bookexchange",
        description:
            `
                Plateforme communautaire de partage de livres développée en binôme avec Spring Boot (backend) et React + TypeScript (frontend).
                Fonctionnalités clés : gestion de collections de livres, propositions d’échanges, messagerie instantanée avec notifications temps réel.
            `,
        details: [
            {
                id: "overview",
                title: "Présentation",
                items: [
                    "Plateforme communautaire permettant l’échange, la vente et le don de livres entre utilisateurs.",
                    "Application pensée comme un espace centralisé favorisant les interactions entre lecteurs et le suivi des échanges."
                ]
            },

            {
                id: "backend",
                title: "Architecture Backend",
                items: [
                    "Développement d’une API REST avec Spring Boot.",
                    "Mise en place d’une architecture modulaire avec séparation des responsabilités.",
                    "Gestion de l’authentification et de la sécurité avec Spring Security.",
                    "Persistance des données avec JPA/Hibernate.",
                    "Implémentation des échanges temps réel avec WebSockets et STOMP."
                ]
            },

            {
                id: "frontend",
                title: "Architecture Frontend",
                items: [
                    "Développement d’une SPA React avec TypeScript.",
                    "Gestion des états globaux et des appels API avec Redux Toolkit et RTK Query.",
                    "Optimisation des performances frontend avec code splitting.",
                    "Utilisation de Chakra UI pour construire une interface accessible et réactive."
                ]
            },

            {
                id: "features",
                title: "Fonctionnalités principales",
                items: [
                    "Gestion de collections de livres et listes de souhaits.",
                    "Propositions et validation d’échanges entre utilisateurs.",
                    "Messagerie instantanée avec notifications temps réel.",
                    "Recherche de livres et gestion des profils utilisateurs.",
                    "Système de notation et suivi des échanges."
                ]
            },

            {
                id: "technical",
                title: "Défis techniques",
                items: [
                    "Gestion des communications temps réel avec WebSockets.",
                    "Synchronisation des états frontend avec les données backend.",
                    "Structuration d’une architecture scalable et maintenable.",
                    "Gestion sécurisée de l’authentification et des accès utilisateurs."
                ]
            },
            {
                id: "status",
                title: "État actuel du projet",
                items: [
                    `
                        Ce projet a été développé dans un cadre académique avec une date butoir stricte avant 
                        les examens. Toutes les fonctionnalités principales (inscription, connexion, changement de mot de passe, CRUD sur les livres, 
                        notifications, recherche dynamique, messagérie, gestion de profil, authentification) ont été implémentées. En revanche, certaines fonctionnalités 
                        (échange, validation échange, notation échange, liste de souhaits, auth google) n’ont pas pu être finalisées faute de temps. 
                        J’ai cependant documenté les points restants et je pourrai les compléter ultérieurement, individuellement de mon côté.
                    `
                ]
            }
        ],
        techIds: [
            "spring-boot",
            "react",
            "typescript",
            "rtk-query",
            "hibernate",
            "gradle",
            "git",
            "zod",
            "react-hook-form",
            "chakra-ui"
        ],
        slug: "bookexchange",
        date: "2025-12",
        repos: [
            "https://github.com/simplicekolomou/bookexchange-front",
            "https://github.com/simplicekolomou/bookexchange-api"
        ],
        demo: "https://www.loom.com/share/pert-demo",
        type: "team",
        team: ["Mathieu", "Théo"],
        image: "/images/bookexchange/bookexchange-presentation.png",
        images: [
            "/images/bookexchange/bookexchange-dynamic-search.png",
            "/images/bookexchange/bookexchange-login.png",
            "/images/bookexchange/bookexchange-messaging.png",
            "/images/bookexchange/bookexchange-mycollection.png",
            "/images/bookexchange/bookexchange-registration.png",
            "/images/bookexchange/bookexchange-presentation.png"
        ]
    },
    {
        id: "meet-me-at",
        title: "Meet Me At",
        description:
            "Application multi-plateforme de gestion de réservations : CLI admin (Java) et GUI client (C# Avalonia UI). Architecture hexagonale pour séparation métier/infrastructure. Persistance MySQL (JDBC, ADO.NET).",
        details: [
            {
                id: "overview",
                title: "Présentation",
                items: [
                    "Deux applications distinctes partageant la même base de données :",
                    "  • Application Java (CLI) pour l’administration des salles (gérant).",
                    "  • Application C# (WPF / interface graphique) pour les membres HELMo.",
                    "Projet évolutif : fichiers iCal (it1 & it2) → base de données MySQL (it3, it4, it5).",
                    "Respect des architectures hexagonale (Java) et MVVM (C#).",
                    "Ensemble des fonctionnalités : consultation en grille, réservation avec services, recherche par score, export/import ICS, vue temps réel d’une salle."
                ]
            },
            {
                id: "architecture",
                title: "Architecture logicielle",
                items: [
                    "Java : découpage modulaire en 5 projets (Domains, Presentations, Views, Infrastructures, App) – architecture hexagonale.",
                    "C# : solution en 5 projets (App, Views, Presentations, Domains, Infrastructures) – pattern MVVM (facultatif mais implémenté).",
                    "Abstraction des repositories (interfaces dans Domains, implémentations dans Infrastructures) pour isoler la persistance.",
                    "Migration transparente iCal → MySQL → import/export ICS grâce à l’inversion de dépendances (Java et C#).",
                    "Utilisation de transactions JDBC (Java) et System.Data (C#) pour garantir l’atomicité des imports.",
                    "Sérialisation/désérialisation iCal avec iCal4j (Java) et Ical.Net (C#), isolée dans Infrastructures.",
                    "Modèle MVVM en C# : liaisons de données, commandes, validation en temps réel (ex. matricule)."
                ]
            },
            {
                id: "features",
                title: "Fonctionnalités principales",
                items: [
                    "**Application Java (gérant)** :",
                    "  • Consultation des disponibilités sous forme de grille (créneaux 30 min, 8h-16h30).",
                    "  • Création de réservations avec validation métier (capacité, conflits, futur, existence responsable).",
                    "  • Association de services (café, nourriture, projecteur, son) aux réservations.",
                    "  • Recherche intelligente de salles (date, personnes, durée) avec scoring multi‑critères et top 5 propositions.",
                    "  • Consultation détaillée d’une réservation.",
                    "  • Exportation des occupations d’une salle vers un fichier ICS (période définie, vérifications).",
                    "  • Importation d’occupations pour une salle depuis ICS (validation salles/services/conflits, atomicité).",
                    "**Application C# (membres)** :",
                    "  • Affichage en temps réel de l’occupation actuelle d’une salle (rouge/vert, prochaine occupation, rafraîchissement périodique).",
                    "  • Consultation des occupations d’une salle pour une journée donnée (grille couleur, saisie de date).",
                    "  • Création d’une demande de réservation (matricule, date, créneau, nb personnes, description, services).",
                    "  • Validation identique au métier Java (cohérence base de données commune).",
                    "**Fonctionnalités transverses** :",
                    "  • Exportation des occupations d’un membre (depuis l’interface C#) vers un fichier ICS.",
                    "  • Importation d’occupations pour un membre depuis ICS (filtrage par organisateur, validation conflits/ressources, atomicité)."
                ]
            },
            {
                id: "technical",
                title: "Défis techniques",
                items: [
                    "Algorithme de scoring multi‑critères (date, durée, capacité) pour la recherche des meilleures salles (Java).",
                    "Gestion des transactions JDBC pour les imports ICS (rollback en cas d’échec, pas de DELETE manuels).",
                    "Implémentation d’un parser/générateur ICS (iCal4j / Ical.Net) supportant le champ RESOURCES pour les services.",
                    "Validation asynchrone du matricule dans l’interface C# (perte de focus, activation/désactivation des boutons).",
                    "Respect des spécifications RFC 5545 pour les fichiers ICS (validation via icalendar.org).",
                    "Synchronisation des deux applications via une base MySQL commune (les réservations créées par l’une sont immédiatement visibles par l’autre).",
                    "Mise en place du MVVM en C# : implémentation de INotifyPropertyChanged, commandes RelayCommand, validation par DataAnnotations.",
                    "Gestion des erreurs et journalisation (Log4j2 pour Java, Serilog pour C#) : arguments invalides, erreurs base de données, conflits d’import."
                ]
            },
            {
                id: "results",
                title: "Résultats et impact",
                items: [
                    "Développement de deux applications fonctionnelles (CLI Java pour l’administration, GUI C# pour les membres) partageant une base de données MySQL commune.",
                    "Implémentation complète des fonctionnalités spécifiées, y compris la gestion des réservations, la recherche intelligente de salles, et l’import/export ICS avec validation rigoureuse.",
                    "Adoption d’architectures logicielles robustes (hexagonale pour Java, MVVM pour C#) assurant une séparation claire des responsabilités et facilitant la maintenance du code.",
                    "Expérience enrichissante dans la conception d’une application multi-plateforme avec des technologies différentes, tout en assurant une cohérence métier et une synchronisation des données entre les deux applications."
                ]
            },
            {
                id: "status",
                title: "État actuel du projet",
                items: [
                    `
                        Projet développé dans un cadre académique avec une date butoir stricte avant les examens. 
                        Toutes les fonctionnalités principales ont été implémentées et testées. 
                        Les deux applications sont fonctionnelles et synchronisées via la base de données MySQL commune.
                    `
                ]
            }
        ],
        techIds: [
            "java",
            "csharp",
            "avalonia",
            "mysql",
            "jdbc",
            "gradle",
            "git"
        ],
        slug: "meet-me-at",
        date: "2024-12",
        repos: [
            "https://github.com/simplicekolomou/mma-client",
            "https://github.com/simplicekolomou/mma.admin"
        ],
        demo: "#",
        type: "personal",
        image: "/images/mma/mma-presentation.png",
        images: [
            "/images/mma/mma-admin-consultation.png",
            "/images/mma/mma-admin-consultation-reservation.png",
            "/images/mma/mma-admin-encodage.png",
            "/images/mma/mma-admin-rechercher.png",
            "/images/mma/mma-admin-acceuil.png",
            "/images/mma/mma-client-consultation.png",
            "/images/mma/mma-presentation.png",
            "/images/mma/mma-client-acceuil.png",
            "/images/mma/mma-client-encodage.png"
        ]
    },
    {
        id: "gestion-repas",
        title: "GestionRepas",
        description:
            "Application Android native de gestion de listes de courses. Développement MVVM : planification de repas, listes de courses, partage caméra. Intégration Room (persistance locale) et tests unitaires ViewModel. Méthodologie agile (User Stories).",
        details: [
            {
                id: "overview",
                title: "Présentation",
                items: [
                    "Application Android native de gestion de listes de courses, développée dans un cadre académique. " +
                    "L’application permet aux utilisateurs de planifier leurs repas, de créer des listes de courses associées et de partager ces listes via la caméra pour faciliter les échanges entre utilisateurs.",
                    "Le projet a été réalisé en suivant une méthodologie agile, avec la rédaction de User Stories pour définir les fonctionnalités à implémenter et assurer une progression structurée du développement."
                ]
            },
            {
                id: "gest-repas-architecture",
                title: "Architecture et technologies",
                items: [
                    "Application Android native développée en Kotlin, utilisant le pattern MVVM pour une séparation claire des responsabilités entre la logique métier, la gestion de l'interface utilisateur et la persistance des données.",
                    "Fonctionnalités clés : Planification de repas avec création de listes de courses associées, partage de listes via la caméra pour faciliter les échanges entre utilisateurs.",
                    "Intégration de Room pour la persistance locale des données, assurant une gestion efficace des listes de courses et des repas planifiés.",
                    "Mise en place de tests unitaires pour les ViewModels afin d'assurer la fiabilité et la maintenabilité du code."
                ]
            },
            {
                id: "gest-repas-defis",
                title: "Défis techniques",
                items: [
                    "Conception d'une interface utilisateur intuitive et responsive pour une expérience utilisateur fluide sur les appareils Android.",
                    "Gestion de la complexité liée à la synchronisation des données entre les différentes fonctionnalités de l'application, notamment la planification des repas et la gestion des listes de courses.",
                    "Mise en place d'un système de partage efficace via la caméra, nécessitant une intégration avec les fonctionnalités de l'appareil pour capturer et partager les listes de courses."
                ]
            },
            {
                id: "gest-repas-resultats",
                title: "Résultats et impact",
                items: [
                    "Développement d'une application fonctionnelle permettant aux utilisateurs de planifier leurs repas et de gérer leurs listes de courses de manière efficace.",
                    "Amélioration de mes compétences en développement Android natif avec Kotlin, ainsi que dans l'utilisation du pattern MVVM et de Room pour la persistance des données.",
                    "Expérience enrichissante dans la conception d'une application mobile complète, couvrant à la fois le développement frontend et backend, ainsi que la mise en place de tests unitaires pour assurer la qualité du code."
                ]
            },
            {
                id: "gest-repas-status",
                title: "État actuel du projet",
                items: [
                    `
                       Projet terminé mais non déployé sur le Play Store. L’application est fonctionnelle et peut être installée via le fichier APK disponible dans le dépôt GitHub.
                    `
                ]
            }
        ],
        techIds: [
            "kotlin",
            "android",
            "room",
            "git"
        ],
        slug: "gestion-repas",
        date: "2025-06",
        repos: ["https://github.com/simplicekolomou/gestion-repas"],
        demo: "#",
        type: "personal",
        image: "/images/gestRepas/gestion-repas-presentation.png",
        images: [
            "/images/gestRepas/gestion-repas-presentation.png",
            "/images/gestRepas/gestion-repas-course.jpg",
            "/images/gestRepas/gestion-repas-details.jpg",
            "/images/gestRepas/gestion-repas-home.jpg",
            "/images/gestRepas/gestion-repas-list.jpg",
            "/images/gestRepas/gestion-repas-number.jpg"
        ]
    },
    {
        id: "puroguramu",
        title: "Puroguramu",
        description:
            "Plateforme E-learning full-stack : interface étudiant/enseignant, CRUD leçons/exercices, publication/masquage de leçon. Authentification par rôles, suivi de progression, validation serveur. Réalisé avec ASP.NET Core, Entity Framework, SQL Server, Razor Pages.",
        details: [
            {
                id: "overview",
                title: "Présentation",
                items: [
                    "Plateforme e‑learning développée dans un cadre académique, visant à créer un espace d’apprentissage en ligne du langage de programmation C#.",
                    "Cette plateforme permet aux enseignants de créer et gérer des leçons et des exercices, tandis que les étudiants peuvent s’inscrire, se connecter, consulter les leçons, réaliser les exercices et suivre leur progression.",
                    "L’application est conçue pour être sécurisée, maintenable et évolutive, avec une attention particulière portée à la séparation des responsabilités et aux bonnes pratiques de développement web."
                ]
            },
            {
                id: "puroguramu-architecture",
                title: "Architecture logicielle",
                items: [
                    "Application web full‑stack développée avec ASP.NET Core (Razor Pages) et déployée sur l’infrastructure de l’école.",
                    "Base de données SQL Server (serveur de l’école) avec Entity Framework 6 (approche Code First, migrations).",
                    "Séparation des responsabilités : modèles de page (Razor Pages) indépendants d’EF, logique métier isolée dans des services, utilisation de vues partielles et d’un layout principal (_Layout).",
                    "Authentification via Identity avec gestion des rôles (étudiant / enseignant) et support de la connexion par email.",
                    "Sécurité renforcée : validation côté serveur (DataAnnotations, ModelState), protection contre l’overposting (bind sur modèles d’entrée), anti‑CSRF (token automatique) et anti‑XSS (encodage Razor)."
                ]
            },
            {
                id: "puroguramu-defis",
                title: "Défis techniques",
                items: [
                    "Mise en place d’une architecture respectant les patrons Razor Pages et Repository (avec injection de dépendances) pour découpler la couche d’accès aux données du domaine.",
                    "Implémentation d’un système d’autorisation basé sur les rôles : pages du tableau de bord enseignant protégées ([Authorize(Roles = \"Teacher\")]), pages étudiantes accessibles uniquement aux utilisateurs authentifiés.",
                    "Gestion des migrations Entity Framework pour créer et mettre à jour le schéma de la base de données (plusieurs migrations, utilisation de `HasData` pour les données de départ).",
                    "Développement de fonctionnalités métier complètes :",
                    "  • Création et édition de leçons (validation des intitulés, publication/masquage).",
                    "  • Création et édition d’exercices (validation des données, persistance).",
                    "  • Tableau de bord étudiant (affichage des leçons, nombre d’exercices terminés, lien vers l’exercice suivant).",
                    "  • Consultation d’une leçon (affichage du titre, description, liste des exercices avec état d’avancement).",
                    "  • Modification du profil utilisateur avec téléchargement d’image (validation du numéro magique non implémentée)."
                ]
            },
            {
                id: "puroguramu-resultats",
                title: "Résultats et impact",
                items: [
                    "Plateforme e‑learning fonctionnelle répondant aux user stories majeures : inscription, authentification, tableau de bord enseignant (création/édition de leçons et exercices), et une partie des fonctionnalités étudiantes (authentification par email, affichage partiel des progressions).",
                    "Application déployée sur l'infrastructure de l'école non accessible de l'extérieure. Je prévois le déployer sur une autre plateforme pour une accessibilité plus large.",
                    "Acquisition de compétences solides en développement web avec ASP.NET Core, Entity Framework, Razor Pages, Identity et bonnes pratiques de sécurité (validation, HTTPS, anti‑XSS/CSRF).",
                    "Expérience concrète de gestion de projet : travail en binôme, présentation orale structurée (scénarios de création de leçon et réalisation d’exercice), auto‑évaluation et évaluation par les pairs."
                ]
            },
            {
                id: "puroguramu-status",
                title: "État actuel du projet",
                items: [
                    `
                        Projet développé dans un cadre académique avec une date butoir stricte avant 
                        les examens. Toutes les fonctionnalités principales (inscription, connexion, CRUD sur 
                        les leçons, exercices, publication/masquage) ont été implémentées. En revanche, 
                        certaines fonctionnalités secondaires (affichage complet de la progression, validation du numéro magique) n’ont pas pu être finalisées faute de temps.
                    `
                ]
            }
        ],
        techIds: [
            "aspnet",
            "entity-framework",
            "sql-server",
            "razor-pages",
            "git"
        ],
        slug: "puroguramu",
        date: "2024-08",
        repos: ["https://github.com/simplicekolomou/puroguramu"],
        demo: "https://www.loom.com/share/pert-demo",
        type: "team",
        team: ["Eléonore"],
        image: "/images/puroguramu/puroguramu-presentation.png",
        images: [
            "/images/puroguramu/puroguramu-registration.png",
            "/images/puroguramu/puroguramu-student-dashboard.png",
            "/images/puroguramu/puroguramu-student-exercise.png",
            "/images/puroguramu/puroguramu-student-result.png",
            "/images/puroguramu/puroguramu-student-show-solution.png",
            "/images/puroguramu/puroguramu-teacher-dashboard.png",
            "/images/puroguramu/puroguramu-presentation.png"
        ]
    },
    {
        id: "my-portfolio",
        title: "Mon Portfolio",
        description:
            "Site portfolio personnel développé avec Next.js, TypeScript et Tailwind CSS. Présentation de mes projets, compétences et expériences. Design responsive avec animations subtiles pour une expérience utilisateur fluide.",
        details: [
            {
                id: "overview",
                title: "Présentation",
                items: [
                    "Application web personnelle développée pour présenter mes projets, compétences et expériences de manière professionnelle et attrayante.",
                ]
            },
            {
                id: "portfolio-architecture",
                title: "Architecture logicielle",
                items: [
                    "Développement d'un site portfolio personnel en utilisant Next.js pour le framework React, TypeScript pour la sécurité de type, Shadcn pour le design et Tailwind CSS pour le css.",
                    "Une architecture très simple avec un projet Next.js static export sans backend",
                    "Structure clair séparant les données (projets, compétences, expériences) des composants de présentation, facilitant la maintenance et l'évolution du site.",
                    "Design responsive pour garantir une expérience utilisateur optimale sur tous les appareils, avec des animations subtiles pour améliorer l'interactivité."
                ]
            },
            {
                id: "portfolio-defis",
                title: "Défis techniques",
                items: [
                    "Conception d'une interface utilisateur attrayante et facile à naviguer pour présenter efficacement mes projets et compétences.",
                    "Mise en place d'un design responsive pour assurer une expérience utilisateur fluide sur différents appareils et tailles d'écran.",
                    "Intégration d'animations subtiles pour améliorer l'interactivité sans compromettre la performance du site."
                ]
            },
            {
                id: "portfolio-resultats",
                title: "Résultats et impact",
                items: [
                    "Développement d'un site portfolio fonctionnel et esthétiquement plaisant pour présenter mes projets et compétences de manière professionnelle.",
                    "Amélioration de mes compétences en développement frontend avec Next.js, TypeScript, Shadcn et Tailwind CSS.",
                    "Amélioration de mes capacités d'organisation d'un projet Next.js, en structurant les données de manière efficace et en créant des composants réutilisables pour une maintenance facilitée.",
                    "Capacité de deployement d'une application web statique GitHub Pages, en configurant correctement le projet Next.js pour une exportation statique et en gérant les aspects liés au déploiement sur GitHub Pages.",
                    "Expérience enrichissante dans la conception d'une application web complète, couvrant à la fois le développement frontend et la mise en place d'un design responsive avec des animations pour une meilleure expérience utilisateur."
                ]
            },
            {
                id: "portfolio-status",
                title: "État actuel du projet",
                items: [
                    `Projet terminé et déployé en ligne. Le site est accessible à 
                    l'adresse https://simplicekolomou.github.io/ et le code source est disponible sur GitHub. 
                    Je continue à maintenir le site à jour avec mes nouveaux projets et expériences.`
                ]
            }
        ],
        techIds: [
            "react",
            "nextjs",
            "typescript",
            "tailwind",
            "git"
        ],
        slug: "my-portfolio",
        date: "2026-05",
        repos: ["https://github.com/simplicekolomou/simplicekolomou.github.io"],
        demo: "https://simplicekolomou.github.io/",
        type: "personal",
        image: "/images/portfolio/portfolio-presentation.png",
        images: [
            "/images/portfolio/portfolio-experiences.png",
            "/images/portfolio/portfolio-project-details.png",
            "/images/portfolio/portfolio-projects.png",
            "/images/portfolio/portfolio-skills.png",
            "/images/portfolio/portfolio-presentation.png"
        ]
    },
    {
        id: "ticketing",
        title: "Système de gestion de tickets",
        description:
            "Application de gestion de tickets pour support client. Backend Java Spring Boot avec API REST, frontend React(NextJs) + TypeScript. Fonctionnalités : création/attribution de tickets, suivi de statut, notifications par email.",
        details: [
            {
                id: "overview",
                title: "Présentation",
                items: [
                    "Application de gestion de tickets développée en binôme, visant à créer un système efficace pour le support client.",
                    "Backend développé avec Java Spring Boot exposant une API REST, et frontend développé en React (Next.js) avec TypeScript.",
                    "Fonctionnalités clés : création et attribution de tickets, suivi du statut des tickets, système de notifications par email pour informer les utilisateurs des mises à jour sur leurs tickets."
                ]
            },
            {
                id: "ticketing-backend",
                title: "Architecture Backend",
                items: [
                    "Développement d'une API REST avec Java Spring Boot pour gérer les opérations liées aux tickets de support client.",
                    "Conception d'une architecture modulaire avec séparation des responsabilités entre les différentes couches de l'application (contrôleurs, services, repositories).",
                    "Utilisation de JPA/Hibernate pour la persistance des données dans une base de données relationnelle, assurant une gestion efficace des tickets et des utilisateurs.",
                    "Mise en place de la sécurité avec Spring Security pour protéger les endpoints de l'API et gérer les rôles et permissions des utilisateurs."
                    ]
            },
            {
                id: "ticketing-frontend",
                title: "Architecture Frontend",
                items: [
                    "Développement d'une interface utilisateur intuitive avec React (Next.js) et TypeScript pour permettre aux utilisateurs de créer, suivre et gérer leurs tickets de support client facilement.",
                    "Utilisation de RTK Query pour gérer les appels à l'API REST et synchroniser les données entre le frontend et le backend de manière efficace.",
                    "Design avec Shadcn pour garantir une expérience utilisateur optimale sur tous les appareils, avec une attention particulière à l'accessibilité et à la facilité d'utilisation."
                ]
            },
            {
                id: "ticketing-defis",
                title: "Défis techniques",
                items: [
                    "Conception d'une API REST efficace pour gérer les opérations liées aux tickets, tout en assurant la sécurité et la performance de l'application.",
                    "Développement d'une interface utilisateur intuitive pour permettre aux utilisateurs de créer, suivre et gérer leurs tickets facilement.",
                    "Fishing pour la récupération des mails externes (Gmail) pour alimenter le inbox de l'application, nécessitant une intégration avec les API de messagerie et la gestion des autorisations d'accès aux comptes de messagerie.",
                    "Mise en place d'un système de notifications par email fiable pour garantir que les utilisateurs soient informés des mises à jour sur leurs tickets en temps réel."
                ]
            },
            {
                id: "ticketing-resultats",
                title: "Résultats et impact",
                items: [
                    "Le résultat attendu de ce projet est : ",
                    " - Développement d'une application de gestion de tickets fonctionnelle, permettant aux utilisateurs de créer et suivre leurs tickets de support client efficacement.",
                    " - Amélioration de mes compétences en développement full-stack, en particulier dans la conception d'API REST avec Spring Boot et le développement frontend avec React et Next.js.",
                    " - Expérience enrichissante dans la conception d'une application complète, couvrant à la fois le développement backend et frontend, ainsi que l'intégration de fonctionnalités complexes telles que les notifications par email."
                ]
            },
            {
                id: "ticketing-status",
                title: "État actuel du projet",
                items: [
                    `Développement actif en binôme, actuellement en phase frontend. Pas de délai imposé, 
                    nous avançons selon nos disponibilités.`
                ]
            }
        ],
        techIds: [
            "spring-boot",
            "react",
            "typescript",
            "rtk-query",
            "hibernate",
            "nextjs",
            "postgresql",
            "zod",
            "react-hook-form",
            "git"
        ],
        slug: "ticketing",
        date: "2026-03",
        repos: ["https://github.com/simplicekolomou/syasko-tickecting-front","https://github.com/simplicekolomou/syasko-tickecting-api"],
        demo: "https://syasko-tickecting-front-ea82sqbbk-simplice-kolomous-projects.vercel.app/",
        type: "team",
        team: ["Aboubacar Sylla"],
        image: "/images/ticketing/ticketing-presentation.png",
        images: [
            "/images/ticketing/ticketing-create-ticket.png",
            "/images/ticketing/ticketing-customer.png",
            "/images/ticketing/ticketing-inbox.png",
            "/images/ticketing/ticketing-notifications.png",
            "/images/ticketing/ticketing-support.png",
            "/images/ticketing/ticketing-team.png",
            "/images/ticketing/ticketing-presentation.png"
        ]
    }
];

/**
 * Exportation de la liste de projets triée par date de réalisation, du plus récent au plus ancien. La méthode `sort` est utilisée
 * pour comparer les dates des projets.
 * Les projets sont triés en utilisant la méthode `localeCompare` sur les chaînes de caractères représentant les dates,
 * ce qui permet de les classer correctement même si elles sont au format "YYYY-MM".
 */
export const projects = [...myProjects].sort((a, b) => b.date.localeCompare(a.date));