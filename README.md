**Alinka** is a desktop application which supports creation of decisions, decreese and others documents by Polish Psychological-Pedagogical Counseling Institution.

Application's name: *"Alinka"* is name of real person, which has to do that boring, but very important work. I hope that some day that application will help in her work. :)

---

**Alinka** jest aplikacją desktopową, która wspiera wydawanie orzeczeń, wraz z innymi niezbędnymi dokumentami przez polskie Poradnie Psychologiczno - Pedagogiczne.

Nazwa *"Alinka"* jest imieniem rzeczywistej osoby, która wykonuje tą nużącą, ale bardzo potrzebną pracę. Mam nadzieję, że pewnego dnia ta aplikacja pomoże w jej pracy. :)

---
**Rules**:

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
---

**Development**:
*Run the application localy with developer tools:*
`npm run start`

Distribution:
*Creates a dist folder and packages it into a windows installer:*:
(the installer folder can be copied to a windows OS and executed)
`npm run dist`
