<!--
 * @Author: Hong.Zhang
 * @Date: 2024-05-20 14:10:12
 * @Description: 
-->
# How to Implement a Countdown Functionality in React

## setTimeout

::: warning Disadvantages
- Inaccurate timing as it triggers every 1000 milliseconds.
- Frequent triggering of useEffect leading to unmounting and re-rendering.
:::

```jsx
const [countdown, setCountdown] = useState(0);

const startCountdown = () => {
  setCountdown(10);
};

useEffect(() => {
  if (countdown <= 0) {
    return;
  }
  const timeOut = setTimeout(() => {
    setCountdown((v) => v - 1);
  }, 1000);
  return () => {
    clearTimeout(timeOut);
  };
}, [countdown]);

<div>
  <div>{`the state is ${countdown}`}</div>
  <button
    type="button"
    onClick={() => {
      startCountdown();
    }}
  >
    start
  </button>
</div>
```

## setInterval

### Using count variable
::: warning Disadvantages
- Cannot be reused multiple times; once the countdown ends, it cannot be reused.
:::

```jsx
const timerRef = useRef<any>(null);
const [reducerState, reducerDispatch] = useReducer((state) => {
  if (state === 1) {
    clearInterval(timerRef.current);
  }
  return state - 1;
}, 10);

const startCountdown = () => {
  timerRef.current = setInterval(() => {
    reducerDispatch();
  }, 1000);
};

<div>
  <div>{`the state is ${reducerState}`}</div>
  <button
    type="button"
    onClick={() => {
      startCountdown();
    }}
  >
    start
  </button>
</div>
```

### Using hooks
[ahooks-useCountDown](https://github.com/alibaba/hooks/blob/master/packages/hooks/src/useCountDown/index.ts)