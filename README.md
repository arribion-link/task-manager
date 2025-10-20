
# 1. **Task Manager / To-Do App**

- **Real-world mimic**: Personal productivity tools like Todoist or Microsoft To Do.
- **Features**:
  - Add, edit, delete tasks
  - Mark tasks as complete/incomplete
  - Filter by status (completed, pending)
  - Optional: User login and task persistence

### JSON 

```json
{
  taskId: "t001",
  userId: "u001",
  title: "Buy groceries",
  description: "Milk, eggs, bread, and coffee",
  dueDate: "2025-10-21",
  status: "pending",
  priority: "medium",
  tags: ["personal", "shopping"]
}
```

To determine which data from the provided JSON object should be displayed on the UI, we need to consider what information is most relevant and useful to the user in the context of a task management application. 

### Analysis of Fields for UI Display

1. **taskId: "t001"**
   - **Purpose**: Uniquely identifies the task in the system.
   - **Display on UI?**: **No**. The `taskId` is typically used internally for backend operations (e.g., referencing, updating, or deleting tasks). Displaying it on the UI is usually unnecessary as it’s not user-facing information and doesn’t aid in task management.

2. **userId: "u001"**
   - **Purpose**: Identifies the user associated with the task.
   - **Display on UI?**: **No**, in most cases. The `userId` is relevant for multi-user applications to associate tasks with specific users, but it’s typically not shown directly on the UI. Instead, user-related information (e.g., username or profile picture) might be displayed if the context requires it (e.g., in a shared workspace). Since the JSON doesn’t provide a username, `userId` is likely internal and not displayed.

3. **title: "Buy groceries"**
   - **Purpose**: Provides a concise summary of the task.
   - **Display on UI?**: **Yes**. The `title` is critical as it’s the primary identifier of the task’s purpose. It should be prominently displayed in task lists or task cards to allow quick identification.

4. **description: "Milk, eggs, bread, and coffee"**
   - **Purpose**: Provides additional details about the task.
   - **Display on UI?**: **Yes, but context-dependent**. The `description` is useful for providing more context, especially in a detailed task view. In a compact task list, it might be truncated or hidden behind a toggle/expand option to save space. For example, a tooltip or a "view details" section could show the full description.

5. **dueDate: "2025-10-21"**
   - **Purpose**: Indicates the task’s deadline.
   - **Display on UI?**: **Yes**. The `dueDate` is critical for task prioritization and time management. It should be displayed prominently, often formatted in a user-friendly way (e.g., “Due: Oct 21, 2025”). If the date is near or overdue (relative to the current date, Oct 20, 2025), the UI might highlight it (e.g., with color coding).

6. **status: "pending"**
   - **Purpose**: Indicates the current state of the task (e.g., pending, in-progress, completed).
   - **Display on UI?**: **Yes**. The `status` helps users track progress. It’s often displayed visually (e.g., as a badge, icon, or color) in task lists or detailed views. For example, “pending” might appear as a gray or yellow badge.

7. **priority: "medium"**
   - **Purpose**: Indicates the task’s urgency or importance.
   - **Display on UI?**: **Yes**. The `priority` is important for helping users focus on high-priority tasks. It’s often shown as a visual indicator (e.g., a colored flag or label like “Medium”) or used to sort tasks in a list.

8. **tags: ["personal", "shopping"]**
   - **Purpose**: Categorizes the task for filtering or organization.
   - **Display on UI?**: **Yes, but optional**. Tags are useful for grouping or filtering tasks (e.g., showing all “shopping” tasks). They’re typically displayed as small labels or chips in the UI, especially in task lists or filters. However, if space is limited, they might be partially shown or accessible via a details view.

### Recommended Data for UI Display

Based on the analysis, the following fields should be displayed on the UI for a typical task management application:

- **title**: “Buy groceries” – Always displayed, as it’s the primary task identifier.
- **description**: “Milk, eggs, bread, and coffee” – Displayed in a detailed view or truncated in a compact list.
- **dueDate**: “2025-10-21” – Displayed, preferably formatted (e.g., “Due: Oct 21, 2025”), with possible highlighting if urgent.
- **status**: “pending” – Displayed as a label or visual indicator (e.g., badge or icon).
- **priority**: “medium” – Displayed as a label, icon, or color-coded indicator.
- **tags**: ["personal", "shopping"] – Displayed as labels or chips, especially in filters or detailed views.

### Fields Not Displayed

- **taskId**: Internal identifier, not user-facing.
- **userId**: Internal, not relevant unless user details (e.g., username) are available.

### Example UI Representation

#### Task List View (Compact)

- **Title**: Buy groceries
- **Due Date**: Due: Oct 21, 2025
- **Status**: Pending (gray badge)
- **Priority**: Medium (yellow flag)
- **Tags**: personal, shopping (small chips, possibly truncated)

#### Task Details View (Expanded)

- **Title**: Buy groceries
- **Description**: Milk, eggs, bread, and coffee
- **Due Date**: Oct 21, 2025
- **Status**: Pending
- **Priority**: Medium
- **Tags**: personal, shopping

### Notes

- The exact display depends on the UI design (e.g., mobile vs. desktop, list vs. card view).
- If the UI supports interactivity, fields like `status`, `priority`, or `tags` might be editable directly (e.g., dropdowns or tag selectors).
- The `dueDate` could be formatted based on user locale or preferences (e.g., “Tomorrow” instead of “Oct 21, 2025” since it’s one day from the current date, Oct 20, 2025).
- If the application supports multiple users, the UI might display user-related info (e.g., “Assigned to: [Username]”) if `userId` can be mapped to a username, but this isn’t possible with the given data.

### The data to be displayed on the UI is:

- **title**: “Buy groceries”
- **description**: “Milk, eggs, bread, and coffee” (full in detailed view, possibly truncated in list view)
- **dueDate**: “2025-10-21” (formatted, e.g., “Due: Oct 21, 2025”)
- **status**: “pending” (as a label or badge)
- **priority**: “medium” (as a label or indicator)
- **tags**: ["personal", "shopping"] (as labels or chips)

The `taskId` and `userId` should not be displayed, as they are internal identifiers.