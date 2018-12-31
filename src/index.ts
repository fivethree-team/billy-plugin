import { Plugin, Action } from '@fivethree/billy-core';
@Plugin('my-plugin')
class MyPlugin {

    @Action('Hello World')
    helloWorld() {
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

export default new MyPlugin();