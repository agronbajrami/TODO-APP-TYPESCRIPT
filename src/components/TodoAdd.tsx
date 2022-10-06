import useStore from "../database/store";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function TodoAdd() {
  const store = useStore((state) => state);

  return (
    <div>
      <TextField
        type='text'
        value={store.newTodo}
        onChange={(evt) => store.setNewTodo(evt.target.value)}
        placeholder='New todo'
      />
      <Button
        variant='contained'
        className='add-todo'
        style={{ background: "red", margin: 5, width: 200, height: 50 }}
        onClick={() => {
          store.addTodo();
        }}
      >
        Add Todo
      </Button>
    </div>
  );
}

export default TodoAdd;

function configurePersist(arg0: {
  storage: Storage; // use `AsyncStorage` in react native
  rootKey: string;
}): { persist: any } {
  throw new Error("Function not implemented.");
}
