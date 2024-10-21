export interface BlogList {
    id:        string;
    title:     string;
    author:    string;
    tags:      string[];
    image:     string;
    headlines: string;
    date:      string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toBlogList(json: string): BlogList[] {
        return JSON.parse(json);
    }

    public static blogListToJson(value: BlogList[]): string {
        return JSON.stringify(value);
    }
}
