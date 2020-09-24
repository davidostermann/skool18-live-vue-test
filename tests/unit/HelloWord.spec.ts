import VueCompositionAPI from "@vue/composition-api";
import HelloWorld from "@/components/HelloWorld/HelloWorld.vue";
import { createLocalVue, shallowMount } from "@vue/test-utils";

const localVue = createLocalVue();
localVue.use(VueCompositionAPI);

describe("HelloWorld", () => {
  describe("when receive name props", () => {
    it("should display the name's value", () => {
      const wrapper = shallowMount(HelloWorld, {
        propsData: {
          name: "foo",
          icon: "icon"
        },
        localVue
      });

      const title = wrapper.find("h1").text();

      expect(title).toEqual("Hello foo icon");
    });
  });
  describe("when cars are visibles", () => {
    describe("when click on switch visibility button", () => {
      it("should hide cars", () => {
        // given
        const wrapper = shallowMount(HelloWorld, { localVue });
        wrapper.setData({
          isCarsVisible: true
        });
        const btn = wrapper.find("button");
        //when
        btn.trigger("click");
        //then
        const cars = wrapper.find("[data-test=cars]");
        expect(cars.exists()).toBe(false);
      });
    });
  });
  describe("when cars are not visibles", () => {
    describe("when click on switch visibility button", () => {
      it("should show cars", async () => {
        // given
        const wrapper = shallowMount(HelloWorld, { localVue });
        wrapper.setData({
          isCarsVisible: false
        });
        const btn = wrapper.find("button");
        //when
        await btn.trigger("click");
        //then
        const cars = wrapper.find("[data-test=cars]");
        expect(cars.exists()).toBe(true);
      });
    });
  });
});
