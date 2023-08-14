import slugify from "slugify"
export default function convertSlug (text: string) {
    const slug = slugify(text)
    return slug
}
