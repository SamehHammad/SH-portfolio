import { defineField, defineType } from "sanity";

export const aboutSchema = defineType({
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'title',
            title: 'About Title',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'About Description',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'About Image',
            type: 'array',
            of: [{ type: 'image' }],
        }),
        defineField({
            name: 'logos',
            title: 'Logos',
            type: 'array',
            of: [{ type: 'image' }],
        }),
    ],
});