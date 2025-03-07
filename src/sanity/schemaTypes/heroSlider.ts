import { defineField, defineType } from "sanity";

export const heroSliderSchema = defineType({
  name: "heroSlider",
  title: "Hero Slider",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Project Images",
      type: "array",
      of: [{ type: "image" }],
    }),
  ],
});
