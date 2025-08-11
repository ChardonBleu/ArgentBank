import type { FormEvent, ReactElement } from "react";
import { useAppDispatch, useAppSelector } from "~/store/hooks";
import apiService from "~/api/apiService";
import { userUpdate } from "../routes/profileSlice";

export default function EditNameForm(): ReactElement {
  const firstName = useAppSelector((state) => state.user.value.firstName);
  const lastName = useAppSelector((state) => state.user.value.lastName);
  const token = useAppSelector((state) => state.user.value.token);

  const dispatch = useAppDispatch();

  function toggleForm() {
    const form = document.getElementById("edit-form");
    form?.classList.toggle("edit-form_show");
    const editNameButton = document.getElementById("edit-button");
    editNameButton?.classList.toggle("edit-button_hide");
  }

  function handleCancel(event: FormEvent) {
    event.preventDefault();
    toggleForm();
  }

  function handleSave(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formEntries = Object.fromEntries(formData.entries());
    const firstName = formEntries.firstName as string;
    const lastName = formEntries.lastName as string;

    apiService.updateUserProfile(token, firstName, lastName);
    const action = {
      firstName: firstName,
      lastName: lastName,
    };
    dispatch(userUpdate(action));
    toggleForm();
  }

  return (
    <>
      <button className="edit-button" id="edit-button" onClick={toggleForm}>
        Edit Name
      </button>
      <form className="edit-form" id="edit-form" onSubmit={handleSave}>
        <div className="edit-form_items">
          <input name="firstName" placeholder={firstName} required={true} />
          <input name="lastName" placeholder={lastName} required={true} />
        </div>
        <div className="edit-form_items">
          <button type="submit" className="edit-button">
            Save
          </button>
          <button className="edit-button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}
