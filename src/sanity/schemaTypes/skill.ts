import { defineField, defineType } from "sanity";

export const skillsSchema = defineType({
    name: 'skills',
    title: 'skills',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'skill Title',
            type: 'string',
        }),
       defineField({
        name: 'icon',
        title: 'Icon',
        type: 'array',
        of: [{ type: 'image' }],
    })
    ]
});