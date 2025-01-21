import { Routes, Route } from "react-router-dom";
import {
  LoginPage,
  HomePage,
  SignUpPage,
  ClassesPage,
  MyWorkoutPage,
  PtSessionsPage,
  MembershipCreationPage,
} from "./Pages";

const routes = [
  { path: "/", element: <LoginPage /> },
  { path: "/SignUp", element: <SignUpPage /> },
  { path: "/home-page", element: <HomePage /> },
  { path: "/create-membership", element: <MembershipCreationPage /> },
  { path: "/Classes", element: <ClassesPage /> },
  { path: "/MyWorkout", element: <MyWorkoutPage /> },
  { path: "/PtSessions", element: <PtSessionsPage /> },
];

function App() {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}

export default App;
