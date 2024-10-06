import { useState } from "react";
import addMemberIcon from "../../assets/add-member.svg";
import Button from "../../components/common/Button/Button";
import Select from "../../components/common/Select/Select";
import { SelectOption } from "../../utils/interfaces/common.interface";
import BoardsList from "./ui/BoardsList/BoardsList";
import WorkspaceAvatar from "./ui/WorkspaceAvatar/WorkspaceAvatar";
import classes from "./Workspaces.module.css";

function Workspaces() {
  const [selected, setSelected] = useState<SelectOption | null>(null);

  const sortSelectOptions: SelectOption[] = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const sortSelectHandler = (option: SelectOption) => {
    setSelected(option);
  };

  return (
    <section>
      <article className={classes.activeWorkspace__container}>
        <WorkspaceAvatar />
        <Button classes={classes} onClick={() => {}}>
          <img src={addMemberIcon} alt="Add Member Icon" />
          Invite workspace member
        </Button>
      </article>
      <article className={classes.boards__container}>
        <h2 className={classes.boards__header}>Boards</h2>
        <Select
          options={sortSelectOptions}
          label="Sort by"
          onChange={sortSelectHandler}
        />
        <BoardsList/>
      </article>
    </section>
  );
}
export default Workspaces;

export function loader() {}
