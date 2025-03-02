import { defineField, defineType } from "sanity";

export const testimonialsSchema = defineType({
    name: 'testimonials',
    title: 'testimonials',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'position',
            title: 'Position',
            type: 'string',
        }),

        defineField({
            name: 'comment',
            title: 'Comment',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'image',
            type: 'array',
            of: [{ type: 'image' }],
        }),
    ],
});