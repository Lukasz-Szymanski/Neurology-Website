document.addEventListener("DOMContentLoaded", function () {
  const calendarEl = document.getElementById("calendar");
  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "timeGridWeek",
    headerToolbar: {
      center: "title",
      left: "prev,next today",
      right: "",
    },
    locale: "eslocale",
    firstDay: 1,
    events: [
      {
        title: "Wolna Wizyta",
        start: "2024-01-10T09:00:00",
        end: "2024-01-10T09:45:00",
      },
      {
        title: "Wolna Wizyta",
        start: "2024-02-06T09:00:00",
        end: "2024-02-06T09:45:00",
      },
      {
        title: "Wolna Wizyta",
        start: "2024-02-13",
      },
      {
        title: "Wolna Wizyta",
        start: "2024-02-20",
      },
      {
        title: "Wolna Wizyta",
        start: "2024-02-27",
      },
    ],
  });

  calendar.render();
});
