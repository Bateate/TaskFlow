import Button from "../../components/common/Button/Button";
import WorkspaceAvatar from "./ui/WorkspaceAvatar/WorkspaceAvatar";
import addMemberIcon from "../../assets/add-member.svg";
import "./Workspaces.css";
import { SelectOption } from "../../utils/interfaces/select.interface";
import { useState } from "react";
import Select from "../../components/common/Select/Select";
import BoardsList from "./ui/BoardsList/BoardsList";
import { Board } from "../../utils/interfaces/board.interface";
function Workspaces() {

  const [selected, setSelected] = useState<SelectOption | null>(null);
  
  const workspaceBoards: Board[] = [
    {title: 'TaskFlow Board', id: '0'},
    {title: 'First Board', id: '1'},
    {title: 'Second Board', id: '2'},

  ] 

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
      <article className="active-workspace__container">
        <WorkspaceAvatar />
        <Button>
          <img src={addMemberIcon} alt="Add Member Icon" />
          Invite workspace member
        </Button>
      </article>
      <article className="boards__container">
        <h2 className="boards-header">Boards</h2>
        <Select
          options={sortSelectOptions}
          label="Sort by"
          onChange={sortSelectHandler}
        />
        <BoardsList boards={workspaceBoards} />
      </article>
    </section>
  );
}
export default Workspaces;
