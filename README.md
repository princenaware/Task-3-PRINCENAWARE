# Prince's Task Planner - Project Report

## Project Description
Prince's Task Planner is an interactive single-page web application designed to help students efficiently organize and track their daily academic tasks, submissions, and assignment cycles. The website responds to user actions in real-time without reloading the browser page, providing a fluid and highly seamless user experience.

## Problem Statement & Proposed Solution
Modern college and engineering students face immense academic pressure to manage multiple subjects, lab submissions, and sudden project deadlines simultaneously. Tracking all these changing requirements manually on paper or static documents is disorganized, which reduces learning efficiency and increases stress levels.

Prince's Task Planner solves this issue by offering a clean, digital workspace. The application enables students to instantly add new task cards, mark them as completed to track their daily progress visually, and view a live counter of their remaining workload at any given moment.

## Key Features of the Project
* **Add New Tasks:** Users type a task description into the input box and click the "Add Task" button to instantly append a new task item at the bottom of the active list.
* **Dynamic Task Counter:** A live pending task counter is prominently displayed at the top of the interface. It automatically increments (+1) whenever a task is successfully added and decrements (-1) when a task is permanently removed.
* **Interactive Status Toggle:** Clicking explicitly on the text of any listed task card dynamically toggles its completion state, applying a clean strike-through visual effect to mark it as done.
* **Node Removal Action:** A distinct close '×' button is embedded on the right side of each individual task item. Clicking this button immediately deletes that specific node from the webpage document tree.

## Technologies Used
* **HTML5:** Used to build the core semantic layout structural skeleton of the planner workspace.
* **CSS3:** Used to design a modern and highly responsive presentation interface, utilizing custom linear-gradients for a vibrant tech look.
* **Vanilla JavaScript:** Used exclusively to handle client-side programming logic, capture real-time user events, and perform direct Document Object Model (DOM) tree mutations without using any third-party frameworks or libraries.



## How to Run the Project
1. Create a dedicated folder on your local computer and save the three core files as `index.html`, `master.css`, and `app.js` inside it.
2. Launch Visual Studio Code (VS Code) and open this project directory folder.
3. Install the **Live Server** extension from the official VS Code extensions marketplace panel.
4. Select and open the `index.html` file in the main code editor panel.
5. Click on the **Go Live** button located at the bottom-right status bar of the VS Code window. The application will automatically launch inside your default web browser.
