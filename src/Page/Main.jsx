import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import {
  Home,
  NotFound,
  Login,
  SignUp,
  AccountCenter,
  ClassesList,
  QuizList,
  Quiz,
  UsefulTools,
  KnowledgeArea,
  Forum,
} from "./Routes";
import {
  MostLikedPosts,
  RecentPosts,
  SavedPosts,
  UserPosts,
} from "./Routes/ForumContent";
import {
  AccountOverview,
  PasswordAndSecurity,
  PersonalData,
} from "./Routes/AccountCenterContent";
import { Question } from "./Routes/QuizContent";
import QuizData from "../Data/quiz.json";

export default function Main() {
  return (
    <main className="min-h-screen pt-16 bg-gradient-to-r from-purple-50 to-purple-100 flex justify-center">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="account_center"
            element={<Navigate to="account_overview" />}
          />
          <Route path="account_center" element={<AccountCenter />}>
            <Route index element={<Navigate to="account_overview" />} />
            <Route path="account_overview" element={<AccountOverview />} />
            <Route path="personal_data" element={<PersonalData />} />
            <Route
              path="password_and_security"
              element={<PasswordAndSecurity />}
            />
          </Route>
          <Route path="classes_list" element={<ClassesList />} />
          <Route path="quiz_list" element={<QuizList />} />
          <Route path="useful_tools" element={<UsefulTools />} />
          <Route path="knowledge_area" element={<KnowledgeArea />} />
          <Route path="forum" element={<Forum />}>
            <Route index element={<Navigate to="recent_posts" />} />
            <Route path="recent_posts" element={<RecentPosts />} />
            <Route path="most_liked_posts" element={<MostLikedPosts />} />
            <Route path="saved_posts" element={<SavedPosts />} />
            <Route path="user_posts" element={<UserPosts />} />
          </Route>
          <Route path="quiz" element={<Navigate to="1" />} />
          <Route path="quiz/:quizId" element={<Quiz />}>
            <Route path="question" element={<Question />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
}
