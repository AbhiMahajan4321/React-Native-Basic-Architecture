This project will be a social media platform copy like instagram 


Bottom Tabs:
- Media
- Search
- Add (more like a button, will open galery, and after selecting and clicking TICK, will take user to next screen where he will type caption) (for now, app only supports Image posts, not videos)
- Viral
- Profile

Other screens
- Notifications


Security Screens (In settings)
- Change Password
- Change Username
- Change Email or Phone number
- Add 2 Step Verification (with 4 digit pin)


Future Additions
- Settings





this project will have a first screen (Bottom Tab) called MEDIA,

MEDIA: 

In Media, User will scroll and can see posts of other people
 
Posts will have LIKE, COMMENT, CAPTION (SAVE, SHARE IN FUTURE (AFTER INBOX IMPLEMENTATION))
Owner can Edit Caption, Delete Post.



Second Bottom Tab will be SEARCH, Here user can search other users

SEARCH:
Here will be used debounce and global search on username,


3rd bottom tab will be more like a button
ADD (for adding posts)





4rd Bottom Tab will be
VIRAL:
The more likes, the more upper the post, 
will user a priority critea, when a post will hit 1 like, priority raise by 1, but after 1 day of post, priority decrease by 10, but will be > 0, 



5th Bottom tab will be
PROFILE: 
(to be decided)



******************************************


to start a react native project, first install all these packages and then create a build, saves you some time to rebuild



to create a project, initialize:

npx @react-native-community/cli@latest init MyBareApp


then,[text](package.json) [text](src)

npm install @react-native/new-app-screen@0.86.0 @react-navigation/bottom-tabs@^7.18.6 @react-navigation/elements@^2.9.28 @react-navigation/native@^7.3.5 @react-navigation/native-stack@^7.17.7 react@19.2.3 react-native@0.86.0 react-native-gesture-handler@^3.0.2 react-native-paper@^5.15.3 react-native-safe-area-context@^5.5.2 react-native-screens@^4.25.2 dotenv react-native-dotenv

npm install lucide-react-native
npm install react-native-svg

*Lucide react native depends on react native svg*

npm install @react-navigation/drawer@^7.7.10 react-native-worklets@0.7.4 react-native-country-codes-picker@^2.3.5 react-native-date-picker@^5.0.13 axios@^1.13.2 

npm install react-native-reanimated@4.5.1 react-native-worklets@0.10.1 react-redux@^9.2.0 redux-persist@^6.0.0

------------------


after installing reanimated, add plugin in your babel.config

eg:
module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: ['react-native-reanimated/plugin'],
};


------------------

When adding env and env.d.ts module, eg:

declare module '@env' {
	key_name: value_type (eg, string, number, etc.)
}


also add its plugin in babel.config as well,

eg:

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        allowUndefined: true,
      }
    ],

    'react-native-reanimated/plugin'],
};


*Remember: reanimated plugin should always be last*

---------------------------------------------











