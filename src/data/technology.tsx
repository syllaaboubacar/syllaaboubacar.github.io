/**
 * Ce fichier définit les technologies utilisées dans le portfolio, organisées par section.
 * Chaque technologie a un nom, une section d'appartenance et une icône associée.
 */
import React, { ReactNode } from "react";
import {
    CSharp, GitIcon, Gradle, Hibernate, Java, Redux, Spring,
    TypescriptIconRound, Zod, _React, Mysql, Kotlin, Android,
    Dotnet, Postgresql, Nextjs,
    Php, Laravel, Maven,
    Tailwind,
} from "@dev.icons/react";
import { Section } from "./section";

/**
 * Interface représentant une technologie avec son nom, sa section d'appartenance et son icône.
 * - `id`: Un identifiant unique pour la technologie (utilisé pour les clés React).
 * - `name`: Le nom de la technologie.
 * - `section`: La section à laquelle la technologie appartient (STACK_PRINCIPALE, ECOSYSTEME_COMPLEMENTAIRE, OUTILS_DEVOPS).
 * - `icon`: L'icône associée à la technologie (peut être null si aucune icône n'est disponible).
 */
export interface Technology {
    id: string;
    name: string;
    section: Section;
    icon: ReactNode;
}

/**
 * Tableau des technologies utilisées dans le portfolio, organisé par section.
 * Chaque objet représente une technologie avec son nom, sa section d'appartenance et son icône.
 * Les sections sont définies dans l'enum `Section` et permettent de regrouper les technologies
 * en fonction de leur rôle dans le développement (stack principale, écosystème complémentaire, outils & devops).
 * L'icône est un composant React qui peut être rendu dans l'interface utilisateur pour représenter visuellement la technologie.
 * Note: Certaines technologies n'ont pas d'icône disponible et sont donc définies avec `icon: null`.
 */
export const technologies: Technology[] = [

    // =========================
    // STACK PRINCIPALE
    // =========================
    { id: "java", name: "Java", section: Section["STACK_PRINCIPALE"], icon: <Java size={15} /> },
    { id: "spring-boot", name: "Spring Boot", section: Section["STACK_PRINCIPALE"], icon: <Spring size={15} /> },
    { id: "csharp", name: "C#", section: Section["STACK_PRINCIPALE"], icon: <CSharp size={15} /> },
    { id: "aspnet", name: "ASP.NET Core", section: Section["STACK_PRINCIPALE"], icon: <Dotnet size={15} /> },
    { id: "react", name: "React", section: Section["STACK_PRINCIPALE"], icon: <_React size={15} /> },
    { id: "typescript", name: "TypeScript", section: Section["STACK_PRINCIPALE"], icon: <TypescriptIconRound size={15} /> },
    { id: "nextjs", name: "Next.js", section: Section["STACK_PRINCIPALE"], icon: <Nextjs size={15} /> },
    { id: "postgresql", name: "PostgreSQL", section: Section["STACK_PRINCIPALE"], icon: <Postgresql size={15} /> },

    // =========================
    // ÉCOSYSTÈME COMPLÉMENTAIRE
    // =========================
    { id: "laravel", name: "Laravel", section: Section["ECOSYSTEME_COMPLEMENTAIRE"], icon: <Laravel size={15} /> },
    { id: "php", name: "PHP", section: Section["ECOSYSTEME_COMPLEMENTAIRE"], icon: <Php size={15} /> },
    { id: "hibernate", name: "Hibernate", section: Section["ECOSYSTEME_COMPLEMENTAIRE"], icon: <Hibernate size={15} /> },
    { id: "entity-framework", name: "Entity Framework", section: Section["ECOSYSTEME_COMPLEMENTAIRE"], icon: null },
    { id: "kotlin", name: "Kotlin", section: Section["ECOSYSTEME_COMPLEMENTAIRE"], icon: <Kotlin size={15} /> },
    { id: "mysql", name: "MySQL", section: Section["ECOSYSTEME_COMPLEMENTAIRE"], icon: <Mysql size={15} /> },
    { id: "sql-server", name: "SQL Server", section: Section["ECOSYSTEME_COMPLEMENTAIRE"], icon: null },
    { id: "zod", name: "Zod", section: Section["ECOSYSTEME_COMPLEMENTAIRE"], icon: <Zod size={15} /> },
    { id: "rtk-query", name: "RTK Query", section: Section["ECOSYSTEME_COMPLEMENTAIRE"], icon: <Redux size={15} /> },
    { id: "react-hook-form", name: "React Hook Form", section: Section["ECOSYSTEME_COMPLEMENTAIRE"], icon: null },
    { id: "razor-pages", name: "Razor Pages", section: Section["ECOSYSTEME_COMPLEMENTAIRE"], icon: null },
    { id: "avalonia", name: "Avalonia UI", section: Section["ECOSYSTEME_COMPLEMENTAIRE"], icon: <CSharp size={15} /> },
    { id: "android", name: "Android", section: Section["ECOSYSTEME_COMPLEMENTAIRE"], icon: <Android size={15} /> },
    {id: "shadcn-ui", name: "shadcn/ui", section: Section["ECOSYSTEME_COMPLEMENTAIRE"], icon: null},
    {id: "chakra-ui", name: "Chakra UI", section: Section["ECOSYSTEME_COMPLEMENTAIRE"], icon: null },
    {id: "tailwind", name: "Tailwind CSS", section: Section["ECOSYSTEME_COMPLEMENTAIRE"], icon: <Tailwind size={15} />},

    // =========================
    // OUTILS & DEVOPS
    // =========================
    { id: "git", name: "Git", section: Section["OUTILS_DEVOPS"], icon: <GitIcon size={15} /> },
    { id: "gradle", name: "Gradle", section: Section["OUTILS_DEVOPS"], icon: <Gradle size={15} /> },
    { id: "maven", name: "Maven", section: Section["OUTILS_DEVOPS"], icon: <Maven size={15} /> },
    { id: "junit", name: "JUnit", section: Section["OUTILS_DEVOPS"], icon: <Java size={15} /> },
];