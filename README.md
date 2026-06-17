# 🚀 Demo Queue - Pipeline Tracker

A modern, interactive web application for tracking and managing pipeline tasks and queues.

## Features

✨ **Core Features:**
- 📋 Add and manage tasks with priority levels (Low, Medium, High)
- ⚙️ Track tasks through a 3-stage pipeline (Pending → Processing → Completed)
- 📊 Real-time statistics dashboard showing total, in-progress, and completed tasks
- 💾 Persistent storage using browser localStorage
- 📱 Fully responsive design for desktop and mobile devices
- 🎨 Modern gradient UI with smooth animations

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/jonathan777-ui/DemoQueue.git
cd DemoQueue
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to:
```
http://localhost:8000
```

## Usage

### Adding Tasks
1. Enter a task name in the input field
2. Select a priority level (Low, Medium, or High)
3. Click "Add Task" or press Enter

### Managing Tasks
- **Start Task**: Move a pending task to processing
- **Complete Task**: Move a processing task to completed
- **Reopen Task**: Move a completed task back to pending
- **Delete Task**: Remove a task from the queue

### Understanding the Pipeline
- **📋 Pending**: Tasks waiting to be started
- **⚙️ Processing**: Tasks currently being worked on
- **✅ Completed**: Finished tasks

## Project Structure

```
DemoQueue/
├── index.html          # Main HTML structure
├── styles.css          # Styling and responsive design
├── script.js           # Application logic and interactivity
├── package.json        # Project dependencies and scripts
└── README.md          # This file
```

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript (ES6+)**: Object-oriented programming with classes
- **localStorage API**: Client-side data persistence
- **http-server**: Development server

## Features Breakdown

### Task Management
- Tasks are stored with:
  - Unique ID (timestamp-based)
  - Title
  - Priority level
  - Status (pending/processing/completed)
  - Creation timestamp

### Statistics Dashboard
- **Total Tasks**: Count of all tasks in the system
- **In Progress**: Count of tasks currently being processed
- **Completed**: Count of finished tasks

### Data Persistence
- All tasks are automatically saved to browser localStorage
- Data persists across browser sessions
- No backend server required

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Adding New Priority Levels
Edit `index.html` and `styles.css` to add new priority options.

### Changing Colors
Modify the CSS custom properties in `styles.css`:
```css
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  /* ... */
}
```

### Adding New Pipeline Stages
Add new stages to the HTML and update the `renderStage()` method in `script.js`.

## Future Enhancements

- 🔐 User authentication
- ☁️ Cloud synchronization
- 📧 Email notifications
- 👥 Collaboration features
- 📈 Advanced analytics and reporting
- 🔌 API integration
- 🌙 Dark mode toggle

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Author

[@jonathan777-ui](https://github.com/jonathan777-ui)

## Support

If you encounter any issues or have questions, please open an issue on GitHub.
