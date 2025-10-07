import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../TodoList";

describe("TodoList component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/add a new todo/i);
    const addBtn = screen.getByText(/add/i);

    fireEvent.change(input, { target: { value: "Write tests" } });
    fireEvent.click(addBtn);

    expect(screen.getByText("Write tests")).toBeInTheDocument();
  });

  test("toggles a todo's completion", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");

    // initially not completed
    expect(todo).not.toHaveStyle("text-decoration: line-through");

    // click to toggle
    fireEvent.click(todo);
    expect(todo).toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const deleteButtons = screen.getAllByText(/delete/i);
    fireEvent.click(deleteButtons[0]); // delete "Learn React"

    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
