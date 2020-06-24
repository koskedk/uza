import { registerApplication, start } from "single-spa";

const s = () => true;

registerApplication({
  name: "@uza/navbar",
  app: () => System.import("@uza/navbar"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@uza/shop",
  app: () => System.import("@uza/shop"),
  activeWhen: ["/shop"],
});

registerApplication({
  name: "@uza/customer",
  app: () => System.import("@uza/customer"),
  activeWhen: ["/customer"],
});

start({
  urlRerouteOnly: true,
});
