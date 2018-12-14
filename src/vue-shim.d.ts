//Makes it possible to import .vue files into TypeScript

declare module "*.vue" {
    import Vue from 'vue'
    export default Vue
}