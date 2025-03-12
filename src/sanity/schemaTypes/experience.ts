import { defineField, defineType } from "sanity";

export const experienceSchema = defineType({
  name: "experience",
  title: "experience",
  type: "document",
  fields: [
    defineField({
      name: "company",
      title: "Company",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "string",
    }),
    defineField({
      name: "position",
      title: "Position",
      type: "string",
    }),
    defineField({
      name: "logos",
      title: "Logos",
      type: "array",
      of: [{ type: "image" }],
    }),
    defineField({
      name: "org",
      title: "org",
      type: "string",
    }),
  ],
});
