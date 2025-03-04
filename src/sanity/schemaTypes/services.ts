import { defineField, defineType } from "sanity";

export const servicesSchema = defineType({
    name: 'services',
    title: 'Services',
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
            title: 'Icon',
            type: 'array',
            of: [{ type: 'image' }],
        }),
        defineField({
            name: 'serviceType',
            title: 'Service Type',
            type: 'string',
            options: {
                list: [
                    { value: "responsive_design", title: "Responsive Web Design" },
                    { value: "seo", title: "SEO" },
                    { value: "performance_optimization", title: "Performance Optimization" },
                    { value: "cross_browser_compatibility", title: "Browser Compatibility" }
                ],
                layout: 'radio' // يمكنك تغييره إلى 'dropdown' إذا كنت تفضل القائمة المنسدلة
            }
        })
    ],
});