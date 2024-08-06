
function displayClassDates(className, startDate, numWeeks, timeSuffix, skippedWeeks = [], color) {
    const classDatesContainer = document.getElementById(`classDates${className}`);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let i = 0; i < numWeeks; i++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(currentDate.getDate() + (i * 7));
        const nextDay = new Date(currentDate);
        nextDay.setDate(currentDate.getDate() + 1);

        if (!skippedWeeks.includes(i + 1) && nextDay > today) {
            const formattedDate = currentDate.toLocaleDateString("en-GB", { month: "short", day: "numeric" });
            const linkDate = `${currentDate.getFullYear()}${(currentDate.getMonth() + 1).toString().padStart(2, '0')}${currentDate.getDate().toString().padStart(2, '0')}`;
            const link = `https://bookwhen.com/fitnesswithlara#focus=ev-${className}-${linkDate}${timeSuffix}`;

            // Create link element
            const linkElement = document.createElement('a');
            linkElement.setAttribute('href', link);
            linkElement.setAttribute('target', '_blank');
            linkElement.innerHTML = `<small>${formattedDate}</small>`;
            linkElement.style.backgroundColor = color; // Set the color dynamically
            linkElement.style.color = 'black'

            // Add a span for margin
            const span = document.createElement('span');
            span.style.marginRight = '10px';

            // Append elements to the container
            classDatesContainer.appendChild(linkElement);
            classDatesContainer.appendChild(span);
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    displayClassDates("sjlv", "2024-08-12", 8, "183000", [], 'pink');
    displayClassDates("skni", "2024-08-12", 8, "183000", [], 'coral');
    displayClassDates("szew", "2024-08-12", 8, "190000", [], 'yellow');
});
