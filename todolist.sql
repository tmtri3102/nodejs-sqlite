-- Create the tasks table
CREATE TABLE tasks (
    task_id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    due_date DATE,
    status TEXT DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    priority INTEGER DEFAULT 1
);

-- Create the categories table
CREATE TABLE categories (
    category_id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE
);

-- Create a join table for tasks and categories
CREATE TABLE task_categories (
    task_id INTEGER,
    category_id INTEGER,
    FOREIGN KEY (task_id) REFERENCES tasks(task_id),
    FOREIGN KEY (category_id) REFERENCES categories(category_id),
    PRIMARY KEY (task_id, category_id)
);

-- Create index for faster searches
CREATE INDEX idx_tasks_status ON tasks(status);
CREATE INDEX idx_tasks_due_date ON tasks(due_date);

-- Common queries

-- Add a new task
INSERT INTO tasks (title, description, due_date, priority) 
VALUES ('Sample Task', 'Description here', '2024-01-01', 2);

-- Get all pending tasks
SELECT * FROM tasks WHERE status = 'pending' ORDER BY due_date;

-- Get tasks by priority
SELECT * FROM tasks WHERE status = 'pending' ORDER BY priority DESC;

-- Mark task as complete
UPDATE tasks SET status = 'completed' WHERE task_id = ?;

-- Delete task
DELETE FROM tasks WHERE task_id = ?;

-- Get tasks with their categories
SELECT t.*, GROUP_CONCAT(c.name) as categories
FROM tasks t
LEFT JOIN task_categories tc ON t.task_id = tc.task_id
LEFT JOIN categories c ON tc.category_id = c.category_id
GROUP BY t.task_id;