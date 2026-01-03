import { Button, Flex, Input, Spinner } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState, useRef, useEffect } from "react";
import { IoMdAdd } from "react-icons/io";
import { BASE_URL } from "../config";

interface Todo {
  id: string;
  body: string;
  completed: boolean;
}

const TodoForm = () => {
  const [newTodo, setNewTodo] = useState("");
  const queryClient = useQueryClient();

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const { mutate: createTodo, isPending: isCreating } = useMutation<Todo, Error, string>({
    mutationKey: ["createTodo"],
    mutationFn: async (body: string) => {
      try {
        const res = await fetch(BASE_URL + `/todos`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ body }),
        });

        const data: Todo | { error: string } = await res.json();

        if (!res.ok) {
          throw new Error((data as { error: string }).error || "Something went wrong");
        }

        return data as Todo;
      } catch (err: unknown) {
        if (err instanceof Error) {
          throw err;
        }
        throw new Error("Unexpected error");
      }
    },
    onSuccess: () => {
      setNewTodo("");
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      inputRef.current?.focus();
    },
    onError: (error: Error) => {
      alert(error.message);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    createTodo(newTodo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex gap={2}>
        <Input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          ref={inputRef}
        />
        <Button mx={2} type="submit" _active={{ transform: "scale(.97)" }}>
          {isCreating ? <Spinner size="xs" /> : <IoMdAdd size={30} />}
        </Button>
      </Flex>
    </form>
  );
};

export default TodoForm;

