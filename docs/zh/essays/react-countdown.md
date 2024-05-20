<!--
 * @Author: Hong.Zhang
 * @Date: 2024-05-20 13:47:23
 * @Description: 
-->
# 如何用在react中实现一个倒计时的功能

## setTimeout

::: warning 缺点
每次都是1000毫秒一个timeout，不精准
频繁地会触发useEffect的卸载和重渲染
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

### 配合count计数
::: warning 缺点
无法反复使用，一次计数结束以后就不能再使用
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

### 使用hooks
[ahooks-useCountDown](https://github.com/alibaba/hooks/blob/master/packages/hooks/src/useCountDown/index.ts)