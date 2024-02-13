const Counter = (props) => {
  const { counter, setCounter, children } = props;
  return (
    <div>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <span>{children}</span>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
};

export default Counter;
