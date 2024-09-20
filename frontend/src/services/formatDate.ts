export const formatDate = (dateString: string | null): string | null => {
    if (!dateString) return null;

    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString("en-US", options);

    return `${formattedDate} `;
};
