import { StackHandler } from "@stackframe/stack";
import { stackServerApp } from "../../../stack";
import WorkspaceHeader from "@/app/(routes)/workspace/_components/WorkspaceHeader";

export default function Handler(props) {
  return (
    <>
      <WorkspaceHeader />
      <StackHandler fullPage app={stackServerApp} routeProps={props} />;
    </>
  );
}
