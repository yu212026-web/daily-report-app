import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import axios from 'axios';

export default function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('/api/events').then(res => setEvents(res.data));
  }, []);

  const saveEvent = info => {
    const ev = {
      id: info.event.id || Date.now().toString(),
      title: info.event.title,
      start: info.event.start,
      end: info.event.end
    };
    axios.post('/api/events', ev);
  };

  return (
    <FullCalendar
      plugins={[timeGridPlugin, interactionPlugin]}
      initialView="timeGridDay"
      slotMinTime="08:00:00"
      slotMaxTime="20:00:00"
      slotDuration="00:10:00"
      editable
      selectable
      events={events}
      select={info => {
        const title = prompt('TODOを入力');
        if (title) {
          info.event.setProp('title', title);
          saveEvent(info);
        }
      }}
      eventResize={saveEvent}
      eventDrop={saveEvent}
    />
  );
}