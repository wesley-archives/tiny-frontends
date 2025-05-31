/**
 * Filters posts by a tag and updates the title element.
 * @param entityTitle - The title of the entity being filtered.
 * @param tagParam - The URL query parameter to filter by.
 * @param postSelector - The CSS selector for the list of posts.
 * @param titleSelector - The CSS selector for the title element.
 * @param tagSelector - The CSS selector within each post to find tags.
 */
export function filterPostsByTag(
    entityTitle: string = 'Posts',
    tagParam: string = 'tag',
    postSelector: string = '.post',
    titleSelector: string = 'h1',
    tagSelector: string = '.tags'
): void {
    const params = new URLSearchParams(window.location.search);
    const tag = params.get(tagParam);
    const titleElement = document.querySelector<HTMLHeadingElement>(titleSelector);
    const postElements = document.querySelectorAll<HTMLElement>(postSelector);

    if (!tag) return;

    if (titleElement) {
        titleElement.textContent = `${entityTitle} tagged with "${tag}"`;
    }

    Array.from(postElements).forEach((post) => {
        const tagElement = post.querySelector(tagSelector);
        if (tagElement) {
            const postTags = tagElement.textContent?.split(',').map((t) => t.trim());
            if (!postTags?.includes(tag)) {
                post.style.display = 'none';
            }
        }
    });
}
