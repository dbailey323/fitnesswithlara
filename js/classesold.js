
// Function to get the next Monday from a given date
function getNextMonday(date) {
    const dayOfWeek = date.getDay();
    const daysUntilMonday = dayOfWeek === 0 ? 1 : 8 - dayOfWeek;
    const nextMonday = new Date(date);
    nextMonday.setDate(date.getDate() + daysUntilMonday);
    return nextMonday;
}

// Function to get the next Thursday from a given date
function getNextThursday(date) {
    const dayOfWeek = date.getDay();
    const daysUntilThursday = (4 - dayOfWeek + 7) % 7;
    const nextThursday = new Date(date);
    nextThursday.setDate(date.getDate() + daysUntilThursday);
    return nextThursday;
}

// Function to fetch and display class dates dynamically
function displayClassDates(className, numWeeks, skippedWeeks = []) {

    const classDatesContainer = document.getElementById(`classDates${className}`);
    const today = new Date();

    // Set the limit to six weeks from today
    const limitWeeks = 6;

    for (let i = 0; i < numWeeks && i < limitWeeks; i++) {
        // Get the next Monday
        const nextMonday = getNextMonday(today);
        const currentDate = new Date(nextMonday);
        currentDate.setDate(nextMonday.getDate() + (i * 7)); // Increment by 7 days for each week

        // Check if the current date is within the desired range
        if (!skippedWeeks.includes(i + 1)) {
            const formattedDate = currentDate.toLocaleDateString("en-GB", { month: "short", day: "numeric" });
            const linkDate = `${currentDate.getFullYear()}${(currentDate.getMonth() + 1).toString().padStart(2, '0')}${currentDate.getDate().toString().padStart(2, '0')}`;
            const link = `https://bookwhen.com/fitnesswithlara#focus=ev-${className}-${linkDate}183000`;
            // Append the dynamic date and link to the container
            classDatesContainer.innerHTML += `<a href="${link}" target="_blank"
            rel="noopener" class="btn btn-primary"
            style="background-color: pink; color: black;"><small>${formattedDate}</small></a><span style="margin-right: 10px;"></span>`;
        }
    }
}

function displayClassDates15(className, numWeeks, skippedWeeks = []) {

    const classDatesContainer = document.getElementById(`classDates${className}`);
    const today = new Date();

    // Set the limit to six weeks from today
    const limitWeeks = 1;

    for (let i = 0; i < numWeeks && i < limitWeeks; i++) {
        // Get the next Monday
        const nextMonday = getNextMonday(today);
        const currentDate = new Date(nextMonday);
        currentDate.setDate(nextMonday.getDate() + (i * 7)); // Increment by 7 days for each week

        // Check if the current date is within the desired range
        if (!skippedWeeks.includes(i + 1) && currentDate > today) {
            const formattedDate = currentDate.toLocaleDateString("en-GB", { month: "short", day: "numeric" });
            const linkDate = `${currentDate.getFullYear()}${(currentDate.getMonth() + 1).toString().padStart(2, '0')}${currentDate.getDate().toString().padStart(2, '0')}`;
            const link = `https://bookwhen.com/fitnesswithlara#focus=ev-${className}-${linkDate}183000`;
            // Append the dynamic date and link to the container
            classDatesContainer.innerHTML += `<a href="${link}" target="_blank"
            rel="noopener" class="btn btn-primary"
            style="background-color: pink; color: black;"><small>Monday Double</small></a><span style="margin-right: 10px;"></span>`;
        }
    }
}

function displayClassDates1(className, numWeeks, skippedWeeks = []) {

    const classDatesContainer = document.getElementById(`classDates${className}`);
    const today = new Date();

    // Set the limit to six weeks from today
    const limitWeeks = 6;

    for (let i = 0; i < numWeeks && i < limitWeeks; i++) {
        // Get the next Monday
        const nextMonday = getNextMonday(today);
        const currentDate = new Date(nextMonday);
        currentDate.setDate(nextMonday.getDate() + (i * 7)); // Increment by 7 days for each week

        // Check if the current date is within the desired range
        if (!skippedWeeks.includes(i + 1) && currentDate > today) {
            const formattedDate = currentDate.toLocaleDateString("en-GB", { month: "short", day: "numeric" });
            const linkDate = `${currentDate.getFullYear()}${(currentDate.getMonth() + 1).toString().padStart(2, '0')}${currentDate.getDate().toString().padStart(2, '0')}`;
            const link = `https://bookwhen.com/fitnesswithlara#focus=ev-${className}-${linkDate}190000`;
            // Append the dynamic date and link to the container
            classDatesContainer.innerHTML += `<a href="${link}" target="_blank"
            rel="noopener" class="btn btn-primary"
            style="background-color: light-blue; color: black;"><small>${formattedDate}</small></a><span style="margin-right: 10px;"></span>`;
        }
    }
}

function displayClassDates2(className, numWeeks, skippedWeeks = []) {

    const classDatesContainer = document.getElementById(`classDates${className}`);
    const today = new Date();

    // Set the limit to six weeks from today
    const limitWeeks = 6;

    for (let i = 0; i < numWeeks && i < limitWeeks; i++) {
        // Get the next Monday
        const nextMonday = getNextThursday(today);
        const currentDate = new Date(nextMonday);
        currentDate.setDate(nextMonday.getDate() + (i * 7)); // Increment by 7 days for each week

        // Check if the current date is within the desired range
        if (!skippedWeeks.includes(i + 1) && currentDate > today) {
            const formattedDate = currentDate.toLocaleDateString("en-GB", { month: "short", day: "numeric" });
            const linkDate = `${currentDate.getFullYear()}${(currentDate.getMonth() + 1).toString().padStart(2, '0')}${currentDate.getDate().toString().padStart(2, '0')}`;
            const link = `https://bookwhen.com/fitnesswithlara#focus=ev-${className}-${linkDate}190000`;
            // Append the dynamic date and link to the container
            classDatesContainer.innerHTML += `<a href="${link}" target="_blank"
            rel="noopener" class="btn btn-primary"
            style="background-color: yellow; color: black;"><small>${formattedDate}</small></a><span style="margin-right: 10px;"></span>`;
        }
    }
}

// Call the function with the specified parameters
displayClassDates("sjlv", 6);
displayClassDates15("skni", 1);
displayClassDates1("szew", 6);
displayClassDates2("s0pg", 6);