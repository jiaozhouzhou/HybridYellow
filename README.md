# 混合APP打包方案

## 第一步打未签名的APP包
# cordova build android --release

## 第二步生成签名证书test
# keytool -genkey -keystore test.keystore  -alias test -keyalg RSA -validity 10000

## 第三步使用证书签名APP
# jarsigner -verbose -keystore test.keystore -signedjar xiaokuaibo.apk app-release-unsigned.apk 'test'

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```
