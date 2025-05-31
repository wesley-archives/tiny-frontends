import Settings from "./Settings";
import ShareList from "./ShareList";

export default function Menu() {
  return (
    <section className="flex flex-col gap-4 w-full">
      <ShareList />
      <Settings />
    </section>
  );
}
