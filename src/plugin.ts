import { Plugin, Action} from '@fivethree/billy-core';
// @App() // uncomment to test the plugin
@Plugin('my-plugin')
export class MyPlugin {

    @Action('Hello World')
    async helloWorld() {
        console.log('hello world');
    }

    @Action('timeout')
    async timeout(dur: number) {
        console.log(`wait for ${dur}ms!`)
        return new Promise(resolve => {
            setTimeout(() => {
                console.log('done waiting');
                resolve();
            }, dur);
        })
    }

}