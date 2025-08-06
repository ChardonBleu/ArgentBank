import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("./routes/home.tsx"),
  route("login", "./routes/signin.tsx"),
  route("profile", "./routes/profile.tsx"),
] satisfies RouteConfig;
