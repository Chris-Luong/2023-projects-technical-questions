import { SetStateAction, Dispatch, FormEvent, useEffect } from "react";
import { Alert, TableContents } from "../Table/Table";

interface AlertModalProps {
  contents: TableContents;
  setContents: Dispatch<SetStateAction<TableContents>>;
}

export default function AlertModal({ contents, setContents }: AlertModalProps) {
  let newContents: TableContents = contents;

  function onSubmitEvent(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // hint: the alert given is at (e.target as any).elements[0].value - ignore typescript being annoying
    console.log((e.target as any)[0].value);

    const newObj: Alert = {
      alert: (e.target as any)[0].value,
      status: "new alert",
      updates: [],
    };

    newContents = contents;
    newContents.rowContents.push(newObj);

    console.log(newContents);
    setContents(newContents);
  }

  useEffect(() => {
    if (newContents !== null || newContents !== undefined) {
      setContents(newContents);
    }
  }, [newContents, setContents]);

  return (
    <form data-testid='form' onSubmit={onSubmitEvent}>
      <label> Add new alert: </label>
      <input type='text' id='alert' name='alert' />
      <button type='submit'> Add </button>
    </form>
  );
}
