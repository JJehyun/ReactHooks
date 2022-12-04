import {
  useState,
  ChangeEvent,
  useTransition,
  useCallback,
  useEffect,
  useDeferredValue,
  useMemo,
} from "react";

function One() {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const deferredName = useDeferredValue(name);
  const result = useMemo(() => deferredName + "의 결과", [deferredName]);

  const onchange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(id);
    };
  });

  return (
    <>
      <div>{count}</div>
      <input value={name} onChange={onchange} />
      {deferredName
        ? Array(1000)
            .fill(null)
            .map((v, i) => <div key={i}>{result}</div>)
        : null}
    </>
  );
}
export default One;
