import { defineField, defineType } from "sanity";

export const servicesSchema = defineType({
    name: 'services',
    title: 'services',
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
            name: 'icon',
            title: 'icon',
            type: 'array',
            of: [{ type: 'image' }],
        }),
       
    ],
});