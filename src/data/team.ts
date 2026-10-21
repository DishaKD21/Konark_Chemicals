export type TeamMember = {
  id: string;
  name: string;
  designation: string;
  department?: string;
  biography: string;
  experience?: string;
  responsibilities?: string[];
  email?: string;
  phone?: string;
  imageSrc?: string;
  imageAlt?: string;
  featured?: boolean;
  confirmed: boolean;
};

export const leadership: TeamMember[] = [
  {
    id: "leadership-01",
    name: "[Name — confirm]",
    designation: "[Designation — confirm, e.g. Owner / Managing Director]",
    biography:
      "[Short biography — add confirmed professional background. Do not invent titles or experience.]",
    featured: true,
    confirmed: false,
    imageSrc: "/images/team/leadership-01.jpg",
    imageAlt: "[Leadership portrait — add photograph]",
  },
];

export const familyProfiles: TeamMember[] = [
  {
    id: "father",
    name: "[Father's name — confirm]",
    designation: "[Role — confirm if published]",
    biography:
      "[Respectful professional profile — add confirmed information only.]",
    confirmed: false,
    imageSrc: "/images/team/father.jpg",
    imageAlt: "[Father — professional portrait]",
  },
  {
    id: "grandfather",
    name: "[Grandfather's name — confirm]",
    designation: "[Role — confirm if published]",
    biography: "[Profile text — confirm before publishing.]",
    confirmed: false,
    imageSrc: "/images/team/grandfather.jpg",
    imageAlt: "[Grandfather — professional portrait]",
  },
];

export const employees: TeamMember[] = [
  {
    id: "employee-placeholder",
    name: "[Employee name — add when approved]",
    designation: "[Designation]",
    department: "[Department]",
    biography: "[Short introduction]",
    confirmed: false,
    imageSrc: "/images/team/employee-placeholder.jpg",
    imageAlt: "Team member placeholder",
  },
];
