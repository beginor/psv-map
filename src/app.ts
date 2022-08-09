import { Viewer, ViewerOptions } from 'photo-sphere-viewer';
import { CubemapAdapter } from 'photo-sphere-viewer/dist/adapters/cubemap';

import './app.css';

declare function getQueryString(key: string): string;

export class App {

    /** app title */
    public title = 'Photo Sphere Viewer Demo';

    private viewer?: Viewer;

    constructor(private container: HTMLElement) {
        container.innerHTML = '';
    }

    /**
     * run the app.
     */
    public run(): void {
        void this.init();
    }

    private async init(): Promise<void> {
        const pano = getQueryString('pano') ?? '从化街口';
        const url = `assets/panoramas/${pano}.json`;
        try {
            const options = await this.getPanorama(url);
            options.container = this.container;
            this.viewer = new Viewer(options);
        }
        catch (ex: any) {
            this.container.innerHTML = 'Init error!';
            console.error(ex);
        }
    }

    private async getPanorama(panoUrl: string): Promise<ViewerOptions> {
        const res = await fetch(panoUrl);
        const json = await res.json();
        delete json.metadata;
        if (json.adapter === 'CubemapAdapter') {
            json.adapter = CubemapAdapter;
        }
        return json as ViewerOptions;
    }

}
