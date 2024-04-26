# Web fingerprint research

> Some business model required unique ID for fraud detection, it works for App since we can get Android ID for Android device and UUID for IOS devices. As for website, there is no such unique ID and brings great challenge to us if we wants to get unique ID on website.

## Popular solutions

Currently, there are two major libraries to generate a consistent and unique ID for Web, fingerprintjs and clientjs

This is a brief comparison of [npm trends](https://npmtrends.com/@fingerprintjs/fingerprintjs-vs-clientjs)

## Commercial consideration

- fingerprintjs is only free for commercial usage with v3 and below and it declares that accuracy is 40%-60%, the paid version starts from $99/month, for more details, you can check [pricing](https://fingerprint.com/pricing/)
- clientjs is free to use without any limitation 

## Consistency Comparison

| Test case                                                  |      clientjs      |   fingerprintjs v3 |
| ---------------------------------------------------------- | :----------------: | -----------------: |
| Browser upgrade                                            |        :x:         | :white_check_mark: |
| Split screen                                               |        :x:         |                :x: |
| Incognito mode                                             | :white_check_mark: | :white_check_mark: |
| Resize window size                                         | :white_check_mark: | :white_check_mark: |
| Dev tool - mobile view                                     |        :x:         |                :x: |
| Dev tool - mobile view - change model                      |        :x:         |                :x: |
| Uninstall browser extension                                | :white_check_mark: | :white_check_mark: |
| Switch from Chrome to Safari                               |        :x:         |                :x: |
| New tab                                                    | :white_check_mark: | :white_check_mark: |
| Mobile phone-desktop site                                  |        :x:         | :white_check_mark: |
| Close and reopen browser                                   | :white_check_mark: | :white_check_mark: |
| Clear app data - without Google account login              |        :x:         |                :x: |
| Clear app data - with Google account login                 | :white_check_mark: | :white_check_mark: |
| Uninstall and reinstall app - without Google account login |        :x:         |                :x: |
| Uninstall and reinstall app - with Google account login    | :white_check_mark: | :white_check_mark: |

## Unique Comparison

| Test case        |      clientjs      |   fingerprintjs v3 |
| ---------------- | :----------------: | -----------------: |
| Different device | :white_check_mark: | :white_check_mark: |

## Conclusion

- Fingerprintjs is likely to meet the announced accuracy of 40%-60%
- Fingerprintjs has better performance with two more test cases of `Browser upgrade` and `Mobile phone-desktop` site while the other cases keep the same
- For free use, prefer to choose fingerprintjs v3 if the accuracy is acceptable for us, otherwise, we would better choose a paid version of fingerprintjs