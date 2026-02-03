export function useNavbar() {
    
    function getIdFromHref(href: string) {
        return href.startsWith("#") ? href.slice(1) : href;
    }

    return { getIdFromHref };
}