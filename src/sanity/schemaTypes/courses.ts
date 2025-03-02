import { defineField, defineType } from "sanity";

export const courseSchema = defineType({
    name: 'courses',
    title: 'courses',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
        }),
        defineField({
            name: 'url',
            title: 'URL',
            type: 'url',
        }),
    ],
});