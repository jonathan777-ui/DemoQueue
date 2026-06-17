class PipelineTracker {
  constructor() {
    this.tasks = this.loadTasks() || [];
    this.taskId = 1;
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.render();
  }

  setupEventListeners() {
    document.getElementById('addBtn').addEventListener('click', () => this.addTask());
    document.getElementById('taskInput').addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.addTask();
    });
  }

  addTask() {
    const input = document.getElementById('taskInput');
    const priority = document.getElementById('prioritySelect').value;
    const title = input.value.trim();

    if (!title) {
      alert('Please enter a task name');
      return;
    }

    const task = {
      id: Date.now(),
      title,
      priority,
      status: 'pending',
      createdAt: new Date().toLocaleString(),
    };

    this.tasks.push(task);
    input.value = '';
    this.saveTasks();
    this.render();
  }

  moveTask(taskId, newStatus) {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      task.status = newStatus;
      this.saveTasks();
      this.render();
    }
  }

  deleteTask(taskId) {
    this.tasks = this.tasks.filter(t => t.id !== taskId);
    this.saveTasks();
    this.render();
  }

  getTasksByStatus(status) {
    return this.tasks.filter(t => t.status === status);
  }

  updateStats() {
    const total = this.tasks.length;
    const inProgress = this.getTasksByStatus('processing').length;
    const completed = this.getTasksByStatus('completed').length;

    document.getElementById('totalTasks').textContent = total;
    document.getElementById('inProgressTasks').textContent = inProgress;
    document.getElementById('completedTasks').textContent = completed;
  }

  renderTaskCard(task) {
    const card = document.createElement('div');
    card.className = `task-card priority-${task.priority}`;
    card.innerHTML = `
      <div class="task-header">
        <span class="task-title">${this.escapeHtml(task.title)}</span>
        <span class="task-priority ${task.priority}">${task.priority}</span>
      </div>
      <div class="task-meta">📅 ${task.createdAt}</div>
      <div class="task-actions">
        ${this.getActionButtons(task)}
      </div>
    `;
    return card;
  }

  getActionButtons(task) {
    let buttons = '';

    if (task.status === 'pending') {
      buttons += `<button class="btn btn-secondary" onclick="tracker.moveTask(${task.id}, 'processing')">Start</button>`;
    }

    if (task.status === 'processing') {
      buttons += `<button class="btn btn-secondary" onclick="tracker.moveTask(${task.id}, 'completed')">Complete</button>`;
    }

    if (task.status === 'completed') {
      buttons += `<button class="btn btn-secondary" onclick="tracker.moveTask(${task.id}, 'pending')">Reopen</button>`;
    }

    buttons += `<button class="btn btn-danger" onclick="tracker.deleteTask(${task.id})">Delete</button>`;

    return buttons;
  }

  renderStage(status, stageName) {
    const stageElement = document.getElementById(stageName);
    stageElement.innerHTML = '';

    const tasks = this.getTasksByStatus(status);

    if (tasks.length === 0) {
      stageElement.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">📭</div>
          <p>No tasks</p>
        </div>
      `;
    } else {
      tasks.forEach(task => {
        stageElement.appendChild(this.renderTaskCard(task));
      });
    }
  }

  render() {
    this.renderStage('pending', 'pendingStage');
    this.renderStage('processing', 'processingStage');
    this.renderStage('completed', 'completedStage');
    this.updateStats();
  }

  saveTasks() {
    localStorage.setItem('pipelineTasks', JSON.stringify(this.tasks));
  }

  loadTasks() {
    const stored = localStorage.getItem('pipelineTasks');
    return stored ? JSON.parse(stored) : null;
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

const tracker = new PipelineTracker();
