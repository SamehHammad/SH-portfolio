import { defineField, defineType } from "sanity";

export const projectSchema = defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Project Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'description',
            title: 'Project Description',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Project Images',
            type: 'array',
            of: [{ type: 'image' }],
        }),
        defineField({
            name: 'demo_url',
            title: 'Demo URL',
            type: 'url',
        }),
        defineField({
            name: 'code_url',
            title: 'Code URL',
            type: 'url',
        }),
        defineField({
            name: 'skills_tags',
            title: 'Skills Tags',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'video_url',
            title: 'Video URL',
            type: 'url',
        }),
        defineField({
            name: 'organization',
            title: 'organization',
            type: 'string',
        }),
    ]
});