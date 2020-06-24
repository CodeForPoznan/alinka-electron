# Alinka

[![Build status](https://ci.appveyor.com/api/projects/status/t9ku3addyo7jwa2q/branch/master?svg=true)](https://ci.appveyor.com/project/CodeForPoznanBot/alinka-electron/branch/master) [![Join Slack](https://img.shields.io/badge/slack-join%20chat-4a154b)](https://join.slack.com/t/codeforpoznan/shared_invite/enQtNjQ5MTU1MDI0NDA0LWNhYTA3NGQ0MmQ5ODgxODE3ODJlZjc3NWE0NTMzZjhmNDBkN2QwMzNhYWY5OWQ5MGE2OGM3NjAyODBlY2VjNjU)

(_for English scroll down_)

**Alinka** jest aplikacją desktopową, która wspiera wydawanie orzeczeń, wraz z innymi niezbędnymi dokumentami przez polskie Poradnie Psychologiczno - Pedagogiczne.

Nazwa **Alinka** jest imieniem rzeczywistej osoby, która wykonuje tą nużącą, ale bardzo potrzebną pracę. Mam nadzieję, że pewnego dnia ta aplikacja pomoże w jej pracy. :)

---

**Alinka** is a desktop application which supports creation of decisions, decreese and others documents by Polish Psychological-Pedagogical Counseling Institution.

Application's name: **Alinka** is name of real person, which has to do that boring, but very important work. I hope that some day that application will help in her work. :)

## Development environment

### Prerequirements
Node 10.x (you can use exacly the same Node version that we use on [Appveyor](appveyor.yml)).

### Dependencies
Install Node dependencies
```
npm install
```
After that we need to rebuild binary dependencies using `electron-rebuild`.
```
npm run rebuild
```
That probaly will require additional OS-based dependencies on Ubuntu. On Windows we need to install Python and Visual Studio C++ toolkit. More detailed description is available in [node-gyp README](https://github.com/nodejs/node-gyp#on-windows). Be aware, that the description there suggest to set `msvs_version` to `2017` in `npm` but it occurs, that sqlite module requires in fact MS Visual Studio 2015. Necessery tools (look for *Redistributables and Build Tools* and then for *Microsoft Build Tools 2015 Update 3* and *Microsoft Visual C++ 2015 Redistributable Update 3*) can be downloaded from [https://visualstudio.microsoft.com/vs/older-downloads/](https://visualstudio.microsoft.com/vs/older-downloads/).

### Run
Run application
```
npm run start
```

### Generate documents using fixtures
For testing purpose, documents can be rendered without _react_ frontend, using bare `npm` command:
```
npm run gen_documents [DOCUMENT_TYPE] [DECISION_TYPE]
```
inserting `DECISION`, `PROTOKOL`, `ZARZADZENIE`, `ZAWIADOMIENIE` in place of `[DOCUMENT_TYPE]`
and `SPECJALNE`, `INDYWIDUALNE`, `INDYWIDUALNE_ROCZNE`, `REWALIDACYJNE`, `OPINIA` in place of `[DECISION_TYPE]`


## Coding rules

1. General components (for example Dropdown, Icon which you can use anywhere in the app) place in components folder but custom components which depends on a parent component place within parent folder (Sidebar -> Navigation)

2. Start components' name (class component as well functional component) and styles class name with uppercase

3. Use css modules (https://github.com/css-modules/css-modules) to style components
Usage:
```javascript
import styles from "./Header.scss";

const Header = () => (
  <header className={styles.Header}>
   <img className={styles.Image} src="test-image.jpg" />
  </header>
);
```

4. Name main component container the same as component name
```javascript
const Header = () => (
  <header className={styles.Header}>
   <img className={styles.Image} src="test-image.jpg" />
  </header>
);
```

5. If a component style has to have custom styles inside some component use css modules exceptions -> :global with BEM methodology - so a block name should be the same as a component name, use camelCase for the rest modifier part
example:

Header.js file:
```javascript
const Header = () => (
  <header className={styles.Header}>
   <img className="Header__image" src="test.jpg" />
  </header>
);
```

Header.scss file:
```css
.Header {
  :global(Header__image) {
  /whatever you want/
  }
}
```

6. We want to the build app which is up to date with React features that's why when you can use React hooks and its state instead of class component

## Distribution

Creates a dist folder and packages it into a Windows installer (the installer folder can be copied to a Windows OS and executed):
`npm run dist`
