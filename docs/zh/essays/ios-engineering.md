<!--
 * @Author: Hong.Zhang
 * @Date: 2024-05-31 10:52:58
 * @Description: 
-->
# IOS工程化相关

## Ruby

ruby镜像源默认是国外的，可以替换为aliyun的镜像源，加快rubygem的下载速度，可以通过[rubygem](https://rubygems.org/)查看有哪些可用的库
```bash
gem sources
gem source remove https://rubygems.org/
gem source add https://mirrors.aliyun.com/rubygems/
```

## Cocoadpods

> Cocoapods是ruby的一个rubygem库，然后Cocoapods本身自己又是一个IOS专用的依赖管理工具，用来管理IOS用到的pod库, 可以通过[pod](https://cocoapods.org/)查看有哪些可用的库

> 使用pods以后，xcode的Frameworks, Libraries, and Embedded Content基本不会用到了，Cocoaspods会自动帮忙管理。只有早期的rn<0.60的时候才需要手动拖.a文件到里面

Cocoaspods缓存清理

```bash
pod cache clean <PodName>
pod cache clean --all
```

Cocoaspods主要由两部分组成

- Spec。用户管理所有的pod库信息，放在了github上，主要是为了白嫖服务器资源，所以经常需要`pod update`拉取最新的git信息才知道新的pod库。Spec里面每个pod都用podspec描述了pod的source，source_files等信息，在`pod install`的时候会去真正的pod库去拉取代码。
  
  > Spec自带的有两个源，通过`pod repo`查看，一个是master分支，对应主源；一个是trunk分支，对应CDN源。默认在podfile不设置source，启用的就是CDN源。

  > spec不止是用Cocoapods官方的，也可以自己创建一个github仓库作为私有的spec仓库，并在私有spec仓库里面配置自己的私有三方库，然后在podfile里面把自己的私有spec仓库也加进去

  > spec不止可以用在线的，还可以用本地的，本地的和在线的podspec文件描述稍有差异

  ::: details 在线podpsec示例
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

  ::: details 本地podspec示例
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
  同时提供zip文件包含所有源码。

  最后在podfile里面通过  pod 'LocalLibrary', :podspec => './LocalLibrary.podspec'来引入
  :::

- 真正的pod库。一般都是源码文件，托管在github上。编译运行的时候，Cocoapods会把该库的源码先打包成framework的形式，里面包含了header和二进制产物，然后吧framework添加到主项目的依赖李米娜，并把header相关的文件配置到主项目的`header_search_path`中。当然，pod也不一定只能托管源代码，也可以是.a二进制产物
  
  ::: details 查看header_search_path
  ```bash
  xcodebuild -showBuildSettings | grep HEADER_SEARCH_PATHS
  ```
  :::

  ::: details MyFramework.framework结构
  ```
  ├── Headers/      // 存放公共头文件
  ├── Modules/      // 存放模块描述文件（如果有）
  ├── Resources/    // 存放资源文件
  ├── MyFramework/  // 实际的编译好的二进制库
  ```
  :::
  
  ::: details 托管二进制产物时podspec的格式
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

## ARC和MRC

- ARC Automatic Reference Counting
  
- MRC Manual Reference Counting 基本已弃用，使用MRC的老的pod库可以通过在podspec中声明`"requires_arc": false`来避免应用ARC编译报错

## podfile的target和xcode的target的关系

podfile的target是用来管理每个target(产品)的依赖，每个target可以配置自己独立的三方依赖链

xcode需要新建target，名字和podfile的target名字完全匹配起来，才能应用到podfile里面的依赖管理

