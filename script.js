function updateDate() {
    const calendarInput = document.getElementById('calendar');
    const selectedDateSpan = document.getElementById('selected-date');
    const selectedDate = new Date(calendarInput.value);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    selectedDateSpan.textContent = selectedDate.toLocaleDateString(undefined, options);
}

function addScheduleItem() {
    const scheduleInput = document.getElementById('schedule-input');
    const notesInput = document.getElementById('notes-input');
    const scheduleList = document.getElementById('schedule-list');
    const itemText = scheduleInput.value.trim();
    const notesText = notesInput.value.trim();

    if (itemText) {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${itemText}</strong><br>${notesText}`;
        scheduleList.appendChild(li);
        scheduleInput.value = '';
        notesInput.value = '';
    } else {
        alert('Please enter a schedule item.');
    }
}

function clearSchedule() {
    document.getElementById('schedule-list').innerHTML = '';
}

function saveSchedule() {
    const savedSchedulesList = document.getElementById('saved-schedules-list');
    const scheduleItems = Array.from(document.getElementById('schedule-list').getElementsByTagName('li'));

    savedSchedulesList.innerHTML = '';
    scheduleItems.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = item.innerHTML;
        savedSchedulesList.appendChild(li);
    });
}
let selectedDate = '';

function updateDate() {
    const calendarInput = document.getElementById('calendar');
    const selectedDateSpan = document.getElementById('selected-date');
    selectedDate = calendarInput.value; // Save the selected date
    const date = new Date(selectedDate);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    selectedDateSpan.textContent = date.toLocaleDateString(undefined, options);
}

function addScheduleItem() {
    const scheduleInput = document.getElementById('schedule-input');
    const notesInput = document.getElementById('notes-input');
    const scheduleList = document.getElementById('schedule-list');
    const itemText = scheduleInput.value.trim();
    const notesText = notesInput.value.trim();

    if (itemText && selectedDate) {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${itemText}</strong><br>${notesText}<br><small>Date: ${new Date(selectedDate).toLocaleDateString()}</small>`;
        scheduleList.appendChild(li);
        scheduleInput.value = '';
        notesInput.value = '';
    } else {
        alert('Please enter a schedule item and select a date.');
    }
}

function clearSchedule() {
    document.getElementById('schedule-list').innerHTML = '';
}

function saveSchedule() {
    const savedSchedulesList = document.getElementById('saved-schedules-list');
    const scheduleItems = Array.from(document.getElementById('schedule-list').getElementsByTagName('li'));

    savedSchedulesList.innerHTML = '';
    scheduleItems.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = item.innerHTML;
        savedSchedulesList.appendChild(li);
    });
}
