import fse from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { DefaultTheme, type PageEvent, type Reflection, type Renderer, RendererEvent } from 'typedoc';

import { OverrideThemeContext } from './OverrideThemeContext.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export class OverrideTheme extends DefaultTheme {
	public constructor(renderer: Renderer) {
		super(renderer);

		this.owner.on(RendererEvent.END, event => {
			const src = path.join(__dirname, `assets`);
			const dest = path.join(event.outputDirectory, `assets`);
			try {
				console.log(`[hierarchy-theme] Copying assets from ${src} to ${dest}`);
				console.log(`[hierarchy-theme] Source exists: ${fse.existsSync(src)}`);
				if (fse.existsSync(src)) {
					console.log(`[hierarchy-theme] Source contents: ${fse.readdirSync(src).join(', ')}`);
				}
				fse.copySync(src, dest);
				console.log(`[hierarchy-theme] Assets copied successfully`);
			} catch (err) {
				console.error(`[hierarchy-theme] Failed to copy assets:`, err);
			}
		});
	}

	public override getRenderContext(page: PageEvent<Reflection>): OverrideThemeContext {
		return new OverrideThemeContext(this.router, this, page, this.application.options);
	}
}
