/**
 * Initializes a scroll-to-top button functionality.
 * @param buttonId - The ID of the button element to trigger the scroll.
 * @param threshold - The scroll threshold in pixels to show the button.
 * @param scrollBehavior - The scrolling behavior (default is 'smooth').
 */
export function scrollToTop(
    buttonId: string,
    threshold: number = 100,
    scrollBehavior: ScrollBehavior = 'smooth'
): void {
    const button = document.getElementById(buttonId);

    if (!button) {
        console.error(`Button with ID "${buttonId}" not found.`);
        return;
    }

    const scroll = () => {
        window.scrollTo({ top: 0, behavior: scrollBehavior });
    };

    button.addEventListener('click', scroll);

    window.onscroll = () => {
        if (document.body.scrollTop > threshold || document.documentElement.scrollTop > threshold) {
            button.classList.remove('hidden');
        } else {
            button.classList.add('hidden');
        }
    };
}
