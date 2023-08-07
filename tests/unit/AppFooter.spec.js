import { shallowMount } from "@vue/test-utils";
import AppFooterVue from "../../src/components/AppFooter/AppFooter.vue";

describe("AppFooter.vue", ()=>{

    let wrapper;

    beforeEach(()=>{
        wrapper = shallowMount(AppFooterVue)
    })

    afterEach(()=>{
        wrapper.unmount();
    })

    describe("Instance and rendered", ()=>{
        it ("The component is mounted", ()=>{
             expect(!!wrapper.vm).toBeTruthy();
        })
    })

})