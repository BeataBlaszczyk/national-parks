import { shallowMount } from "@vue/test-utils";
import ParksFilter from "../../src/components/ParksFilter/ParksFilter.vue";

describe("ParksFilter.vue", ()=>{

    let wrapper;

    beforeEach(()=>{
        wrapper = shallowMount(ParksFilter)
    })

    afterEach(()=>{
        wrapper.unmount();
    })

    describe("Instance and rendered", ()=>{
        it ("The component is mounted", ()=>{
             expect(!!wrapper.vm).toBeTruthy();
        })
    })
    describe("Handler\'s invocayion, ", ()=>{
        it("emitFilter emits 'filteredState", ()=>{
            console.log(wrapper.vm)
            wrapper.vm.emitFilter("test-key")
            expect(wrapper.emitted().filteredState[0]).toEqual(["test-key"])
        })
        it("emitSearch emits 'searchedValue", ()=>{
            expect(wrapper.emitted().searchedValue?.[0]).toBeFalsy();

            wrapper.vm.emitSearch()
            expect(wrapper.emitted().searchedValue[0]).toBeTruthy
        })
    })

})