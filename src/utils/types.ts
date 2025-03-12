export interface Education {
  _id: string;
  name: string;
  date: string;
  org:string
}
export interface InternshipProps {
  education: Education;
}

// Define the type for the user info

export type UserInfo = {
  name?: string;
  title?: string;
  description?: string;
  image?: { asset: { _ref: string } }[];
};
// Define prop types
export interface Course {
  _id: string;
  title: string;
  url: string;
  image?: {
    asset: {
      _ref: string;
    };
  }[];
}

export interface CertificateCardProps {
  course: Course;
  index: number;
  totalCourses: number;
}

// Define the Course type
export interface Course {
  _id: string;
  title: string;
  url: string;
  image?: {
    asset: {
      _ref: string;
    };
  }[];
}

export interface Experience {
  date: string;
  description: string;
  icon: string;
  company: string;
  title: string;
  org: string;
  points: string[];
  logos: { asset: { _ref: string } }[];
}

export interface ExperienceCardProps {
  experience: Experience;
  isDark: boolean;
}
 // Define the Technology interface with correct Sanity image structure
export interface Technology {
  title: string;
  icon: {
    asset: {
      _ref: string;
    };
  }[];
}


export interface ProjectImageAsset {
  _ref: string;
  _type: string;
}

export interface ProjectImage {
  _type: string;
  _key: string;
  asset: ProjectImageAsset;
}

export interface ProjectSlug {
  current: string;
  _type: string;
}

export interface Project {
  _id: string;
  title: string;
  description: string;
  code_url: string;
  demo_url: string;
  skills_tags: string[];
  image: ProjectImage[];
  slug: ProjectSlug;
  _createdAt: string;
  _updatedAt: string;
}

export interface ProjectCardProps {
  index: number;
  project: Project;
}
//================ Type Definitions ================
export interface IconData {
  _type: string;
  _key: string;
  asset: {
    _ref: string;
    _type: string;
  };
}

 export interface ServiceData {
  _id: string;
  title: string;
  description: string;
  icon: IconData[] | null;
  serviceType: string;
}

export interface ServiceCardProps {
  service: ServiceData;
}
export interface ResponsiveProps {
  services: ServiceData[];
}
//================ Type Definitions ================
export interface TestimonialData {
  _id: string;
  name: string;
  position: string;
  comment: string;
  image: Array<{
    _type: string;
    _key: string;
    asset: {
      _ref: string;
      _type: string;
    };
  }>;
}

export interface FeedbackCardProps {
  index: number;
  testimonial: TestimonialData;
  isDark: boolean;
}
export interface Tab {
  id: string;
  label: string;
}

