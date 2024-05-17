<template>
  <div id="wrapper">
    <h1>Operating Systems</h1>
    <MacOS
      v-for="os in operatingSystems.MacOS"
      :key="os.name"
      :is-favorite="os.favorite" 
      @toggle-favorite="receiveEmit">
      <template v-slot:header>
        <h2>{{ os.name }}</h2>
      </template>
      <template v-slot:description>
        <p>{{ os.desc }}</p>
      </template>
    </MacOS>
    <br>
    <Windows
      v-for="os in operatingSystems.Windows"
      :key="os.name"
      :is-favorite="os.favorite" 
      @toggle-favorite="receiveEmit">
      <template v-slot:header>
        <h2>{{ os.name }}</h2>
      </template>
      <template v-slot:description>
        <p>{{ os.desc }}</p>
      </template>
    </Windows>
    <br>
    <Linux
      v-for="os in operatingSystems.Linux"
      :key="os.name"
      :is-favorite="os.favorite" 
      @toggle-favorite="receiveEmit">
      <template v-slot:header>
        <h2>{{ os.name }}</h2>
      </template>
      <template v-slot:description>
        <p>{{ os.desc }}</p>
      </template>
    </Linux>
  </div>
</template>

<script>
import MacOS from './components/MacOS.vue';
import Windows from './components/Windows.vue';
import Linux from './components/Linux.vue';

export default {
  components: {
    MacOS,
    Windows,
    Linux
  },
  data() {
    return {
      operatingSystems: {
        MacOS: [
          { name: 'MacOS', desc: 'An operating system created by Apple Inc.', favorite: false }
        ],
        Windows: [
          { name: 'Windows', desc: 'An operating system created by Microsoft.', favorite: false }
        ],
        Linux: [
          { name: 'Linux', desc: 'An open-source operating system created by Linus Torvals.', favorite: false }
        ]
      }
    };
  },
  methods: {
    receiveEmit() {
      alert('Added to favorite!');
    }
  }
};
</script>

<style>
  #wrapper {
    display: block;
    flex-wrap: wrap;
  }
  #wrapper > div {
    border: dashed black 1px;
    flex-basis: 120px;
    margin: 10px;
    padding: 10px;
    background-color: rgb(94, 239, 247);
  }
</style>
