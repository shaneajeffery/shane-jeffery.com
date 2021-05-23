export interface UserData {
    name: string;
    email: string;
    title: string;
    bio: string;
    born: string;
    linkedin: string;
    facebook: string;
    github: string;
    education: Record<string, unknown>[];
}
