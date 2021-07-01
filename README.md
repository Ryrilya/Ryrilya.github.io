#📚 <span style="color: red;">Nome del progetto</span>

##Index
- [1. Main Idea](#1-main-idea)
- [2. Interaction](#2-interaction)
    - [🎮 Gamification](#-gamification)
- [3. Production and distribution](#3-production-and-distribution)
- [4. Technologies](#4-technologies)
  - [🌍 Web Based](#-web-based)
  - [📱 Application Based](#-application-based)
- [Notes](#notes)

## 1. Main Idea
Making an interactive book with markers and recognizable images / patterns throughout it, thus capable of showing objects, images, videos which are interactive. This way, teachers and students can both enjoy the classroom experience.

## 2. Interaction
The user opens the application up on their phone. The school provides them with books containing either markers or images that are used in lieu of markers. The phone's camera is thus pointed at the aforementioned markers/images, displaying a variety of data (depending on the marker's subject). This data is meant to be as interactive as possible: for example, the app could display a 3D human body that can be explored by touching its parts on the screen. Text would then appear around it, optionally with a short voiceover.  Further voiceovers (which could be available in Italian and English) would be available on-demand, reading text paragraphs that can otherwise be read directly as well. 

#### 🎮 Gamification
Measures should be taken to ensure the application is as gamelike as possible. Something that can be implemented relatively easily across the entire app are quizzes, but more engaging, dynamic (and thus harder to develop) mini-games should also be explored.
## 3. Production and distribution
The books production and ditribution will remain mostly the same as they have ever been, exception made for marker's ink. However, we could find a better way to integrate those with pictures already present in the books(image recognition).

## 4. Technologies
### 🌍 Web Based
- <img src="http://inspiredtoeducate.net/inspiredtoeducate/wp-content/uploads/2017/11/aframe-logo.png" style="width:2rem; height: 2rem;" />[A-Frame](https://aframe.io/)
- <img src="https://cdn-images-1.medium.com/max/1200/1*i-CB8-C86IIisODhjt5jzw.png" style="width:2rem; height: 2rem;" />[AR.js](https://ar-js-org.github.io/AR.js-Docs/)

**➕ Advantages**
- No need for installing any application on the device(s)
- Click on the link and ready to go
- Programming languages are HTML, CSS and JS which we already know
- Less memory usage
- More devices are compatible with the web application, since it only requires a browser which supports [WebGL](https://get.webgl.org/) and [WebRTC](https://webrtc.org/)
- Open Source

**➖ Disadvantages**
- Bad connection will make the experience fail
- Less performing than Application Based

---
### 📱 Application Based
<img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F2.bp.blogspot.com%2F_ZRhheVA2mqQ%2FS7Jbf1MKSmI%2FAAAAAAAAABA%2FVMDM5KRfr7E%2Fs1600%2FunityLogo.png&f=1&nofb=1" style="width:2rem; height: 2rem;" /> [Unity](https://unity.com/) + <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fskywell.software%2Fwp-content%2Fuploads%2F2019%2F05%2Fvuforia-logo.png&f=1&nofb=1" style="width:2rem; height: 2rem;" />[Vuforia](https://developer.vuforia.com/) is the way to go if we choose to take this path

**➕ Advantages**
- More performing
- More documentation is available on the internet
- More potentially useful features

**➖ Disadvantages**
- Both of us haven't had any experience with it so far
- More memory usage (storage)
- Unity trademark is present when the application is launched if we keep using the free version
- Distribution of the application requires Application Stores accounts (with consequential billings)

## Notes
- **Gamification**: structuring the application like a game, to increase the students' engagement.
