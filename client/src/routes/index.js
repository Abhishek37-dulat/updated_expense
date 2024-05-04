import UserSignup from "../components/userComponents/UserSignup";
import UserLogin from "../components/userComponents/UserLogin";
import ForgotPassword from "../components/userComponents/ForgotPassword";
import ChangePassword from "../components/userComponents/ChangePassword";
import UserProfile from "../components/profileComponents/UserProfile";
import UserAnylics from "../components/profileComponents/UserAnylics";
import ExpenseBox from "../components/ExpenseLayout";
const userRoutes = [
  {
    path: "/login",
    component: UserLogin,
  },
  {
    path: "/signup",
    component: UserSignup,
  },
  {
    path: "/forgotpassword",
    component: ForgotPassword,
  },
  {
    path: "/changepassword/:id",
    component: ChangePassword,
  },
];

const profileRoutes = [
  {
    path: "/profile",
    component: UserProfile,
  },
  // {
  //     path:"/leaderboard",
  //     component: UserLeaderBoard
  // },
  {
    path: "/profile/analysis",
    component: UserAnylics,
  },
];

const LayoutRoutes = [
  {
    path: "/expense",
    component: ExpenseBox,
  },
];

export { userRoutes, profileRoutes, LayoutRoutes };
