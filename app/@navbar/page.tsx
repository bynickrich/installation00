import { NavBarHints } from "@/ui/shared/NavBar";

export default function HomeNavBar() {
  return (
    <NavBarHints
      hints={[
        { keys: ["A", "D"], label: "Browse" },
        { keys: ["Enter"], label: "Open" },
      ]}
    />
  );
}
