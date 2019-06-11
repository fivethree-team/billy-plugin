import { Plugin, Action} from '@fivethree/billy-core';
@Plugin('my-plugin description')
export class MyPlugin {

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