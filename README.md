# Jumio Ionic Demo

Example use of [@native-native/jumio](https://www.npmjs.com/package/@ionic-native/jumio) wrapper of [Jumio Mobile Plugin for Apache
 Cordova](https://github.com/Jumio/mobile-cordova) with Angular 9.1 & Capacitor 2.1. This demo, however, uses my published version of
  the Jumio Cordova plugin which adds necessary Android plugin.xml dependencies making implementation **much** easier:
  
* [Jumio Cordova](https://www.npmjs.com/package/jumio-cordova)  

Also, this version uses v3.6.0 of the [Android SDK](https://github.com/Jumio/mobile-sdk-android), which was recently released. I'm hoping
 Jumio accepts the Pull Request and starts keeping their own npm package updated.   

## Steps
* `git clone this repo`
* copy `src/environments.ts` to `src/environments.local.ts`
* Add your `API_TOKEN` & `API_SECRET` to `src/environments.local.ts`
* `npm run build`

### iOS
* `npx cap add ios`
* `npx cap open ios` & Add a provisioning profile in XCode 
 
Note that I had to remove the cordova versions of, and @ionic-native wrappers for, `SplashScreen` & `StatusBar` from `AppComponent` and
 replace
 them with their Capacitor equivalents before iOS version would work. 
 
### Android
* `npx cap add android`
* `npx cap open android` 
* Change `app/src/main/AndroidManifest.xml` line 6 `android:allowBackup="false"` (or add `tools:replace="android:allowBackup"` to 
`<application>` element)
* [Possible Android Build issues from Jumio](https://github.com/Jumio/mobile-cordova#faq)







   
