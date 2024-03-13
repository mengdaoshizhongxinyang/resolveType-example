import { defineComponent } from "vue";
type Props={
    a:string,
    b:number
}
export default defineComponent((props:Props)=>{
    return ()=><div>
        <div>{props.a}</div>
        <div>{props.b}</div>
    </div>
})