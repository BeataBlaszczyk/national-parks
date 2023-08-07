import { shallowMount } from "@vue/test-utils";
import SmallInfoComponentVue from "../../src/components/SmallInfoComponent/SmallInfoComponent.vue";

describe("SmallInfoComponent.vue", ()=>{

    let wrapper;

    beforeEach(()=>{
        wrapper = shallowMount(SmallInfoComponentVue, {
            propsData: {
                article: {
                        id: 123,
                        title: "title",
                        articleUrl: "url",
                        shortDescription: "description",
                        image: {
                          altText:  'Alt text for image',
                          imageUrl:  'https://picsum.photos/200/300?grayscale'
                        }
                }
            }
        })
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