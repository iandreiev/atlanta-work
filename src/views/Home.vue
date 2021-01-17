<template>
  <div id="hello">
    <div v-for="i in pages" :key="i.type">
      <section class="main" v-show="i.step == step">
        <img
          v-for="(img, index) in i.gfx"
          :key="index"
          :src="`${publicPath}img/web/${img.file}.png`"
          :class="img.class"
          :alt="img.alt"
        />
        <div class="wrapper__main">
          <div class="d-column w-520">
            <div class="main__header">
              <img
                class="main__header_logo"
                src="../assets/img/logo.png"
                alt="logo"
              />
              <p class="main__header_text">
                ATLANTA
                <br />
                SOLUTIONS
              </p>
            </div>
            <div class="main__block">
              <span class="main__block_step">
                {{ calcStep() }}
              </span>
              <h3 class="main__block_title">{{ i.heading }}</h3>
              <p class="main__block_descr" v-if="i.step == 5">
                {{ i.subtitle }}
              </p>
            </div>
            <form action="" class="form">
              <div class="form" v-for="(item, index) in i.forms" :key="index">
                  <InputText :item="item" v-model="item.id" />
                <div class="form" v-show="item.type =='select'">
                <select name="pets" v-model="selected" id="pet-select">
                    <option selected disabled hidden>Выберите категорию</option>
                    <option v-for="(i,index) in item.options" :key="index" :value="i.value">{{i.title}}</option>
                </select>
                </div>
              </div>
              <div class="form" v-if="i.step == 5"></div>
              <input
                v-else
                type="button"
                id="first-btn"
                @click="nextStep()"
                class="form-btn"
                value="Дальше"
              />
            </form>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import forms from "../store/forms";
import InputText from "../components/forms/input-text"
import { mapState } from "vuex";

export default {
    components:{
        InputText
    },
  data() {
    return {
      pages: forms,
      publicPath: process.env.BASE_URL,
      name: null,
      looking: null,
      brief: null,
      terms: null,
      telegram: null,
      payment: null,
      task: null,
      selected: null,
    };
  },
  methods: {
    
    calcStep() {
      let a = forms.length;
      let b = this.step;

      return `ШАГ ${b}/${a}`;
    },
    nextStep() {
      let n = this.step + 1;
      this.$store.commit("SET_STEP", n);
      console.log(`Set to state: ${n}`);

      if (this.step == 5) {
        this.$store;
      }
    },
  },
  computed: {
    ...mapState(["step"]),
  },
  mounted() {
    console.log(`Load from state ${this.step}`);
  },
};
</script>

<style>
</style>