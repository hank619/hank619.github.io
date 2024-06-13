<!--
 * @Author: Hong.Zhang
 * @Date: 2024-06-12 17:45:20
 * @Description: 
-->
# Phone Hardware Detection

There are numerous hardware components in mobile phones. How can we determine the condition of these hardware components? This article provides a solution for detecting the hardware of mobile phones. The detection methods can be broadly categorized into:
©
  - Technical solution, implemented through code
  - Engineering solution, implemented through business methods which will be enclosed in brackets in Implementation section
  - Hybrid solution, combining technical and engineering solution
  
## Implementation

| Hardware Component | Weight | Android                           | IOS                                | Web                              |
| ------------------ | ------ | --------------------------------- | ---------------------------------- | -------------------------------- |
| Front camera       | 3      | (Take photo)                      | (Take photo)                       | (Take photo)                     |
| Rear camera        | 3      | (Take photo)                      | (Take photo)                       | (Take photo)                     |
| Touchscreen        | 3      | (Multi-touch)                     | (Multi-touch)                      | (Multi-touch)                    |
| Bluetooth          | 2      | BluetoothAdapter                  | CoreBluetooth                      | Bluetooth.getAvailability        |
| Wifi               | 2      | WifiManager + ConnectivityManager | NWPathMonitor                      | NetworkInformation               |
| Face ID/Touch ID   | 2      | BiometricManager                  | LAContext                          | :x:                              |
| Fingerprint        | 2      | FingerPrintManager                | LAContext                          | :x:                              |
| Battery            | 2      | BatteryManager                    | UIDevice                           | BatteryManager.getBattery        |
| Microphone         | 1      | AudioManager/(Record)             | AVAudioSession/(Record)            | navigator.mediaDevices           |
| External speaker   | 1      | AudioManager + (Play random OTP)  | AVAudioSession + (Play random OTP) | (Play random OTP)                |
| Earpiece           | 1      | AudioManager + (Play random OTP)  | AudioManager + (Play random OTP)   | :x:                              |
| Vibration          | 1      | (Vibrate for N seconds randomly)  | (Vibrate for N seconds randomly)   | (Vibrate for N seconds randomly) |
| Volume keys        | 1      | KeyDown + Volume change listener  | Volume change listener             | keydown + Volume change listener |
| Proximity sensor   | 1      | SensorManager                     | UIDevice                           | ProximitySensor                  |
| Accelerometer      | 1      | SensorManager                     | UIDevice                           | DeviceMotionEvent                |
| Flashlight         | 1      | (Turn on flashlight for photo)    | (Turn on flashlight for photo)     | :x:                              |
| GPS                | 1      | LocationManager                   | CoreLocation                       | navigator.geolocation            |

## Scoring

Different weights are assigned to various hardware components based on their priority. Then, the scores are calculated by combining the weights of all detected items, resulting in a total score out of 100.

```
totalWeight = sum(weight)
totalScore = (sum of weights of detection passed items) / totalWeight * 100
```

## Caveat

This solution assumes that the mobile phone is able to boot and run apps or open a browser, so components like the `CPU` and `RAM` are assumed to be functioning properly and do not need to be tested.
