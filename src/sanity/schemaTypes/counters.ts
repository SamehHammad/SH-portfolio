import { defineField, defineType } from "sanity";

export const countersSchema = defineType({
    name: 'counters',
    title: 'counters',
    type: 'document',
    fields: [
        defineField({
            name: 'counter',
            title: 'Counter Name',
            type: 'string',
        }),
        defineField({
            name: 'value',
            title: 'Value',
            type: 'number',
        }),
    ],
});