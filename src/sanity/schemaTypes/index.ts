import { type SchemaTypeDefinition } from 'sanity'
import { aboutSchema } from './about'
import { projectSchema } from './project'
import { skillsSchema } from './skill'
import { educationSchema } from './education'
import { courseSchema } from './courses'
import { experienceSchema } from './experience'
import { countersSchema } from './counters'
import { testimonialsSchema } from './testimonials'
import { servicesSchema } from './services'
import { heroSliderSchema } from './heroSlider'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [  projectSchema, aboutSchema,skillsSchema,educationSchema,courseSchema , experienceSchema , countersSchema,testimonialsSchema ,servicesSchema ,heroSliderSchema],
}
