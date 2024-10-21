export default function formatTitle(title: string): string {
    return title.toLowerCase().replace(/\s+/g, '_');
}