<template>
  <div>
    <h1 class="page-title">About</h1>
    <div class="profile-pic-container">
      <img :src="ProfilePic" alt class="profile-pic" />
    </div>
    <div class="about-content">
      <p>
        Hi, my name is Marcel Reppenhagen
        <span role="img" aria-label="waving-man">🙋‍♂️</span>
        <span role="img" aria-label="waving-hand">👋</span>
      </p>
      <p>
        I am a curious student with a passion for programming, web technologies and
        <span role="img" aria-label="cloud">☁️</span>-computing. I love exploring today's
        ever-evolving technologies and continously learn new things.
        <span role="img" aria-label="book">💡</span>
      </p>
      <p>
        My hometown is Berlin, where I currently pursue my masters degree in
        <b>Infomation Systems Management</b> at the <b>Technical University of Berlin</b>.
        <span role="img" aria-label="student">👨‍🎓</span>
      </p>
      <p>
        In my freetime I like to get outside, go running, hang out with friends or cruise on my
        longboard. If the weather allows, I occasionally go wakeboarding too.
        <span role="img" aria-label="surfer">🏄‍</span>
        <br />
        I also enjoy playing the piano or destroying friendships with board games.
        <span role="img" aria-label="laughing-smiley">😄</span>
      </p>
      <p>
        Oh, and I LOVE to travel!
        <span role="img" aria-label="heart-eyed-smiley">😍</span>
        <span role="img" aria-label="world">🌍</span>
      </p>
      <p>
        Feel free to contact me! I love meeting new people!
        <span role="img" aria-label="smiling-smiley">😊</span>
      </p>
    </div>
  </div>
</template>

<script>
import ProfilePic from "../static/images/profilepic.jpg"

export default {
  data: function() {
    return {
      ProfilePic,
    }
  },
}
</script>

<style>
.about-content {
  line-height: 30px;
  font-size: 18px;
}

.profile-pic-container {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}

.profile-pic {
  width: 250px;
  height: 250px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
