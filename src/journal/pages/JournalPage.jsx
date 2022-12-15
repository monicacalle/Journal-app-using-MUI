import { Typography } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import NoteView from "../views/NoteView";
import { NothingSelectedView } from "../views/NothingSelectedView";

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        molestiae voluptatem nulla nesciunt laborum sint, molestias ad libero
        unde quis nihil omnis dignissimos dolorem nam quidem optio praesentium
        facilis dolorum.
      </Typography> */}
      {/* <NothingSelectedView /> */}
      <NoteView />
    </JournalLayout>
  );
};
