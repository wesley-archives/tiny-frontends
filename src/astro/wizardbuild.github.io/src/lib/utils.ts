interface ExcerptProps {
    text: string;
    maxLength?: number;
}

export const excerpt = ({ text, maxLength = 48 }: ExcerptProps): string => {
    if (text.length <= maxLength) {
        return text;
    }
    return text.trim().substring(0, maxLength - 3).concat("...");
};

interface FormatDateProps {
    date: Date;
    options?: Intl.DateTimeFormatOptions;
}

export const formatDate = ({ date, options }: FormatDateProps): string => {
    if (!date) {
        return "";
    }

    if (options) {
        return new Intl.DateTimeFormat("en-US", options).format(date);
    }

    return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
};

interface FormatDateRangeProps {
    startDate: Date;
    endDate?: Date;
    options?: Intl.DateTimeFormatOptions;
}

export const formatDateRange = ({
    startDate,
    endDate,
    options
}: FormatDateRangeProps): string => {
    if (!startDate) {
        return "";
    }

    if (!endDate) {
        return formatDate({ date: startDate, options }) + ' - Current';
    }

    return `${formatDate({ date: startDate, options })} - ${formatDate({
        date: endDate,
        options,
    })}`;
};

export function copyToClipboard(buttonSelector: string, content: string): void {
    const copyButton = document.querySelector(buttonSelector);

    if (!copyButton || !content) {
        return;
    }

    copyButton.addEventListener("click", () => {
        navigator.clipboard.writeText(content || "");
        window.alert("Copied to clipboard");
    });
}
