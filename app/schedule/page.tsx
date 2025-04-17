// app/schedule.tsx
export default function Schedule() {
    return (
      <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <h1>Event Schedule</h1>
        <p>The Jackson-Reed Math Tournament will be hosted in person on Saturday, May 17th at Jackson-Reed High School, located at 3950 Chesapeake Street, NW, Washington, DC 20016. Below is the main gate where there will be volunteers guiding you to the check-in location:</p>
        
  
        {/* Add Image Below the Text */}
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <img
  src="/image/image.png" // Correct relative path from the public folder
  alt="Event Location"
  style={{ maxWidth: '50%', height: 'auto', borderRadius: '8px' }}
/>
        </div>
        <p>Please note that thanks to our sponsors, FREE LUNCH (Cheese and Pepperoni Pizzas) will be provided for all contestants.</p>
        {/* Schedule Table */}
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '2rem' }}>
          <thead>
            <tr>
              <th style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', backgroundColor: '#f4f4f4' }}>Time</th>
              <th style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', backgroundColor: '#f4f4f4' }}>Event</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>9:30 AM - 10:00 AM</td>
              <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>Check In</td>
            </tr>
            <tr>
              <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>10:00 AM - 10:25 AM</td>
              <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>Speed Round</td>
            </tr>
            <tr>
              <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>10:25 AM - 10:40 AM</td>
              <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>Break 1</td>
            </tr>
            <tr>
              <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>10:40 AM - 11:30 AM</td>
              <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>Accuracy Round</td>
            </tr>
            <tr>
              <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>11:30 AM - 1:00 PM</td>
              <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>Lunch Break</td>
            </tr>
            <tr>
              <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>1:00 PM - 1:40 PM</td>
              <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>Team Round</td>
            </tr>
            <tr>
              <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>1:40 PM - 2:00 PM</td>
              <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>Break 2</td>
            </tr>
            <tr>
              <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>2:00 PM - 2:30 PM</td>
              <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>Guts Round</td>
            </tr>
            <tr>
              <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>2:30 PM - 3:15 PM</td>
              <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>Award Ceremony</td>
            </tr>
          </tbody>
        </table>
      </main>
    );
  }
  