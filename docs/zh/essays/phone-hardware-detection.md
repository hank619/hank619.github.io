<!--
 * @Author: Hong.Zhang
 * @Date: 2024-06-12 16:53:41
 * @Description: 
-->
# 硬件检测

> 手机内部硬件众多，如何才能知道硬件的好坏呢，本文提供一种对手机内部硬件检测的方案
> 检测方式总体可以分为

  - 技术方案，通过代码实现
  - 工程方案，通过业务方法实现。在下方用括号包裹
  - 混合方案，混合使用技术和业务实现
  
## 实现

| 硬件部位     | 权重 | Android                           | IOS                            | Web                       |
| ------------ | ---- | --------------------------------- | ------------------------------ | ------------------------- |
| 前置摄像头   | 3    | (拍照)                            | (拍照)                         | (拍照)                    |
| 后置摄像头   | 3    | (拍照)                            | (拍照)                         | (拍照)                    |
| 触控屏       | 3    | (多点触控)                        | (多点触控)                     | (多点触控)                |
| 蓝牙         | 2    | BluetoothAdapter                  | CoreBluetooth                  | Bluetooth.getAvailability |
| Wifi         | 2    | WifiManager + ConnectivityManager | NWPathMonitor                  | NetworkInformation        |
| 人脸/Face ID | 2    | BiometricManger                   | LAContext                      | :x:                       |
| 指纹         | 2    | FingerPrintManager                | LAContext                      | :x:                       |
| 电池         | 2    | BatteryManager                    | UIDevice                       | BatteryManager.getBattery |
| 麦克风       | 1    | AudioManager/(录音)               | AVAudioSession/(录音)          | navigator.mediaDevices    |
| 外置扬声器   | 1    | AudioManager + (播放随机OTP)      | AVAudioSession + (播放随机OTP) | (播放随机OTP)             |
| 听筒         | 1    | AudioManager + (播放随机OTP)      | AudioManager + (播放随机OTP)   | :x:                       |
| 震动         | 1    | (随机第N秒震动)                   | (随机第N秒震动)                | (随机第N秒震动)           |
| 音量键       | 1    | KeyDown + 音量变化监听            | 音量变化监听                   | keydown + 音量变化监听    |
| 渐进传感器   | 1    | SensorManager                     | UIDevice                       | ProximitySensor           |
| 加速度传感器 | 1    | SensorManager                     | UIDevice                       | DeviceMotionEvent         |
| 闪光灯       | 1    | (打开闪光灯拍照)                  | (打开闪光灯拍照)               | :x:                       |
| gps          | 1    | LocationManager                   | CoreLocation                   | navigator.geolocation     |

## 评分

根据不同硬件的优先级给与不同的得分，然后综合所有检测项目，计算总得分，满分100

```
总权重 = 求和(权重)
总得分 = 求和(通过检测的项目权重) / 总权重 * 100
```

## 注意

本方案基于手机至少能够开机运行并且运行App或者打开浏览器的情况，所以CPU，RAM之类的，可以默认是正常的，故不需要检测。