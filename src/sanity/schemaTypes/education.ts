import { defineField, defineType } from "sanity";

export const educationSchema = defineType({
    name: 'education',
    title: 'education',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'string',
        }),
        defineField({
            name: 'date',
            title: 'Date',
            type: 'string',
        }),
        defineField({
            name: 'org',
            title: 'org',
            type: 'string',
        }),
    ],
});