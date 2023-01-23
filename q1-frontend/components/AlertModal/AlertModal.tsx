import { SetStateAction, Dispatch, FormEvent } from "react";
import { Alert, TableContents } from "../Table/Table";

interface AlertModalProps {
  contents: TableContents;
  setContents: Dispatch<SetStateAction<TableContents>>;
}

export default function AlertModal({ contents, setContents }: AlertModalProps) {
  function onSubmitEvent(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // hint: the alert given is at (e.target as any).elements[0].value - ignore typescript being annoying
    console.log((e.target as any)[0].value);

    const newObj: Alert = {
      alert: (e.target as any)[0].value,
      status: "new alert",
      updates: [],
    };

    // React renders when changing state using spread operator, but not when passing array itself
    const newContents = [...contents.rowContents, newObj];

    console.log(newContents);
    const newTable = {
      columnTitles: ["Alert", "Status", "Updates"],
      rowContents: newContents,
    };
    setContents(newTable);
  }

  return (
    <form data-testid='form' onSubmit={onSubmitEvent}>
      <label> Add new alert: </label>
      <input type='text' id='alert' name='alert' />
      <button type='submit'> Add </button>
    </form>
  );
}
