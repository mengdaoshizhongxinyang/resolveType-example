import { defineComponent } from "vue";
import Test from "./Test";
export default defineComponent(()=>{
  return ()=><Test a="" b={2}></Test>
  
})