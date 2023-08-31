import slugify from "slugify"
export default function convertSlug (text: string) {
    if(!text) return ''
    return slugify(text)
}
