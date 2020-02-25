import React from "react";
import loadable from "@loadable/component";

const Home = loadable(() => import("../components/Dashboard/Home/Home"));
const FormSteps = loadable(() =>
  import("../components/Dashboard/Form/FormSteps")
);
const Children = loadable(() =>
  import("../components/Dashboard/Children/Children")
);
const Statements = loadable(() =>
  import("../components/Dashboard/Statements/Statements")
);

const routes = [
  {
    id: "home",
    path: "/",
    exact: true,
    component: <Home />
  },
  {
    id: "createDocument",
    path: "/create-document",
    exact: true,
    component: <FormSteps />
  },
  {
    id: "children",
    path: "/children",
    exact: true,
    component: <Children />
  },
  {
    id: "statements",
    path: "/statements",
    exact: true,
    component: <Statements />
  }
];

export default routes;
