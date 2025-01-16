/// <reference path="../.astro/types.d.ts" />

type Job = {
    title: string;
    description: string;
};

type Skill = {
    name: string;
    iconUrl: string;
};

type Project = {
    title: string;
    description: string;
    usedSkills: Skill[];
    urlImg: string;
};