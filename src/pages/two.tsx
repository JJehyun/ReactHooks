import { useEffect, ReactNode } from "react";
const cache = new Map();

type test = {
  children: ReactNode;
  id: string;
  delay: number;
};
function Two({ id, delay, children }: test) {
  let state = cache.get(id);
  if (!state) {
    state = new Promise((resolve) =>
      setTimeout(() => {
        cache.set(id, true);
        resolve(true);
      }, delay)
    );
    cache.set(id, state);
  }
  if (state !== true) throw state;

  useEffect(
    () => () => {
      cache.delete(id);
    },
    [id]
  );

  return <>{children}</>;
}
export default Two;
