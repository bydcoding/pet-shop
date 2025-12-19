import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useUser = defineStore("user", {
  state: () => ({
    token: localStorage.getItem("token") || null,
    user: JSON.parse(localStorage.getItem("user") || null),
  }),
  getters: {
    isLogin: (state) => !state.token,
    userName: (state) => state.user?.name || null,
  },
  actions: {
    async login(account, password) {
      try {
        const res = await fetch("http://localhost:3000/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ account, password }),
        });
        const data = await res.json();

        if (!res.ok || !data.ok) {
          throw new Error("帳號或密碼錯誤(pinia)");
        }
        this.token = data.token;
        this.user = data.user;
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        return true; //給其他元件判斷有沒有成功
      } catch (err) {
        console.log("錯誤訊息", err.message);
      }
    },
    logout() {
      this.token = null;
      this.user = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
});
