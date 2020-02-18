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

const routes = {
  panel: {
    id: "home",
    path: "/",
    exact: true,
    component: <Home />
  },
  create: {
    id: "createDocument",
    path: "/create-document",
    exact: true,
    component: <FormSteps />
  },
  children: {
    id: "children",
    path: "/children",
    exact: true,
    component: <Children />
  },
  statements: {
    id: "statements",
    path: "/statements",
    exact: true,
    component: <Statements />
  }
};

export default routes;
