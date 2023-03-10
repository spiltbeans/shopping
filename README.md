# shopping
## PROJECT GOALS
> Our central goal was to make shoppers feel better about e-commerce

> Our two achievements were:
> 1. Give shoppers positive feedback on their purchases
> 2. Gives shoppers the ability to disuade them from shopping beyond their means
---
## TECHNOLOGY
- Framework: [React](https://reactjs.org/)
- Libraries/CSS: [OpenAI](https://platform.openai.com/docs/introduction), [MaterialUI](https://mui.com/material-ui/getting-started/overview/), [Tailwind](https://tailwindcss.com/)
---
## PRODUCTIVITY
- Notes/mindmappipng: [Excalidraw](https://excalidraw.com/)
- Design: [Figma](https://www.figma.com/)
- Code collaboration: [Github](https://github.com/spiltbeans/shopping)
---
## DEPLOYMENT

### Build (LINUX)
1. Clone the project
```
git clone https://github.com/spiltbeans/shopping.git
```
2. Add environment variables
touch .env && nano .env
The following environment variables are required:
```
REACT_APP_OPENAI_ORG=<OPENAI ORGANIZATION NUMBER>
REACT_APP_OPENAI_KEY=<OPENAI API KEY>
```

3. Build the React app
```
npm run build
```

### Add the build as a Chrome extension
1. Enter the following into your Chrome browser searchbar:
```
chrome://extensions
```

2. Switch your browser to *developer mode* in by toggling the swtich in the top right corner

3. Select *LOAD UNPACKED*

4. Navigate to and select the /build folder in the project

> The extension should now show up in your *Extensions* bar, labelled as "InnerVoice"

> Navigate to [Amazon](https://www.amazon.ca/) to use

---
## REFERENCES
- [Font: Titillium Web](https://fonts.google.com/specimen/Titillium+Web?category=Serif,Sans+Serif,Display,Monospace&preview.text=Eyas%20Valdez&preview.text_type=custom)
- [Font: Barlow](https://fonts.google.com/specimen/Barlow?category=Serif,Sans+Serif,Display,Monospace&preview.text=Eyas%20Valdez&preview.text_type=custom)
- [Extension video](https://www.youtube.com/watch?v=VP7q-c9_is8)
- [React as extension](https://itnext.io/create-chrome-extension-with-reactjs-using-inject-page-strategy-137650de1f39)
- [Login extension](https://medium.com/swlh/create-a-email-password-login-system-for-your-chrome-extension-c36cff6d5e40)
- [Connect background->forefront](https://www.youtube.com/watch?v=fPsBrYD0uGU)
- [Purse sensitive data from commit history](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)
---
