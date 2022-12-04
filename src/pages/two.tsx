import {
  useState,
  ChangeEvent,
  useTransition,
  useCallback,
  useEffect,
} from "react";
function Two() {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [loading, startTransition] = useTransition();

  const onchange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    startTransition(() => {
      setResult(e.target.value);
    });
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
      {loading ? <div>로딩중 로딩중 로딩중 로딩중 로딩중</div> : null}
      <input value={name} onChange={onchange} />
      {name
        ? Array(1000)
            .fill(null)
            .map((v, i) => <div key={i}>{result}</div>)
        : null}
    </>
  );
}
export default Two;
