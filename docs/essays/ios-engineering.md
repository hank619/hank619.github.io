<!--
 * @Author: Hong.Zhang
 * @Date: 2024-05-31 13:49:14
 * @Description: 
-->
# IOS Engineering Related

## Ruby

The default mirror source for Ruby is international, and it can be replaced with aliYun's mirror source to speed up the download speed of Rubygems. You can check which libraries are available at [rubygem](https://rubygems.org/).

```bash
gem sources
gem source remove https://rubygems.org/
gem source add https://mirrors.aliyun.com/rubygems/
```

## CocoaPods

> CocoaPods is a ruby rubygem library, and CocoaPods itself is an IOS-specific dependency management tool used to manage pod libraries for IOS. You can check which libraries are available at [pod](https://cocoapods.org/).

> After using pods, xcode's Frameworks, Libraries, and Embedded Content are not used much. CocoaPods will automatically manage them. Only in the early stage of react-native <0.60, you need to manually drag .a files into it.

CocoaPods cache clearing

```bash
pod cache clean <PodName>
pod cache clean --all
```

CocoaPods mainly consists of two parts

- Spec. It manages all pod library information, stored on GitHub mainly to utilize server resources. Therefore, it often needs a `pod update` to fetch the latest git information to know about new pod libraries. Each pod in Spec is described using podspec, which includes information like source, source_files, etc. When running `pod install`, it will actually fetch the code from the pod library.

  > Spec comes with two sources by default, which can be viewed using `pod repo`: one is the master branch, corresponding to the main source; the other is the trunk branch, corresponding to the CDN source. By default, if no source is set in the podfile, the CDN source is used.

  > Spec can be created not only using the official CocoaPods but also by creating a GitHub repository as a private spec repository. Configure your private third-party libraries in the private spec repository, then add your private spec repository to the podfile.

  > Spec can be used online or locally, with slight differences in how podspec files are described.

  ::: details Online podspec example
  ```json
  {
  "name": "ZBarSDK",
  "version": "1.3.1",
  "platforms": {
    "ios": null
  },
  "license": "GNU LGPL 2.1",
  "summary": "QR and barcode scan library.",
  "homepage": "http://zbar.sourceforge.net/",
  "authors": {
    "Jeff Brown": "spadix@users.sourceforge.net"
  },
  "source": {
    "git": "https://github.com/ZBar/ZBar.git",
    "tag": "iPhoneSDK-1.3.1"
  },
  "description": "ZBar is an open source software suite for reading bar codes from various sources, such as video streams, image files and raw intensity sensors. It supports many popular symbologies (types of bar codes) including EAN-13/UPC-A, UPC-E, EAN-8, Code 128, Code 39, Interleaved 2 of 5 and QR Code.",
  "public_header_files": [
    "iphone/**/**/*.h",
    "include/*.h"
  ],
  "source_files": [
    "include/zbar.h",
    "zbar/**/*.h",
    "iphone/*.h",
    "iphone/include/**/*.h",
    "zbar/{config,decoder,error,image,img_scanner,refcnt,scanner,symbol}.c",
    "zbar/decoder/{codabar,code39,code93,code128,databar,ean,i25,qr_finder}.c",
    "zbar/qrcode/*.c",
    "iphone/*.m"
  ],
  "resources": "iphone/res/{zbar-*.png,zbar-help.html}",
  "frameworks": [
    "AVFoundation",
    "CoreGraphics",
    "CoreMedia",
    "CoreVideo",
    "QuartzCore"
  ],
  "libraries": "iconv",
  "xcconfig": {
    "EXCLUDED_SOURCE_FILE_NAMES[sdk=iphoneos*][arch=*]": "ZBarReaderViewImpl_Simulator.m",
    "EXCLUDED_SOURCE_FILE_NAMES[sdk=iphonesimulator*][arch=*]": "ZBarReaderViewImpl_Capture.m ZBarCaptureReader.m",
    "GCC_PREPROCESSOR_DEFINITIONS": "NDEBUG=1"
  },
  "prefix_header_file": "iphone/include/prefix.pch",
  "compiler_flags": "-w",
  "requires_arc": false
  }
  ```
  :::

  ::: details Local podspec example
  ```
  Pod::Spec.new do |s|

  s.name           = "LocalLibrary"
  s.version        =  '1.0.0'
  s.summary        = "LocalLibrary"
  s.homepage       = "https://dev.local-library.com"
  s.license        = "MIT"
  s.author         = { "LocalLibrary" => "dev@local-library.com" }
  s.ios.deployment_target = '10.0'
  s.source         = { :http => 'file:' + __dir__ + '/LocalLibrary.zip' }
  s.source_files   = 'LocalLibrary/**/*.{h,c,m,mm,swift}'
  ```

  Provide a zip file containing all source code.

  Finally, include it in the podfile using `pod 'LocalLibrary', :podspec => './LocalLibrary.podspec'`.
  :::

- Actual pod library. It typically consists of source code files hosted on GitHub. While compiling and running, CocoaPods will package the source code of the library into a framework, which includes headers and binary products. It then adds the framework to the main project's dependencies and configures header-related files in the project's `header_search_path`. Furthermore, pods are not only limited to hosting source code; they can also contain .a binary products.

  ::: details View header_search_path
  ```bash
  xcodebuild -showBuildSettings | grep HEADER_SEARCH_PATHS
  ```
  :::

  ::: details MyFramework.framework structure
  ```
  ├── Headers/      // Stores public header files
  ├── Modules/      // Stores module description files (if any)
  ├── Resources/    // Stores resource files
  ├── MyFramework/  // Compiled binary library
  ```
  :::
  
  ::: details Format of podspec with hosted binary products
  ```
  # Source location of the binary library
  s.source       = { :http => 'http://yourserver.com/YourLibrary-1.0.0.zip' }

  # Paths to the binary and header files within the zipped archive
  s.vendored_frameworks = 'YourLibrary.framework'
  s.public_header_files = 'YourLibrary.framework/Headers/**/*.h'

  # Or if you have a static library
  # s.vendored_libraries = 'libYourLibrary.a'
  ```
  :::

## ARC and MRC

- ARC (Automatic Reference Counting)
  
- MRC (Manual Reference Counting) is mostly deprecated. For old pod libraries that use MRC, you can avoid ARC compilation errors by declaring `"requires_arc": false` in the podspec.

## Relationship between podfile's target and xcode's target

The target in the podfile is used to manage the dependencies of each target (product), where each target can configure its independent third-party dependency chain.

In xcode, you need to create a new target with a name that exactly matches the target name in the podfile to apply the dependency management from the podfile.