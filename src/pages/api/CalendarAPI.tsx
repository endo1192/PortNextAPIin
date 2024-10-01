// api/googleCalendar.ts
const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
const CALENDAR_ID = process.env.NEXT_PUBLIC_CALENDAR_ID;
const API_URL = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events`;

export const CalendarAPI = async () => {
  const response = await fetch(`${API_URL}?key=${API_KEY}`);
  if (!response.ok) {
    throw new Error('Failed to fetch events');
  }
  const event = await response.json();
  return event.items;
};
