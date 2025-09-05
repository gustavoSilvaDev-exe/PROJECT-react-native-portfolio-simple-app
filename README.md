# 📱 Portfolio Simple App

**Portfolio Simple App** is a mobile application built with **React Native** and **Expo**.
It’s a simple, minimal portfolio app that displays personal information, skills, and social links using a clean **bottom tab navigation** interface.

---

## 🚀 Features

* **Bottom Tab Navigation** with two main screens:

  * 🏠 **Home** → Displays profile photo, name, and quick action buttons (LinkedIn, Behance, Email).
  * ⭐ **Skills** → Shows skills with ratings and a contact button.
* **Custom styling** with dark theme and orange highlights.
* **Responsive design** for different screen sizes.

---

## 🛠️ Tech Stack

* **React Native** (Expo)
* **TypeScript**
* **React Navigation** (`@react-navigation/native`, `@react-navigation/bottom-tabs`)
* **Expo Icons** (`@expo/vector-icons`)

---

## 📂 Project Structure

```
src/
│
├── routes/
│   ├── index.tsx
│   └── bottom-tabs.routes.tsx
│
├── screens/
│   ├── HomeScreen.tsx
│   ├── SkillScreen.tsx
│   └── styles/
│
└── assets/
    └── foto.png
```

* **App.tsx** → Main entry point calling routes.
* **index.tsx** → Sets up navigation container.
* **bottom-tabs.routes.tsx** → Defines bottom tab navigator.
* **HomeScreen.tsx** → Displays profile info and links.
* **SkillScreen.tsx** → Displays skills and ratings.

---

## 📦 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/portfolio-simple-app.git
   cd portfolio-simple-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the project:

   ```bash
   npx expo start
   ```

---

## 💡 Usage

* **Navigate** between *Home* and *Skills* using the bottom tab bar.
* **Home Tab** → Tap buttons to open LinkedIn, Behance, or Email (to be linked).
* **Skills Tab** → View skills with ratings and tap “Contact Me” to connect.

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Gustavo Silva**
📧 [gugahenriquebatista@gmail.com](mailto:gugahenriquebatista@gmail.com)
