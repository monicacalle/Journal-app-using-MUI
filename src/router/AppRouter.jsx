import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../aouth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      {/*login y registro*/}

      <Route path="/auth/*" element={<AuthRoutes />} />

      {/*journalapp*/}
      <Route path="/*" element={<JournalRoutes />} />

      <Route />
    </Routes>
  );
};
