import { ContentType } from "./blog";

export interface Project {
    id:                 string;
    title:              string;
    description:        string;
    downloads:          number;
    email:              string;
    testAppLink:        string;
    testAppDescription: string;
    frontendFeatures:   Feature[];
    backendFeatures:    Feature[];
    upcomingFeatures:   Feature[];
    technologies:       string[];
    date:               Date;
    appLogo:            string;
    author:             string;
    playStoreLink:      string;
    appStoreLink:       string;
    website:            string;
    content:            Content[];
    thumbnail:          Thumbnail;
    createdAt:          Date;
    updatedAt:          Date;
    v:                  number;
}

export interface Feature {
    title:       string;
    description: string;
    id:          string;
}

export interface Content {
    contentType: ContentType;
    content:     string;
    id:          string;
    imageURL?:   string;
}

export interface Thumbnail {
    url:         string;
    height:      number;
    width:       number;
    alt:         string;
    projectType: string;
    projectID:   string;
    id:          string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toProject(json: string): Project {
        return JSON.parse(json);
    }

    public static projectToJson(value: Project): string {
        return JSON.stringify(value);
    }
}
