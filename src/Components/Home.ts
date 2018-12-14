import Vue from 'vue'
import Component from 'vue-class-component'

// The @Component decorator indicates the class is a Vue component
@Component({
    // All component options are allowed in here
    template: `
        <div>
            <p>home page </p>
            <button @click="onClick" > {{ message }} </button>
        </div>`,
})
export default class Home extends Vue {
    message: string = '';

    onClick(): void {
        window.alert(this.message)
    }

    //data: () => {
    //    return {
    //        message: 'Hello!'
    //    }
    //}
}